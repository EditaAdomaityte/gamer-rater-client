import { useEffect, useState } from "react";
import { getCategories } from "../../services/categoryservices";
import { useNavigate } from "react-router-dom";
import { createGame } from "../../services/gameservices";

export const GameForm = () => {
  const [categories, setCategories] = useState([]);
  const [game, setGame]=useState({
    title:"",
    description:"",
    designer:"",
    year_released:"",
    number_of_players:"",
    play_time:"",
    recommended_age:"",
    categories:[]
  })
  const navigate = useNavigate();

  useEffect(() => {
    getCategories().then((array) => {
      setCategories(array);
    });
  }, []);

  const handleSave = (event) => {
    event.preventDefault();

    const newGame = {
      title: game.title,
      description: game.description,
      designer: game.designer,
      year_released: game.year_released,
      number_of_players: game.number_of_players,
      play_time: game.game_time,
      recommended_age: game.recommended_age,
      categories:game.categories
    };
    createGame(newGame).then(() => {
      navigate("/allgames");
      console.log(newGame)
    });
  };

  console.log(categories);
  if (categories) {
    return (
      <>
        <form>
          <h2>New Game Entry</h2>
          <fieldset>
            <div>
              <label>Title:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Game Title"
                required
                onChange={(event) => {
                    const copy={...game}
                    copy.title =event.target.value
                    setGame(copy)
                }}
              />
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label>Description:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Game Title"
                required
                onChange={(event) => {
                    const copy={...game}
                    copy.description = event.target.value;
                    setGame(copy);
                }}
              />
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label>Designer:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Game Title"
                required
                onChange={(event) => {
                    const copy={...game}
                    copy.designer = event.target.value;
                    setGame(copy);
                }}
              />
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label>Release Year:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Game Title"
                required
                onChange={(event) => {
                    const copy={...game}
                    copy.year_released = event.target.value;
                    setGame(copy);
                }}
              />
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label>Number of Players:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Game Title"
                required
                onChange={(event) => {
                    const copy={...game}
                    copy.number_of_players = event.target.value;
                    setGame(copy);
                }}
              />
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label>Play Time:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Game Title"
                required
                onChange={(event) => {
                    const copy={...game}
                    copy.play_time = event.target.value;
                    setGame(copy);
                }}
              />
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label>Age:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Game Title"
                required
                onChange={(event) => {
                    const copy={...game}
                    copy.recommended_age = event.target.value;
                    setGame(copy);
                }}
              />
            </div>
          </fieldset>
          <fieldset>
            <label>Category:</label>
            <select
              id="categories"
              name="categories"
              onChange={(event) =>{
                const copy={...game}
                copy.categories= [parseInt(event.target.value)]
                setGame(copy);
            }}
            defaultValue={0}
            >
              <option value="Select a Category">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <button className="form-btn btn-info" onClick={handleSave}>
                Submit Ticket
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
};
