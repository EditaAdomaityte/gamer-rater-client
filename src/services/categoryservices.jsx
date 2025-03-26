export const getCategories = async () => {
   
    const response = await fetch("http://localhost:8000/categories",
        {
            headers: {
                Authorization: `Token ${JSON.parse(localStorage.getItem("gamer_token")).token}`
            }
        })
    const categories = await response.json()
    return categories}