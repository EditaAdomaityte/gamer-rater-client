import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { Login } from "../pages/Login.jsx"
import Home from "../pages/Home"
import { Register } from '../pages/Register.jsx'
import { GameList } from './games/GameList.jsx'
import { GameDetails } from './games/GameDateails.jsx'
import { GameForm } from './games/GameForm.jsx'
import { ReviewForm } from './reviews/ReviewForm.jsx'


export const ApplicationViews = () => {
    // const [rocksState, setRocksState] = useState([{
    //     id: 1,
    //     name: "Sample",
    //     weight:0,
    //     type: {
    //         id: 1,
    //         label: "Volcanic"
    //     },
    //     user:{
    //         id:1,
    //         first_name: "ea",
    //         last_name:"ea"
    //     }
    // }])

    // const fetchRocksFromAPI = async (showAll) => {
    //     let url="http://localhost:8000/rocks"

    //     if (showAll !==true){url="http://localhost:8000/rocks?owner=current"}
    //     const response = await fetch(url,
    //         {
    //             headers: {
    //                 Authorization: `Token ${JSON.parse(localStorage.getItem("rock_token")).token}`
    //             }
    //         })
    //     const rocks = await response.json()
    //     setRocksState(rocks)
    // }

    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route index element={<Home />} />
                <Route path="allgames">
                    <Route index element={<GameList />} />
                    <Route path=":gameId" element={<GameDetails />} />
                    <Route path=":gameId/review" element={<ReviewForm />}/>

                </Route>
                <Route path="create" element={<GameForm/>}  />
                <Route path="pictures" />
                <Route path="reviews"/>
            </Route>
        </Routes>
    </BrowserRouter>
}