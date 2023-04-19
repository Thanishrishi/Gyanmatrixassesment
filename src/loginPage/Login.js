
import React from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
function Login(){

    const [email,setEmail] = React.useState('');;
    const [password,setPassword] = React.useState('');
    const [error,setError] = React.useState(false);
    const navigate = useNavigate();
    function validate(){
        const emails = localStorage.getItem('email');
        const pass = localStorage.getItem('password');
        if(email === emails && password == pass){
            navigate('Home')
        }else{
            setError(true);
        }
    }
    return(
  
        <div className="maindiv">
           <div className="navdiv">
               <img src="/images/logo.png"/>
           </div>
           <div className="centerdiv"> 
                <div className="logindiv">
                    <div className="loginmaterials">

                    <h1>LogIn</h1>
                    <input onChange={event=>setEmail(event.target.value)} placeholder="Your Email"></input>
                    <input onChange = {event=> setPassword(event.target.value)} placeholder="Your Password"></input>
                    <button onClick={()=>{validate()}}>Login</button>
                    {error ? <h6>invalid credentials</h6> : null}
                    </div>
                </div>
           </div>
        </div>

    )
}


export default Login;