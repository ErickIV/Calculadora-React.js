import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <header className="container">
            <div className="header">
                <h1>Minha Calculadora</h1>
                <nav className="nav">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/calculator">Calculadora</Link>
                    <Link className="link" to="/quote">Citação</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
