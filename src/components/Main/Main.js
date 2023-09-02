import React from "react";
import Header from "../Header/Header";
import Promo from './promo/Promo';
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../Footer/Footer"

function Main (props) {
    return (
      <main>
        <Header 
          loggedIn={props.loggedIn}
          onModalMenuClick = { props.onModalMenuClick }
          onModalMenuClose = { props.onModalMenuClose }
          />
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
        <Footer/>
      </main>
    );
  };
  
  export default Main;
  