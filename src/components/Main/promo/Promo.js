import React from "react";
import promoImg from '../../../images/promo.svg'
import "./Promo.css";


function Promo() {
    return (
        <section className='promo'>
            <div className="promo__container">
                <h1 className='promo__title'>
                    Учебный проект студента факультета Веб-разработки.
                </h1>
                <img className='promo__img' src={promoImg} alt='Веб земной шар'/>
            </div>
        </section>
    )
}

export default Promo;