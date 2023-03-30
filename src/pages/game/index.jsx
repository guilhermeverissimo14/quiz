import React, { useEffect, useState } from 'react';

import { questions, shuffle } from '../../database/questions'

import LogoQuiz from '../../assets/images/quiz.png'

import './styles.css';
import { useNavigate } from 'react-router-dom';

function Game() {

    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questionSelected, setQuestionSelected] = useState([]);
    const [userAnsweres, setUserAnsweres] = useState([]);
    const [finish, setFinish] = useState(false);

    useEffect(() => {
        if (questionSelected.length > 0)
            return;

        const embaralhadas = shuffle(questions)
        const selectedQuestions = embaralhadas.slice(0, 5);
        setQuestionSelected(selectedQuestions)
        console.log(selectedQuestions)

    }, [questionSelected])

    // função chamada quando o usuario responde uma questão

    function handleAnsewer(selectedOptionIndex) {
        const currentQuestionDAta = questionSelected[currentQuestion];
        const userAnswer = currentQuestionDAta.answers[Number(selectedOptionIndex)];
        setUserAnsweres([...userAnsweres, userAnswer])

        if (currentQuestion < 4) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setFinish(true);
        }
    }

    const currentQuestionDAta = questionSelected[currentQuestion];
    return (
        <div className="container">
            <img src={LogoQuiz} alt="logo quiz" className="logo" />

            <div className="card">
                <div className="card-question">
                    <h2 className="card-title">Pergunta {currentQuestion +1} de 5</h2>
                    <p className="question"> {currentQuestionDAta?.question}</p>
                </div>

                <div className="card-answer">
                    <div className="card-options">
                        {currentQuestionDAta?.answers.map((option, index) => (
                             <button onClick={()=>handleAnsewer(index)} key={index} className="card-option"> {option.text}</button>
                        ))}
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game;