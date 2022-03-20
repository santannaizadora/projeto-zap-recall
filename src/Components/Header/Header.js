import logo from '../../assets/img/logo-pequeno.png'
import './header.css'

export default function Header(){
    return (
        <header>
            <img src={logo}/>
            <p className='logo'>ZapRecall</p>
        </header>
    )
}