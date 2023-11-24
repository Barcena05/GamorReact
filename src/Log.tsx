import './index.css'
export default Log;
import { SwitchToRegister } from './Login';
import { loadData } from './Login';
import { useEffect } from 'react';
import { Initial_display } from './Login';
import { Outlet, Link } from "react-router-dom";
function Log() {
    useEffect(()=>{
        Initial_display();
    },[])
    return (
        <div id='Log' className='Register'>
            <h1>
                Welcome, please introduce your name and your password to Log In
            </h1>
            <p>
                Name:
            </p>
            <input type="text" name='NameIn' id='NameIn' />
            <p>
                Password:
            </p>
            <input type="password" name="PassIn" id="PassIn" />
            <button type="button" id="ShowPass" onClick={() => {
                let pass = document.getElementById("PassIn") as HTMLInputElement;
                if (pass.type == "password") {
                    pass.type = "text";
                }
                else {
                    pass.type = "password";
                }
            }}>Show Password</button>
            <button type="button" id="logAccept" onClick={async () => {
                let completed = false;
                let users = loadData();
                let inLog = (document.getElementById("NameIn") as HTMLInputElement).value;
                let inPass = (document.getElementById("PassIn") as HTMLInputElement).value;
                let user_found = false;
                for (let index = 0; index < users.length; index++) {
                    const element = users[index];
                    if (element.username === inLog) {
                        user_found = true;
                        if (element.password === inPass) {
                            console.log("Empingao");
                            localStorage.setItem("User", element.username);
                            completed = true;
                        }
                        else {
                            alert("Wrong password, please try again");
                        }
                        break;
                    }
                }
                if (!user_found) alert("User not found");
                if (completed) {
                    window.open('', '_parent', '');
                    window.close();
                }
            }}>Accept</button>


            <Link to='/'  id="logCancel" >Cancel</Link>
            <button type="button" id="SwitchToRegister" onClick={SwitchToRegister}>Register</button>
            <Outlet/>
        </div>
    );
}

