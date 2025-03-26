import { useState } from "react"
import { useParams } from "react-router-dom"

export const ReviewForm=()=>{
    const[ game, setGame]=useState({})
    const[ rating, setRating]=useState(0)
    const[ comment, setComment]=useState({})
    const { gameId } = useParams()

    useEffect(()=>{
            getGame(Number(gameId)).then((data) => {
                setGame(data)})
                
        },[])

    const handleSave=(event)=>{
        event.preventDefault()
        
        const newReview={
            rating: parseInt(rating),
            comment: comment,
            game_id:parseInt(gameId)

        }
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
                        const newRating=event.target.value;
                        setRating(newRating);
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
                        const newComment=event.target.value;
                        setComment(newComment);
                    }}/>
            </div>
        </fieldset>
    </form>
    </>}
}