import React from "react";
import './Footer.css';

function Footer (){
    return (
        <footer className="footer">
            <div className="footer__caption">Учебный проект Яндекс.Практикум х BeatFilm.</div>
            <div className="footer__links-container">
                <p className='footer__copyright'>&copy;                                                     2023</p>
                <nav className="footer__navlist">
                    <li className="footer__navlist-item">
                    <a
                        className='link'
                        href='https://practicum.yandex.ru/'
                        target='_blank'
                        rel='noreferrer'
                    >
                    Яндекс.Практикум
                    </a>
                    </li>
                    <li className="footer__navlist-item">
                    <a
                        className='link'
                        href='https://github.com/vskostenko'
                         target='_blank'
                        rel='noreferrer'
                    >
                    Github
                    </a>
                    </li>
                </nav>
            </div>

        </footer>
    )
}

export default Footer;