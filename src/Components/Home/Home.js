import { decksName } from '../../utils/decksName.js'
import './home.css'
import logo from '../../assets/img/logo.png'


const Home = () => {
    return (
        <div className="home">
            <img className='logo-img' src={logo} alt='logo zap recall' />
            <p className='logo'>ZapRecall</p>
            <select className='select'>
            <option value="">Escolha seu deck</option>
                {decksName.map((deck, index) => <option key={index} value={deck}> {deck} </option>)}
            </select>
            <input className='input' placeholder='Defina sua meta de zaps'></input>
            <button className='button-disabled'>Iniciar Recall!</button>
            
        </div>
    )
}

export default Home;