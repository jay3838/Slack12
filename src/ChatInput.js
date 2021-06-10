import React, { useState } from 'react'
import  './Chatinput.css';

function ChatInput({ sendMessage }) {

    const [input, setInput] = useState("");


    const send = (e) => {
        e.preventDefault();
        sendMessage(input);
        setInput("")
    }


    return (
       <div className="chatinput">
                    <input 
                        onChange={(e)=>setInput(e.target.value)}
                        type="text" 
                        value={input}
                        placeholder="Message here..." />
                    <button 
                        type="submit"
                        onClick={send}>
                            Send
                    </button>
               
       </div>
         
    )
}

export default ChatInput

