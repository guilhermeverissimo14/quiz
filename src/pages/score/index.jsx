import React from 'react';

import { useNavigate } from 'react-router-dom';

import LogoQuiz from '../../assets/images/quiz.png'

import './styles.css';

function Score({score}) {
    const navigate = useNavigate();
    function restart(){
        return navigate('/')
    }

    const messages = {
        0: 'Você não sabe de nada de react.🤣',
        1: 'Você sabe muito pouco😁',
        2: 'Você sabe um pouco😅',
        3: 'Você está no caminho🤨',
        4: 'Você está aprendendo bem react😯',
        5: 'Você está contratado para minha empresa😎',
    }


    return (
        <div className="container">
            <h1 className="title">Pontuação</h1>
            <img className="logo" src={LogoQuiz} alt="logo quiz" />
            <small className="description">{score ? messages[score]: messages[5]}</small>

            <div className='score-container'>
                <big className='score'>{score ? score : 5}</big>
                <small className='total'>/5</small>
            </div>

            <button onClick={restart} className="button-restart">🚀 reiniciar</button>
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

export default Score;