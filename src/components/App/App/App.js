import React from "react";
import "./App.css";
import Main from "../../Main/Main";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import Profile from "../../Profile/Profile";
import Movies from "../../Movies/Movies";

function App() {
    return (
        <BrowserRouter>
            <div className="page">
                <Routes>
                    <Route path="/signin" element={<Login />} />
                    <Route path="/signup" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route index element={<Main />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
export default App;