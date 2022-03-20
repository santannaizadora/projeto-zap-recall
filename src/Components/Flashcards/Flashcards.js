import './flashcards.css'
import { decks } from '../../utils/decks.js'
import { useState } from 'react';
import turn from '../../assets/img/setinha.png'
import Card from '../Card/Card';
import Header from '../Header/Header';

export default function Flashcards(props) {
    const { setStartRecall, deckSelected, goal } = props;
    let deckCards = decks.find(deck => deck.id === deckSelected).cards

    const shuffle = () => {
        return Math.random() - 0.5;
    }

    let shuffledCards = deckCards.sort(shuffle)

    return (
        <>
        <Header/>
        <div className='flashcards'>
            {shuffledCards.map((card, index) => {
                const { question, answer } = card;
                return <Card key={index} question={question} answer={answer} numQuestion={index + 1} />
            })}
        </div>
        </>
    )
}