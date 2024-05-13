import './message.css'
// import { ChatEngine } from 'react-chat-engine';


const Messagetext = (props) => {
    const currentTime = new Date().toLocaleTimeString();
    return (
        <div className={props.class}>
            <div className="message">
                <span>{props.name}</span>
            </div>
            <div className="message-meta">

                <span className="timestamp">{currentTime} PM</span>
            </div>
        </div>
    );
}

export default Messagetext;