import './message.css'
import { useState, useRef, useEffect } from 'react';
import Messagetext from './textmessage';
// import { ChatEngine } from 'react-chat-engine';



function Message(props) {
    const [inputValue, setInputValue] = useState('');
    const [Messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);



    // const user1 = { username: 'user1', secret: 'user1-secret', port: 8000 };
    // const user2 = { username: 'user2', secret: 'user2-secret', port: 8001 };


    function handleInputChange(event) {
        setInputValue(event.target.value);
    }


    const addChild = () => {
        const newChild = <div >{<Messagetext key={Messages.length} name={inputValue} class={Messages.length % 2 === 0 ? "message-wrapper  messageleft" : "message-wrapper  messageright"} />}</div>;
        setMessages([...Messages, newChild]);
        setInputValue('');
    };
    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [Messages]);
    return (
        <div className="message">
            <div className="app-wrapper">
                <div className="app-header">
                    <h2>Le Professeur {props.data} </h2>
                    <span className="friend-status">Online</span>
                </div>
                <div className="app-message-body">

                    <div ref={messagesEndRef} />
                   
                    {Messages.map((message, index) => (
                        <div key={index}>{message}</div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                <div className="app-input-area">
                    <input type="text" placeholder="Your message here..." value={inputValue} onChange={handleInputChange} />
                    <button type="submit" onClick={addChild}>
                        <svg viewBox="0 0 512 512" x="0px" y="0px" style={{}} width="25" height="25" title="paper-plane">
                            <path fill="" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* <ChatEngine */}
            {/* projectID='
b282c476-9ef4-4268-8baa-8f29a64b2fa1'
                userName='hamid'
                userSecret='hamid2002'
            /> */}
        </div>
    );
}

export default Message;