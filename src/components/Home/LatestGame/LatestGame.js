
const LatestGame = ({
    game
}) => {
    return (
        <div className="game">
            <div className="image-wrap">
                <img src={game.imageUrl} />
            </div>
            <h3>{game.title}</h3>
            <div className="rating">
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
            </div>
            <div className="data-buttons">
                <a href="#" className="btn details-btn">
                    Details
                </a>
            </div>
        </div>
    );
};

export default LatestGame;











{/* <div className="game">
   <div className="image-wrap">
       <img src="./images/ZombieLang.png" />
   </div>
   <h3>Zombie Lang</h3>
   <div className="rating">
       <span>☆</span>
       <span>☆</span>
       <span>☆</span>
       <span>☆</span>
       <span>☆</span>
   </div>
   <div className="data-buttons">
       <a href="#" className="btn details-btn">
           Details
       </a>
   </div>
</div>
<div className="game">
   <div className="image-wrap">
       <img src="./images/MineCraft.png" />
   </div>
   <h3>MineCraft</h3>
   <div className="rating">
       <span>☆</span>
       <span>☆</span>
       <span>☆</span>
       <span>☆</span>
       <span>☆</span>
   </div>
   <div className="data-buttons">
       <a href="#" className="btn details-btn">
           Details
       </a>
   </div>
</div> */}