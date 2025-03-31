import { useEffect, useState } from "react";
import { getGame } from "../../services/gameservices";
import { useNavigate, useParams } from "react-router-dom";
import { getReviews } from "../../services/reviewservices";

export const GameDetails = () => {
  const [game, setGame] = useState({});
  const [reviews, setReviews] = useState([]);
  const { gameId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getGame(Number(gameId)).then((data) => {
      setGame(data);
    });
    getReviews().then((data) => {
        setReviews(data);
      });
  }, []);

  const filteredReviews = reviews.filter((review) => review.game === (Number(gameId)))

  console.log(filteredReviews);

  if (game && game.categories) {
    return (
      <>
        <h2> {game.title} Details</h2>
        <div>
          <button
            onClick={() => {
              navigate(`/allgames/${game.id}/review`);
            }}
          >
            Review Game
          </button>
        </div>
        <div>Designer: {game.designer}</div>
        <div>Year Released: {game.year_released}</div>
        <div>Numbers of Players: {game.number_of_players}</div>
        <div>Estimated Time to Play: {game.play_time}</div>
        <div>Age Recommendations: {game.recommended_game}</div>
        <div>
          Categories:{" "}
          {game.categories.map((category) => (
            <div key={category.id}>{category.name}</div>
          ))}
        </div>
        <div>
          <h3>Reviews:</h3>
          <div>
            {filteredReviews.map((review) => {
              return (
                <div key={review.id}>
                 <div> Rating:{review.rating}</div>
                 <div>Comment:{review.comment}</div> 
    
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
};
