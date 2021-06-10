import React from 'react';
import './Sidebaroption.css';
import {useHistory} from 'react-router-dom';
import db from './Firebase';

function Sidebaroption({Icon,title,id,addchannelop}) {
    const history = useHistory();

    const selectchannel = ()=>{
        if(id){
            history.push(`/room/${id}`)
        }
        else{
            history.push(title);
        }
    }

    const addchannel = ()=>{
        const channelname= prompt("plz enter chanel chanelname");
        if(channelname){
            db.collection('rooms').add({
                name:channelname
            })
        }
    }
    return (
        <div className="sidebaroption">
           {/* {Icon && <Icon />} */}
           <div  onClick={addchannelop  ? addchannel : selectchannel}>
           {Icon ? (
                <div className="sidebaroption__icon" >
                    <Icon className="sidebaroption__iconmain"/>
                    <h3>{title}</h3>
                </div>
               ):(
                <div className="sidebaroption__hash">
                    <p>#</p>
                    <h3>{title}</h3>
                </div>
               )}
           </div>
        </div>
    );
}

export default Sidebaroption;