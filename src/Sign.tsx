import './index.css'
export default Sign;
import { SwitchToLog } from './Login';
import { loadData } from './Login';
import { useEffect } from 'react';
import { Initial_display } from './Login';

function Sign() {
    useEffect(()=>{
        Initial_display();
    },[])

    return (
        <div id="Sign" className="Register">
            <h1>
                Welcome, please introduce the required data to Sign In
            </h1>
            <p>
                Introduce your firstname
            </p>
            <input type="text" name="DataIn" id="sign_firstname_in" />
            <p>
                Introduce your lastname
            </p>
            <input type="text" name="DataIn" id="sign_lastname_in" />
            <p>
                Introduce your username
            </p>
            <input type="text" name="DataIn" id="sign_username_in" />
            <p>
                Introduce your password
            </p>
            <input type="password" name="DataIn" id="sign_pass_in" />
            <p>
                Please select the games you want to purchase
            </p>
            <form id='games'>
                <input type="checkbox" name="Assasins Creed" id="Assasins_Creed" />
                <label htmlFor="Assasins_Creed">Assasins Creed</label> <br />
                <input type="checkbox" name="Call of Duty" id="CoD" />
                <label htmlFor="CoD">Call of Duty</label> <br />
                <input type="checkbox" name="FIFA" id="FIFA" />
                <label htmlFor="FIFA">FIFA</label> <br />
                <input type="checkbox" name="Fortnite" id="Fortnite" />
                <label htmlFor="Fortnite">Fortnite</label> <br />
                <input type="checkbox" name="Skyrim" id="Skyrim" />
                <label htmlFor="Skyrim">Skyrim</label> <br />
            </form>
            <button type="button" id="show_sign_pass" onClick={() => {
                let pass = document.getElementById("sign_pass_in") as HTMLInputElement;
                if (pass.type == "password") {
                    pass.type = "text";
                }
                else {
                    pass.type = "password";
                }
            }}>Show Password</button>
            <button type="button" id="signAccept" onClick={async () => {
                let in_user = (document.getElementById("sign_username_in") as HTMLInputElement).value;
                let found = false;
                let users = loadData();
                for (let index = 0; index < users.length; index++) {
                    const element = users[index];
                    if (element.username === in_user) {
                        alert("User already exists");
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    let games = (document.getElementById("games") as HTMLElement).getElementsByTagName("input") as HTMLCollectionOf<HTMLInputElement>;
                    let submitted = [];
                    for (let index = 0; index < games.length; index++) {
                        if (games[index].checked) {
                            submitted.push(games[index].name);
                        }
                    }
                    let datas =
                    {
                        firstName: (document.getElementById("sign_firstname_in") as HTMLInputElement).value,
                        lastName: (document.getElementById("sign_lastname_in") as HTMLInputElement).value,
                        username: in_user,
                        games: submitted,
                        password: (document.getElementById("sign_pass_in") as HTMLInputElement).value
                    }
                    console.log(users)
                    users.push(datas);
                    console.log(users);
                    localStorage.setItem("users", JSON.stringify(users));
                    localStorage.setItem("User", datas.username);
                    window.open('', '_parent', '');
                    window.close();
                }
            }}>Accept</button>
            <button type="button" id="signCancel">Cancel</button>
            <button type="button" id="SwitchToLog" onClick={SwitchToLog}>Log</button>
        </div>
    );
}