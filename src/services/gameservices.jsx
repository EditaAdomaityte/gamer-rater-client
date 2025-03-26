export const getGames = async () => {
   
    const response = await fetch("http://localhost:8000/games?owner=current",
        {
            headers: {
                Authorization: `Token ${JSON.parse(localStorage.getItem("gamer_token")).token}`
            }
        })
    const games = await response.json()
    return games}

export const getGame = async (gameId) => {
   
        const response = await fetch(`http://localhost:8000/games/${gameId}`,
            {
                headers: {
                    Authorization: `Token ${JSON.parse(localStorage.getItem("gamer_token")).token}`
                }
            })
        const game = await response.json()
        return game}
    
export const createGame =async(newGame)=>{
    const response=await fetch("http://localhost:8000/games",{
        method: "POST",
        headers:{
            Authorization: `Token ${JSON.parse(localStorage.getItem("gamer_token")).token}`,
            "Content-Type":"application/json",
        },
        body: JSON.stringify(newGame)
    })
    return response.json()
}
