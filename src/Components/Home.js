import { decksName } from '../utils/decksName.js'


const Home = () => {
    return (
        <div className="home">
            <img className='logo-img' src="./assets/img/logo.png" alt='logo zap recall' />
            <p className='logo'>ZapRecall</p>
            <select className='select'>
            <option value="">Escolha seu deck</option>
                {decksName.map((deck, index) => <option key={index} value={deck}> {deck} </option>)}
            </select>
            <button className='button-disabled'>Iniciar Recall!</button>
        </div>
    )
}

export default Home;