export const getReviews = async () => {
   
    const response = await fetch("http://localhost:8000/reviews",
        {
            headers: {
                Authorization: `Token ${JSON.parse(localStorage.getItem("gamer_token")).token}`
            }
        })
    const Reviews = await response.json()
    return Reviews}

    export const createReview =async(newReview)=>{
        const response=await fetch("http://localhost:8000/reviews",{
            method: "POST",
            headers:{
                Authorization: `Token ${JSON.parse(localStorage.getItem("gamer_token")).token}`,
                "Content-Type":"application/json",
            },
            body: JSON.stringify(newReview)
        })
        return response.json()
    }