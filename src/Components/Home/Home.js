import './home.css'
import { useState } from 'react';
import { decks } from '../../utils/decks.js'
import logo from '../../assets/img/logo.png'
import Flashcards from '../Flashcards/Flashcards'

const Home = () => {

    const [startRecall, setStartRecall] = useState(true);
    const [deckSelected, setDeckSelected] = useState('1');
    const [zapsGoal, setZapsGoal] = useState(1);
    //const [startRecall, setStartRecall] = useState(false);
    //const [deckSelected, setDeckSelected] = useState(undefined);
    //const [zapsGoal, setZapsGoal] = useState();

    const Start = () => {
        let decksName = [ { value: '', label: 'Escolha seu deck' } ];
        decks.forEach(deck => {
            decksName.push( { value: deck.id, label: deck.deckName } )
        });

        let enableButton = (deckSelected && zapsGoal <= decks.find( item => item.id === deckSelected).cards.length && zapsGoal > 0) ? true : false
        return (
            <div className="home">
                <img className='logo-img' src={logo} alt='logo zap recall' />

                <p className='logo'>ZapRecall</p>
                <select value={deckSelected} className='select' onChange={event => setDeckSelected(event.target.value)}>
                    {decksName.map((item, index) => <option key={index} value={item.value}> {item.label} </option>)}
                </select>
                { deckSelected ? deckSelected.deckName : '' }
                <input
                    value={zapsGoal}
                    disabled={!deckSelected}
                    className='input'
                    type="number"
                    placeholder='Defina sua meta de zaps'
                    onChange={event => setZapsGoal(parseInt(event.target.value))}
                />


                {enableButton
                    ?
                    <button id='start' className='button-able' onClick={() => {
                        setStartRecall(true)
                    }}
                    >Iniciar Recall!</button>
                    :
                    <button className='button-disabled' disabled>Iniciar Recall!</button>
                }

            </div>
        )
    }

    const shuffle = () => {
        return Math.random() - 0.5;
    }
    let deckCards = decks.find(deck => deck.id === deckSelected).cards
    let deck = deckCards.sort(shuffle)

    return (
        startRecall ? <Flashcards setStartRecall={setStartRecall}
        deck={deck}
        goal={zapsGoal} /> : <Start />
    )
}

export default Home;