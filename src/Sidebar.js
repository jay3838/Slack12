import React, { useState ,useEffect} from 'react';
import './Sidebar.css';
import FiberManualRecordicon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import Sidebaroption from './Sidebaroption';
import Insertcomponents from '@material-ui/icons/InsertComment';
import Inboxicon from '@material-ui/icons/Inbox';
import Drafticon from '@material-ui/icons/Drafts';
import Bookmarkicon from '@material-ui/icons/Bookmark';
import Peopleicon from '@material-ui/icons/People';
import Appsicon from '@material-ui/icons/Apps';
import Filecopyicon from '@material-ui/icons/FileCopy';
import Expandlessicon from '@material-ui/icons/ExpandLess';
import Expandmoreicon from '@material-ui/icons/ExpandMore';
import Addicon from '@material-ui/icons/Add';
import  db  from './Firebase.js';


function Sidebar() {
    const [channel,setchannel]=useState([]);

    useEffect(()=>{
        db.collection('rooms').onSnapshot((snapshot) =>{
          setchannel(snapshot.docs.map((doc) => ({
              id:doc.id,
              name:doc.data().name,
          })
          ))
        })
      });

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>dplphelog helloworld</h2>
                    <h3>
                        <FiberManualRecordicon />
                        jaypatel
                    </h3> 
                </div>
                <CreateIcon/>
            </div>
                <Sidebaroption  Icon={Insertcomponents} title="Threades"/>
                <Sidebaroption Icon={Inboxicon} title="Mentions & reaction"/>
                <Sidebaroption Icon={Drafticon} title="Saved items"/>
                <Sidebaroption Icon={Bookmarkicon} title="Channel browser"/>
                <Sidebaroption Icon={Peopleicon} title="People & user groups"/>
                <Sidebaroption Icon={Appsicon} title="Apps"/>
                <Sidebaroption Icon={Filecopyicon} title="File browser"/>
                <Sidebaroption Icon={Expandlessicon} title="Show Less"/>
                <hr/>
                <Sidebaroption Icon={Expandmoreicon} title="Chanels"/>
                <hr/>
                <Sidebaroption Icon={Addicon} addchannelop title="Add Channel"/>
               
                {channel.map(channels => (
                    
                    <Sidebaroption title={channels.name} id={channels.id}/>
                ))}
        </div>
    );
}

export default Sidebar;