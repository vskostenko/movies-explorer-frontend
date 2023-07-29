import React from 'react';
import "./ErrorPage.css";

function ErrorPage() {
  return (
    <main className='errorpage'>
      <h2 className='errorpage__title'>404</h2>
      <p className='errorpage__text'>Страница не найдена</p>
      <p className='errorpage__link link link_blue' >
        Назад
      </p>
    </main>
  );
}

export default ErrorPage;