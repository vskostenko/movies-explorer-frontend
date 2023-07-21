import React from "react";
import Header from "../Header/Header";
import Promo from './promo/Promo';
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";

function Main () {
    return (
      <>
        <Header />
        <Promo />
        <AboutProject />
        <Techs />
      </>
    );
  };
  
  export default Main;