import React from 'react';
import './Login.css';
import { auth, provider } from './Firebase';
import {Button} from '@material-ui/core';
import { useStateValue } from "./StateProvider";


function Login() {
    const [state,dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result)=>{
            console.log('jp',result);
            dispatch({
                type: "SET_USER",
                user:result.user,
              });
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

    return (
        <div className="login">
            <div className="login__main">
                <img src="https://yt3.ggpht.com/ytc/AAUvwnhZtcTvJEkvuZMdTzjhPLvZGIQSo9nel4btx7j9rg=s900-c-k-c0x00ffffff-no-rj" alt="jp"/>
                    <h1>Sign in Slack</h1>
                    <Button onClick={()=>signIn()}>
                        Sign In With Google
                    </Button>
            </div>
           
        </div>
    );
}

export default Login;