import React from "react";
import "./AboutProject.css";


function AboutProject() {
    return (
        <section className='aboutproject'>
            <div className="aboutproject__container">
                <h2 className="article__title">О проекте</h2>
                <hr className="article__line"></hr>
                <div className="aboutproject__textblock">
                    <div className="aboutproject__text-container">
                        <p className="aboutproject__subtitle">Дипломный проект включал 5 этапов</p>
                        <p className="aboutproject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className="aboutproject__text-container">
                        <p className="aboutproject__subtitle">На выполнение диплома ушло 5 недель</p>
                        <p className="aboutproject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className="aboutproject__grid">
                    <div className="aboutproject__gridcell">1 неделя</div>
                    <div className="aboutproject__gridcell">4 недели</div>
                    <div className="aboutproject__gridcell">Back-end</div>
                    <div className="aboutproject__gridcell">Front-end</div>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;