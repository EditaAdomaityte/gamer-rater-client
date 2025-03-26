import { useEffect, useState } from "react"
import { getGames } from "../../services/gameservices"
import { Link, useNavigate } from "react-router-dom"

export const GameList=()=>{
    const [allGames, setAllGames]=useState([])
 const navigate= useNavigate()
    useEffect(()=>{
        getGames().then((gameArray)=>{
            setAllGames(gameArray)
        })
    },[])
    console.log(allGames)



    return <div >

    <div> <h1>Game List</h1></div>
    <div>
        <button onClick={()=>{navigate(`/create`)}}>Create New Game Entry</button>
    </div>
     <div>
     {allGames.map((game)=>{
         return(
            <div key={game.id}><Link to={`/allgames/${game.id}`} key={game.id} >{game.title}</Link> </div>
         )
     })}
     </div>
 </div>
}