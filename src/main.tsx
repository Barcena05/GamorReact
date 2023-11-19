import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import Header from './Header'
import Summary from './Summary'
import PicsShow from './PicsShow'
import GameSearch from './GamesSearch'
import Category from './Category'
export { display_games_selector };
export { myFunction_set_colors };
export {Search};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <MainBoard />
    <CategorySect />
  </React.StrictMode>,
)

function MainBoard() {
  return (
    <>
      <Summary />
      <PicsShow />
      <GameSearch />
    </>
  );
};

function CategorySect() {
  return (
    <>
      <h3 id="CatHeading">
        Trending Categories
      </h3>
      <Category />
    </>
  );
}

let dark_mode = true;

var r = document.querySelector(':root') as HTMLElement;
function myFunction_set_colors() {
  dark_mode = !dark_mode;
  if (dark_mode) {
    r.style.setProperty('--InText', 'white');
    r.style.setProperty('--backCol', 'rgb(26, 32, 40)');
    r.style.setProperty('--inCol', 'rgb(33, 39, 47)');
    r.style.setProperty('--leftBarText', 'rgb(76, 83, 88)');
    r.style.setProperty('--leftBarHover', 'rgb(162, 82, 35)');
    r.style.setProperty('--logBarHover', 'rgb(76, 83, 88)');
    r.style.setProperty('--PicsButtom', 'rgba(255, 255, 255, 0.3)');
    r.style.setProperty('--createAccount', 'rgb(19, 23, 28)');
    r.style.setProperty('--categoryHover', 'darkorchid');
    r.style.setProperty('--SearchHover', 'white');
    r.style.setProperty('--ModeHover', 'rgb(76, 83, 88)');
    r.style.setProperty('--main_img', 'url("src/resources/pngwing.com1.png")');
    r.style.setProperty('--main_background', '#fe8944');
    localStorage.setItem('--InText', 'white');
    localStorage.setItem('--backCol', 'rgb(26, 32, 40)');
    localStorage.setItem('--inCol', 'rgb(33, 39, 47)');
    localStorage.setItem('--leftBarText', 'rgb(76, 83, 88)');
    localStorage.setItem('--leftBarHover', 'rgb(162, 82, 35)');
    localStorage.setItem('--logBarHover', 'rgb(76, 83, 88)');
    localStorage.setItem('--PicsButtom', 'rgba(255, 255, 255, 0.3)');
    localStorage.setItem('--createAccount', 'rgb(19, 23, 28)');
    localStorage.setItem('--categoryHover', 'darkorchid');
    localStorage.setItem('--SearchHover', 'white');
    localStorage.setItem('--ModeHover', 'rgb(76, 83, 88)');
  }
  else {
    r.style.setProperty('--InText', 'black');
    r.style.setProperty('--backCol', 'rgb(240,240,240)');
    r.style.setProperty('--inCol', 'white');
    r.style.setProperty('--leftBarText', 'rgb(30,30,30)');
    r.style.setProperty('--leftBarHover', 'rgb(125,50,240)');
    r.style.setProperty('--logBarHover', 'white');
    r.style.setProperty('--PicsButtom', 'rgba(255, 255, 255, 0.3)');
    r.style.setProperty('--createAccount', 'rgb(240,240,240)');
    r.style.setProperty('--categoryHover', 'orange');
    r.style.setProperty('--SearchHover', 'black');
    r.style.setProperty('--ModeHover', 'white');
    r.style.setProperty('--main_img', 'url("src/resources/pngwing.com.png")');
    r.style.setProperty('--main_background', '#7e34ee');
    localStorage.setItem('--InText', 'black');
    localStorage.setItem('--backCol', 'rgb(240,240,240)');
    localStorage.setItem('--inCol', 'white');
    localStorage.setItem('--leftBarText', 'rgb(30,30,30)');
    localStorage.setItem('--leftBarHover', 'rgb(125,50,240)');
    localStorage.setItem('--logBarHover', 'white');
    localStorage.setItem('--PicsButtom', 'rgba(255, 255, 255, 0.3)');
    localStorage.setItem('--createAccount', 'rgb(240,240,240)');
    localStorage.setItem('--categoryHover', 'orange');
    localStorage.setItem('--SearchHover', 'black');
    localStorage.setItem('--ModeHover', 'white');
  }
}


localStorage.setItem("User", "unregistered");
let user = document.getElementById("User") as HTMLParagraphElement;
addEventListener("storage", () => user.innerText = localStorage.getItem("User") as string);




let search_input = document.getElementById("Game_Selection") as HTMLSelectElement;
let search_results = document.getElementById("SearchResults") as HTMLElement;

function display_games_selector() {
  let element = document.getElementById('Game_Selection') as HTMLElement;
  if (element.style.display == 'none') {
    element.style.display = 'block';
  }
  else element.style.display = 'none';
}

function loadData() {
  let users = localStorage.getItem("users");
  let user_data;
  if (users == null) user_data = [];
  else user_data = JSON.parse(users);
  return user_data;
}

let colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'aqua', 'gold', 'cyan', 'lime'];
function set_color() {
  let n = Math.random();
  return colors[Math.floor(n * 10)];
}

function Search(){
  for (let index = 0; index < search_results.children.length; index++) {
    search_results.children[index].remove();
  }
  let text_in = search_input.value;
  (document.getElementById('game_name') as HTMLDivElement).innerHTML = text_in;
  let data = loadData();
  for (let index = 0; index < data.length; index++) {
    if (data[index].games.includes(text_in)) {
      let paragraph = document.createElement('p');
      paragraph.innerHTML = data[index].username;
      paragraph.style.marginBottom = 'auto';
      paragraph.style.marginTop = 'auto';
      let after = document.createElement('::after');
      after.style.backgroundImage = 'url("resources/pngwing.com.png")';
      after.style.backgroundSize = 'cover';
      let color = set_color();
      after.setAttribute('class', 'player_icon');
      after.style.backgroundColor = color;
      after.style.borderStyle = 'hidden';
      after.style.borderRadius = '50%'
      after.style.display = 'inline-block';
      after.style.height = '1.5vw';
      after.style.width = '1.5vw';
      after.style.content = '" "';
      paragraph.appendChild(after);
      let button = document.createElement('button');
      button.style.backgroundImage = 'url("resources/plus-large-svgrepo-com.svg")';
      button.style.backgroundSize = 'cover';
      button.style.width = '20px';
      button.style.height = '20px';
      button.style.borderStyle = 'none';
      button.style.backgroundColor = 'rgb(128, 128, 128)';
      button.style.marginBottom = 'auto';
      button.style.marginTop = 'auto';
      let div = document.createElement('div');
      div.style.display = 'flex';
      div.style.flexDirection = 'row';
      div.style.justifyContent = 'space-between';
      div.appendChild(paragraph);
      div.appendChild(button);
      button.addEventListener('click', () => { throw_player(paragraph, color) });
      search_results.appendChild(div);
    }
  }
}

let players: any[] = [];
function throw_player(player: HTMLParagraphElement, color: string) {
  if (players.includes(player.innerText)) return;
  players.push(player.innerText);
  if (players.length > 3) return;
  let div = document.createElement('div');
  div.setAttribute('title', player.innerText);
  div.style.overflow = 'hidden';
  div.style.position = 'relative';
  let pic = document.createElement('img');
  pic.setAttribute('src', 'resources/pngwing.com.png');
  div.style.opacity = '0.8';
  pic.style.opacity = '0.8';
  div.style.display = 'inline-block';
  div.style.width = '10%';
  div.style.marginRight = '70%';
  pic.style.width = '100%';
  pic.style.height = '100%';
  div.style.borderStyle = 'hidden';
  div.style.borderRadius = '20%';
  div.style.backgroundColor = color;
  div.addEventListener('click', () => { remove_player(div) });
  div.appendChild(pic);
  (document.getElementById("PicsShow") as HTMLElement).appendChild(div);
}
function remove_player(player: HTMLParagraphElement) {
  let i = players.indexOf(player);
  players.splice(i, 1);
  player.remove();
}

var mediaqueryList0 = matchMedia("(min-width: 850px)");
mediaqueryList0.addListener(set_icons_size);
var mediaqueryList1 = matchMedia("(min-width: 700px)");
mediaqueryList1.addListener(set_icons_size);
var mediaqueryList2 = matchMedia("(max-width:700px)");
mediaqueryList2.addListener(set_icons_size);

function set_icons_size() {
  let icons = document.getElementsByClassName('player_icon');

  if (mediaqueryList0.matches) {
    console.log('La media query 0 se cumple');
    for (let index = 0; index < icons.length; index++) {
      const element = icons[index] as HTMLElement;
      element.style.height = '1.5vw';
      element.style.width = '1.5vw';
    }
  }
  else if (mediaqueryList1.matches) {
    console.log('La media query 1 se cumple');
    for (let index = 0; index < icons.length; index++) {
      const element = icons[index] as HTMLElement;
      element.style.height = '3vw';
      element.style.width = '3vw';
    }
  }
  else if (mediaqueryList2.matches) {
    console.log('La media query 2 se cumple');
    for (let index = 0; index < icons.length; index++) {
      const element = icons[index] as HTMLElement;
      element.style.height = '3vw';
      element.style.width = '3vw';
    }
  }
}