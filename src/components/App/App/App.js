import React from "react";
import "./App.css";
import Main from "../../Main/Main";
import { BrowserRouter } from "react-router-dom";
import Footer from "../../Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="page">
                <Main />
                <Footer />
            </div>
        </BrowserRouter>
    )
}
export default App;