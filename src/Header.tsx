export default Header;
import './index.css'
import { myFunction_set_colors } from './main';
import { useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
function Header() {
  useEffect(()=>{
    let user = document.getElementById("User") as HTMLParagraphElement;
    addEventListener("storage", () => user.innerText = localStorage.getItem("User") as string);
  },[])
    return (
      <div id="Header" style={{fontFamily:'sans-serif'}}>
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
            {/* <Link to="/blogs">Blogs</Link> */}
              <li>
                <Link to='/Login' id="SignIn" onClick={()=> localStorage.setItem("Log", '1') }>
                  Sign In
                </Link>
              </li>
              <li>
                <Link to='/Login' id="CreateAccount" onClick={ () => { localStorage.setItem("Log", '0') }}>
                  Create account
                </Link>
              </li>
            </ul>
          </div>
          <div id="UserBar">
            <p id="User" />
          </div>
        </div>
        <Outlet/>
      </div>
    );
  };