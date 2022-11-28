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

    //moje s promenlivi ako smqtash che inache ne e dostatychno descriptivno
    //const latestGames = games.map(x => <LatestGame key={x._id} game={x} />); //moje taka i posle podavash promenlivata, no tova e kogato stane mnogo debel koda spored nego 
    //const hasGames = games.length > 0; //i taka stava, toest s bulevi izrazi. No tova samo po sebe si e dostatychno descriptivno
    //no ako e 'games.length > 7' togava naistina e hubavo samata promenliva da podskazva za rolqta na buleviq izraz v sluchaq
    
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