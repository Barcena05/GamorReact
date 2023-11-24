import React from 'react'
import './index.css'
import Sign from './Sign';
import Log from './Log';
export { SwitchToRegister };
export { SwitchToLog };
export { loadData };
export { Initial_display }
export {Login}

function Login() {
    return (
        <React.StrictMode>
            <Log />
            <Sign />
        </React.StrictMode>
    )
}


window.onload = function () {
    selectTheme();
}

function SwitchToRegister() {
    let l = document.getElementById("Log") as HTMLElement;
    let s = document.getElementById("Sign") as HTMLElement;
    l.style.display = "none"; s.style.display = "flex";
}
function SwitchToLog() {
    let l = document.getElementById("Log") as HTMLElement;
    let s = document.getElementById("Sign") as HTMLElement;
    s.style.display = "none"; l.style.display = "flex";
}



function selectTheme() {
    let r = document.querySelector(':root') as HTMLElement;
    r.style.setProperty('--inCol', localStorage.getItem('--inCol'));
    r.style.setProperty('--backCol', localStorage.getItem('--backCol'));
    r.style.setProperty('--InText', localStorage.getItem('--InText'));
    r.style.setProperty('--createAccount', localStorage.getItem('--createAccount'));
}


function Initial_display() {
    let l = document.getElementById("Log") as HTMLElement;
    let s = document.getElementById("Sign") as HTMLElement;
    console.log(l);
    console.log(s);
    if (localStorage.getItem('Log') === "1") {
        console.log('Loging');
        s.style.display = "none"; l.style.display = "flex";
    }
    else {
        l.style.display = "none"; s.style.display = "flex";
    }
}



function loadData() {
    let users = localStorage.getItem("users");
    let user_data;
    if (users == null) user_data = [];
    else user_data = JSON.parse(users);
    return user_data;
}
