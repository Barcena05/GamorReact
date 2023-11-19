import './index.css'
export default GameSearch;
import { display_games_selector } from './main';
import { Search } from './main';

function GameSearch() {
    return (
      <div id="GameSearch" className="contentCol">
        <h4
          style={{ position: "relative", left: "25%", maxWidth: "50%" }}
          id="Chosse_Plattform"
        >
          Choose Plattform!!
        </h4>
        <div id="ChooseArea">
          <button className="Choise" id="Party">
            Party
          </button>
          <button className="Choise">Matchs</button>
          <button className="Choise">Streams</button>
        </div>
        <h4
          style={{ position: "relative", left: "25%", maxWidth: "50%" }}
          id="SearchHeading"
        >
          Search for your favorite games!!
        </h4>
        <div id="SearchArea">
          <div id="searchBox">
            <div id="game_name">Assasins Creed</div>
            <div id="Games_Selection_Area">
              <button id="Display_selector" onClick={display_games_selector} />
              <select id="Game_Selection" name="Game_Selection">
                <option id="Assasins_Creed">Assasins Creed</option>
                <option id="FIFA">FIFA</option>
                <option id="Call_of_Duty">Call of Duty</option>
                <option id="Fortnite">Fortnite</option>
                <option id="Skyrim">Skyrim</option>
              </select>
            </div>
          </div>
          <div id="SearchResults"></div>
          <button type="button" id="Search" onClick={Search}>
            Search Now!
          </button>
        </div>
      </div>
  
    );
  };