import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import "./ErrorPage.css";

function ErrorPage({status,message}) {
  const navigate = useNavigate();
  return (
    <main className='errorpage'>
      <h2 className='errorpage__title'>{status}</h2>
      <p className='errorpage__text'>{message}</p>
      <Link onClick={() => navigate(-1)} className='errorpage__link link link_blue' >
        Назад
      </Link>
    </main>
  );
}

export default ErrorPage;