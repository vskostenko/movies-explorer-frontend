import React from "react";
import './AboutMe.css';
import StudentPhoto from '../../../images/student.jpeg';

function AboutMe () {
    return (
        <section className='aboutme'>
            <div className="aboutme__header">
                <h2 className="article__title">Студент</h2>
                <hr className="article__line"></hr>
            </div>
            <div className="aboutme_container">
                <div className="aboutme__textblock">
                    <h2 className="aboutme__name">Кермит</h2>
                    <h3 className="aboutme__prof">Фронтенд-разработчик, 30 лет</h3>
                    <p className="aboutme__bio">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a className='aboutme__git link' href='https://github.com/vskostenko' target='_blank' rel='noreferrer'>Github</a>
                </div>
                <img className='aboutme__photo'src={StudentPhoto} alt='Фото студента'/>
            </div>
            <div>

            </div>
        </section>
    )
}

export default AboutMe;