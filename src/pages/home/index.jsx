import React from 'react';

import { useNavigate } from 'react-router-dom';

import LogoQuiz from '../../assets/images/quiz.png'

import './styles.css';

function Home() {
    const navigate = useNavigate();
    function start(){
        return navigate('/game')
    }


    return (
        <div className="container">
            <h1 className="title">Bem-vindo ao</h1>
            <img className="logo" src={LogoQuiz} alt="logo quiz" />
            <small className="description">Gostei muito de </small>
            <button onClick={start} className="button-start">🚀 começar</button>
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