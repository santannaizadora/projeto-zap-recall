import turn from '../../assets/img/setinha.png'
import { useState } from 'react';
import { icons } from '../../utils/icons'
import './card.css'


const Card = (props) => {
    const [cardSelected, setCardSelected] = useState(false);
    const [turnedCard, setTurnedCard] = useState(false);
    const [isAnsweredCard, setIsAnsweredCard] = useState(false);
    const [questionIcon, setQuestionIcon] = useState(icons[0])
    const [cssColor, setCssColor] = useState(false);

    const { question, answer, numQuestion, setAnsweredQuestions, answeredQuestions, setFooterIcons, footerIcons, zaps, setZaps } = props

    const cssMaxCard = `card ${cardSelected ? "" : "hide"}`;
    const cssMinCard = `question ${(cardSelected || turnedCard) ? "hide" : ""}`;
    const cssTurnCard = `${(turnedCard) ? "rotate" : ""}`

    const handleClick = (index) => {
        setAnsweredQuestions(answeredQuestions + 1);
        setIsAnsweredCard(true)
        setQuestionIcon(icons[index])
        let color = ''
        if (index === 1) {
            color = 'red-text'
        } else if (index === 2) {
            color = 'yellow-text'
        } else {
            color = 'green-text'
            setZaps(zaps+1)
        }
        setCssColor(color)
        setFooterIcons([...footerIcons, {name: icons[index], color: color}])
    }

    return (
        <div className='flashcard'>
            {
                isAnsweredCard
                    ?
                    <>
                        <div className={`question ${cssColor}`}>
                            <h1 className='answered'>Pergunta {numQuestion}</h1>
                            <ion-icon name={questionIcon}></ion-icon>
                        </div>
                    </>
                    :
                    <>
                        <div className={cssMinCard} onClick={() => {
                            !isAnsweredCard ? setCardSelected(true) : setCardSelected(false)
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
                                        onClick={() => handleClick(1)}
                                    >Não lembrei</button>
                                    <button className='yellow'
                                        onClick={() => handleClick(2)}
                                    >Quase lembrei</button>
                                    <button className='green'
                                        onClick={() => handleClick(3)}
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
                    </>
            }
        </div>
    )

}

export default Card;