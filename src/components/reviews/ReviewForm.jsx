import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getGame } from "../../services/gameservices"
import { createReview } from "../../services/reviewservices"

export const ReviewForm=()=>{
    const[ game, setGame]=useState({})
    const[review,setReview]=useState({
        rating:0,
        comment:""
    })
    const { gameId } = useParams()
    const navigate = useNavigate();

    useEffect(()=>{
            getGame(Number(gameId)).then((data) => {
                setGame(data)})
                
        },[])

    const handleSave=(event)=>{
        event.preventDefault()
        
        const newReview={
            rating: parseInt(review.rating),
            comment: review.comment,
            game:parseInt(gameId)

        }
        createReview(newReview).then(() => {
              navigate(`/allgames/${game.id}`);
              console.log(newReview)
            });
    }
    

    if (game){
        return <>
    <h2>{game.title} Review</h2>
    <form>
        <fieldset>
            <div>
                <label>Rating: </label>
                <input
                    type=""
                    className="form-control"
                    placeholder="Game Rating 1-10"
                    required onChange={(event)=>{
                        const copy={...review}
                    copy.rating =event.target.value
                    setReview(copy)
                    }}/>
            </div>
        </fieldset>
        <fieldset>
            <div>
                <label>Comment: </label>
                <input
                    type=""
                    className="form-control"
                    placeholder="Game Comment"
                    required onChange={(event)=>{
                        const copy={...review}
                        copy.comment =event.target.value
                    setReview(copy)
                    }}/>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
              <button className="form-btn btn-info" onClick={handleSave}>
                Submit Review
              </button>
            </div>
          </fieldset>
    </form>
    </>}
}