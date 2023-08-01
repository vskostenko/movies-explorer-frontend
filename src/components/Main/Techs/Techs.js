import React from "react";
import "./Techs.css";

function Techs (){
    return (
        <section className='techs'>
            <div className="techs__container">
                <h2 className="article__title">Технологии</h2>
                <hr className="article__line"></hr>
                <h3 className="techs__header">7 технологий</h3>
                <p className="techs__text" >На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="techs__list">
                    <li className="techs__listitem">HTML</li>
                    <li className="techs__listitem">CSS</li>
                    <li className="techs__listitem">JS</li>
                    <li className="techs__listitem">React</li>
                    <li className="techs__listitem">Git</li>
                    <li className="techs__listitem">Express.js</li>
                    <li className="techs__listitem">mongoDB</li>
                </ul>
            </div>
        </section>
    )
}

export default Techs;