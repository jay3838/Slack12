import React, { useEffect, useState } from 'react';
import './Chat.css';
import {useParams} from  'react-router-dom';
import StarBorderoutlinedicon from '@material-ui/icons/StarBorderOutlined';
import Infooutlinedicon from '@material-ui/icons/InfoOutlined';
import db from './Firebase';
import ChatInput from './ChatInput';
import Message from './Message';
import firebase from "firebase"
import { useStateValue } from "./StateProvider";

function Chat() {
    const {roomId} = useParams();
    const [roomdetail,setroomdetail] = useState(null);
    const [roommsg,setroommsg]= useState([]);
    const [{user},dispatch] = useStateValue();

    const sendMessage = (text) => {
        if(roomId){
            let payload = {
                message:text,
                timestamp: firebase.firestore.Timestamp.now(),
                user:user?.displayName,
                image:user?.photoURL
            }
            db.collection("rooms").doc(roomId).collection('messages').add(payload);
        }
    }

    useEffect(()=>{
        if(roomId){
            db.collection("rooms").doc(roomId).onSnapshot(snapshot =>{
                setroomdetail(snapshot.data()
                )
              });
            
              db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp','asc').onSnapshot(snapshot =>{
                setroommsg(snapshot.docs.map(doc=>
                  doc.data()
                ))
              })
          
        }

    },[roomId]);
    console.log("my room", roomdetail);
    
    return (
        <div className="chat">
          <div className="chat__header">
              <div className="chat__headerleft">
                  <h4>
                      <strong># {roomdetail?.name}</strong>
                      <StarBorderoutlinedicon/>
                  </h4>

              </div>
              <div className="chat__headerright">
                    <p>
                        <Infooutlinedicon /> 
                        Details
                    </p>
              </div>    
            </div>
        <div className="chat__message">
            {roommsg.map(msg =>(
            <Message 
                message={msg.message}
                timestamp={msg.timestamp}
                user={msg.user}
                image={msg.image}
             />
            ))}
        </div>

            <div className="chat__msg">
                <ChatInput sendMessage={sendMessage} />
            </div>
        </div>
    );
}

export default Chat;