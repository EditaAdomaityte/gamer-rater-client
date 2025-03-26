import { useEffect, useState } from "react"
import { getGame } from "../../services/gameservices"
import { useNavigate, useParams } from "react-router-dom"

export const GameDetails=()=>{
    const[game, setGame]=useState({})
    const { gameId } = useParams()
    const navigate=useNavigate()
    
    useEffect(()=>{
        getGame(Number(gameId)).then((data) => {
            setGame(data)})
            
    },[])

console.log(game)

    if (game&& game.categories){
        return <>
        <h2> {game.title} Details</h2>
        <div>Designer: {game.designer}</div>
        <div>Year Released: {game.year_released}</div>
        <div>Numbers of Players: {game.number_of_players}</div>
        <div>Estimated Time to Play: {game.play_time}</div>
        <div>Age Recommendations: {game.recommended_game}</div>
        <div>Categories: {game.categories.map((category)=>(
            <div key={category.id}>{category.name}</div>
        ))}</div>
        <div>
            <button onClick={()=>{navigate(`/allgames/${game.id}/review`)}}>Review Game</button>
        </div>
        </>}
    
}