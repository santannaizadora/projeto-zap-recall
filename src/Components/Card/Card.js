import turn from '../../assets/img/setinha.png'
import { useState } from 'react';
import {icons} from '../../utils/icons'
import './card.css'


const Card = (props) => {
    const [cardSelected, setCardSelected] = useState(false);
    const [turnedCard, setTurnedCard] = useState(false);
    const [isAnsweredCard, setIsAnsweredCard] = useState(false);
    const { question, answer, numQuestion, setAnsweredQuestions, answeredQuestions, setFooterIcons ,footerIcons } = props

    const cssMaxCard = `card ${cardSelected ? "" : "hide"}`;
    const cssMinCard = `question ${(cardSelected || turnedCard) ? "hide" : ""}`;
    const cssTurnCard = `${(turnedCard) ? "rotate" : ""}`
    let newIcon = ''

    const questionIcon = `${(isAnsweredCard) ? newIcon : icons[0]}`
    return (
        <div className='flashcard'>
            <div className={cssMinCard} onClick={() => {
                !isAnsweredCard ? setCardSelected(true):setCardSelected(false)
            }}>
                <h1>Pergunta {numQuestion}</h1>
                <ion-icon name={questionIcon}></ion-icon>
            </div>
            <div className={cssMaxCard + cssTurnCard}>
                <div className=" front-face face">

                    <p className='card-text'>{answer}</p>
                    <div className='buttons'>
                        <button
                            className='red'
                            onClick={() => {
                                setAnsweredQuestions(answeredQuestions + 1);
                                newIcon = icons[1]
                                setFooterIcons([...footerIcons, icons[1]])
                                setIsAnsweredCard(true)
                            }}
                        >Não lembrei</button>
                        <button className='yellow'
                            onClick={() => {
                                setAnsweredQuestions(answeredQuestions + 1);
                                newIcon = icons[2]
                                setFooterIcons([...footerIcons, icons[2]])
                            }}
                        >Quase lembrei</button>
                        <button className='green'
                            onClick={() => {
                                setAnsweredQuestions(answeredQuestions + 1);
                                newIcon = icons[3]
                                setFooterIcons([...footerIcons, icons[3]])
                            }}
                        >Zap!</button>
                    </div>

                </div>
                <div className='back-face face'>
                    <p className='card-text'>{question}</p>
                    <img
                        className='arrow'
                        src={turn} alt='virar card'
                        onClick={() => setTurnedCard(true)}
                    />
                </div>
            </div>
        </div>
    )

}

export default Card;