import logo from '../images/logo.png';
import hamburger from '../images/hamburger.png';
import './header.css'

const header = () => {
    return (
        <header>
            <nav>
                <img id='logo' src={ logo } alt="logo" />
                <img id='hamburger' src={ hamburger } alt="hamburger" />
            </nav>
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library and become a super Ninja developer.</p>
            <button>Awesome!</button>
        </header>
    )
}

export default header;