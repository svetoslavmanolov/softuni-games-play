import { useEffect, useState } from "react";
import * as gameService from '../../services/gameService';
import LatestGame from "./LatestGame/LatestGame";

const Home = () => {
    const [games, setGames] = useState([]);  //za da ne garmi pri parvo renderirane toest da ne e undefined


    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result);  //taka zapazvame games v state-a na Home komponenta 
            });
    }, []);

    return (
        // {/*Home Page*/}
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />
            <div id="home-page">
                <h1>Latest Games</h1>
                
                {/* Display div: with information about every game (if any) */}
                {games.length > 0
                    ? games.map(x => <LatestGame key={x._id} game={x} />)
                    : <p className="no-articles">No games yet</p>
                }
                {/* Display paragraph: If there is no games  */}
            </div>
        </section>
    );
};

export default Home;