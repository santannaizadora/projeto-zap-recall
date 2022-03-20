import { useState } from 'react';
import { decks } from '../../utils/decks.js'
import './home.css'
import logo from '../../assets/img/logo.png'

const Home = () => {
    const [startRecall, setStartRecall] = useState(false);
    const [deckSelected, setDeckSelected] = useState(undefined);
    const [zapsGoal, setZapsGoal] = useState();

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
                    <button className='button-able' onClick={() => {
                        setStartRecall(true)
                        console.log(deckSelected, zapsGoal)
                    }}
                    >Iniciar Recall!</button>
                    :
                    <button className='button-disabled' disabled>Iniciar Recall!</button>
                }

            </div>
        )
    }

    return (
        startRecall ? <Start /> : <Start />
    )
}

export default Home;