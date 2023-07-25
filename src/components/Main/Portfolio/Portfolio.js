import React from "react";
import './Portfolio.css';
import arrowImg from '../../../images/arrow.svg';

function Portfolio () {
    return (
        <section className='portfolio'>
            <h4 className="portfolio__title">Портфолио</h4>
            <div className="portfolio__list">
                    <a className='portfolio__listitem link' 
                        href='https://github.com/vskostenko/how-to-learn'
                        target='_blank'
                        rel="noreferrer">
                        <p className='portfolio__listitem-text'>Статичный сайт</p>
                        <img src={arrowImg} alt="arrow" />
                    </a>
                    <a className='portfolio__listitem link' 
                        href='https://github.com/vskostenko/how-to-learn'
                        target='_blank'
                        rel="noreferrer">
                        <p className='portfolio__listitem-text'>Адаптивный сайт</p>
                        <img src={arrowImg} alt="arrow" />
                     </a>
                    <a className='portfolio__listitem link' 
                        href='https://github.com/vskostenko/how-to-learn'
                        target='_blank'
                        rel="noreferrer">
                        <p className='portfolio__listitem-text'>Одностраничное приложение</p>
                        <img className="portfolio__listitem-icon" src={arrowImg} alt="arrow" />
                    </a>
            </div>
        </section>
    )
}

export default Portfolio;