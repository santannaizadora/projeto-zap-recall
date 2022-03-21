import './flashcards.css'
import { useState } from 'react';
import Card from '../Card/Card';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Flashcards(props) {
    const { setStartRecall, deck, goal } = props;
    let numQuestions = deck.length
    const [answeredQuestions, setAnsweredQuestions] = useState(0);
    const [footerIcons, setFooterIcons] = useState([]);
    const [zaps, setZaps] = useState(0);
    
    return (
        <>
            <Header />
            <div className='flashcards'>
                {deck.map((card, index) => {
                    const { question, answer } = card;
                    return <Card
                        key={index}
                        question={question}
                        answer={answer}
                        numQuestion={index + 1}
                        setAnsweredQuestions={setAnsweredQuestions}
                        answeredQuestions={answeredQuestions}
                        setFooterIcons={setFooterIcons}
                        footerIcons={footerIcons}
                        zaps={zaps}
                        setZaps={setZaps}
                    />
                })}
            </div>
            <Footer answered={answeredQuestions}
                numQuestions={numQuestions}
                footerIcons={footerIcons}
                setStartRecall={setStartRecall}
                zaps={zaps}
                goal={goal} />
        </>
    )
}