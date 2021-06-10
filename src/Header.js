import React from 'react';
import './Header.css';
import {Avatar} from '@material-ui/core';
import Accestimeicon  from '@material-ui/icons/AccessTime';
import Search from '@material-ui/icons/Search';
import Helpoutlineicon from '@material-ui/icons/HelpOutline';
import { useStateValue } from "./StateProvider";

 

function Header() {
    const [{user},dispatch] = useStateValue();
    return (
        <div className="header">
           <div className="header__left">
                <Avatar src={user?.photoURL} alt="avatr" />
                <Accestimeicon/>
           </div>
           <div className="header__search"> 
               <Search/>
               <input type="text" placeholder="search input jay patel"/>
           </div>
           <div className="header__right">
                <Helpoutlineicon/>
           </div>
        </div>
    );
}

export default Header;