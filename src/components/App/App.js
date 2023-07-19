import React from "react";
import "./App.css";
import Main from "../Main/Main";
import { Router } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="page">
                <Main></Main>
            </div>
        </BrowserRouter>
    )
}
export default App;