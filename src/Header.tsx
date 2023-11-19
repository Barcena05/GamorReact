export default Header;
import './index.css'
import { myFunction_set_colors } from './main';
import { useEffect } from 'react';
function Header() {
  useEffect(()=>{
    let user = document.getElementById("User") as HTMLParagraphElement;
    addEventListener("storage", () => user.innerText = localStorage.getItem("User") as string);
  },[])
    return (
      <div id="Header">
        <h3 style={{ textAlign: "center", fontFamily: "sans-serif" }} id="TopHead">
          Gamor
        </h3>
        <div id="NavBar">
          <div id="LeftBar">
            <ul id="leftBar" className="nav">
              <li>
                <a href="#Start">Home</a>
              </li>
              <li>
                <a href="#Start">Streams</a>
              </li>
              <li>
                <a href="#Start">Party</a>
              </li>
              <li>
                <a href="#Start">Premiun</a>
              </li>
            </ul>
          </div>
          <div id="LoginBar">
            <button type="button" id="Mode" onClick={myFunction_set_colors}>
              Change Mode
            </button>
            <ul id="loginBar" className="nav">
              <li>
                <a href="Login.html" target="_blank" id="SignIn" onClick={()=> localStorage.setItem("Log", '1') }>
                  Sign In
                </a>
              </li>
              <li>
                <a href="Login.html" target="_blank" id="CreateAccount" onClick={ () => { localStorage.setItem("Log", '0') }}>
                  Create account
                </a>
              </li>
            </ul>
          </div>
          <div id="UserBar">
            <p id="User" />
          </div>
        </div>
      </div>
    );
  };