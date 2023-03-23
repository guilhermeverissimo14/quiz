import React, {useEffect, useState} from 'react';

import {questions, shuffle} from '../../database/questions'

import LogoQuiz from '../../assets/images/quiz.png'

import './styles.css';
import { useNavigate } from 'react-router-dom';

function Game () {

    const navigate = useNavigate();
    const[currentQuestion, setCurrentQuestion] = useState(0);
    const[questionSelected, setQuestionSelected] = useState([]);
    const[userAnsweres, setUserAnsweres] = useState([]);

    useEffect(()=>{
       if(questionSelected.length > 0)
       return;

       const embaralhadas = shuffle(questions)
       const selectedQuestions = embaralhadas.slice(0,5);

       setQuestionSelected(selectedQuestions)
       console.log(selectedQuestions)

    },[questionSelected])

    return (
        <div className="container">
          <img src={LogoQuiz} alt="logo quiz"  className="logo"/>

          <div className="card">
             <div className="card-question">
                 <h2 className="card-title">Pergunta 1 de 5</h2>
                 <p className="question"> Qual a melhor linguagem de programação?</p>
             </div>

             <div className="card-answer">
                <div className="card-options">
                    <button className="card-option"> C++</button>
                </div>

                <div className="card-options">
                    <button className="card-option"> Java</button>
                </div>

                <div className="card-options">
                    <button className="card-option"> javascript</button>
                </div>

                <div className="card-options">
                    <button className="card-option"> Python</button>
                </div>

                <div className="card-options">
                    <button className="card-option"> C#</button>
                </div>

             </div>
          </div>
        </div>
    )
}

export default Game;