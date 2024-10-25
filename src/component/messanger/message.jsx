import './message.css'
import { useState, useRef, useEffect } from 'react';
import Messagetext from './textmessage';
import { arrayUnion, collection, doc, getDocs, onSnapshot, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import { db } from '../../lib/firebaseConfig';
import { useSelector } from 'react-redux';



function Message(props) {

    const [Messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);
    const user = useSelector((state) => state.auth.user);
    const [text_input, setText_input] = useState({
        text: ""
    });
    const [isCreated, setIsCreated] = useState(false);




    useEffect(() => {
        getMessages();
    }, [user.id]);

    const getMessages = () => {
        const chatId = localStorage.getItem(`chatId_${user.id}`);
        if (chatId) {
            const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
                setMessages(res.data());
                if (res.data() !== 'undefined') {
                    setIsCreated(true);
                }
            });
            return () => {
                unSub();
            };
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setText_input((prevData) => ({ ...prevData, [name]: value }));
    };
    const addChild = async (e) => {
        e.preventDefault();
        if (text_input.text === "") return;
        try {
            await updateDoc(doc(db, "chats", localStorage.getItem(`chatId_${user.id}`)), {
                messages: arrayUnion({
                    senderId: user.id,
                    text: text_input.text,
                    createdAt: Date.now(),
                })
            })
        }
        catch (err) {

            console.log(err);
        };
        setText_input({
            text: ""
        });
        getMessages()
    };


    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [Messages]);




    const createChatMessage = async () => {
        const chatRef = collection(db, "chats");
        const userChatRef = collection(db, "userchats");
        const q = query(userChatRef, where("userIdLocal", "==", props.data));

        setIsCreated(true);
        try {
            const newChatRef = doc(chatRef);
            localStorage.setItem(`chatId_${user.id}`, newChatRef.id);
            const querySnapshot = await getDocs(q);
            console.log(props.data);
            console.log(querySnapshot.docs[0]);

            if (querySnapshot.empty) {
                console.log("No matching documents.");
                return;
            }
            await setDoc(newChatRef, {
                createdAt: serverTimestamp(),
                messages: [],
            })

            await updateDoc(doc(userChatRef, user.id), {
                chats: arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage: "",
                    receiverId: querySnapshot.docs[0].id,
                    updatedAt: Date.now(),
                })
            })

            await updateDoc(doc(userChatRef, querySnapshot.docs[0].id), {
                chats: arrayUnion({
                    chatId: newChatRef.id,
                    receiverId: user.id,
                    updatedAt: Date.now(),
                })
            })
        } catch (err) {
            console.log(err);
        };
    }

    return (
        <div className="message">
            {isCreated && <div className="app-wrapper">
                <div className="app-header">
                    <h2>Le Professeur {props.data} </h2>
                    <span className="friend-status">Online</span>
                </div>
                <div className="app-message-body">
                    <div ref={messagesEndRef} />
                    {Messages && Messages.messages && Messages.messages.length > 0 ? (
                        Messages.messages.map((message, index) => (
                            <div key={message.createdAt || index}>
                                {message.text || 'No text available'}
                            </div>
                        ))
                    ) : (
                        <div>No messages available</div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="app-input-area">
                    <form action="" method="post" onSubmit={addChild} >
                        <input type="text" name="text" placeholder="Your message here..." value={text_input.text} onChange={handleChange} />
                        <button type="submit" className="submit" name="submit" id="submit" >
                            <svg viewBox="0 0 512 512" x="0px" y="0px" style={{}} width="25" height="25" title="paper-plane">
                                <path fill="" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>}
            {!isCreated &&
                <div className='createChat' onClick={createChatMessage}>
                    <span> Démarrer une conversation avec le professeur : <span>Nom prof</span></span>
                </div>
            }


        </div >
    );
}

export default Message;