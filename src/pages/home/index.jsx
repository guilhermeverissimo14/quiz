import React from 'react';

import LogoQuiz from '../../assets/images/quiz.png'

import './styles.css';

function Home() {
    return (
        <div className="container">
            <h1 className="title">Bem-vindo ao</h1>
            <img className="logo" src={LogoQuiz} alt="logo quiz" />
            <small className="description">Gostei muito de </small>
            <button className="button-start">🚀 começar</button>
            <footer className="footer">
                <span className="author">Criado por 
                    <a href="https://github.com/guilhermeverissimo14" 
                    rel="noreferrer"
                    target={"_blank"}
                    className="author">  Guilherme Verissimo 😎</a>
                </span>
            </footer>
        </div>
    )
}

export default Home;