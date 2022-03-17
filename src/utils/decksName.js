import { decks } from './decks.js'

let decksName = []

const getDecksName = () =>{
    decks.forEach(deck => {
        decksName.push(deck.deckName)
    });
}

getDecksName()

export { decksName }