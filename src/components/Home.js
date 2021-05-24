import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/book.png';
import '../styles/home.scss';

const Home = () => {
    return(
        <section className="wrapper">
            <header className="menu">
                <Link to="/login" className="menu-item">Log In</Link>
                <Link to="/signup" className="menu-item">Sign Up</Link>
            </header>
            <main className="main-logo">
                <section className="bookbox-logo">
                    <img alt="BookBox" src={Logo} />
                </section>
                <section className="bookbox-info">
                    <h1>BookBox</h1>
                    <p>A must for bookworms!</p>
                    <Link className="enter-btn" to="/signup">Join us now!</Link>
                </section>
            </main>
            <footer>All rights reserved for <Link className="footer-link" to="/">BookBox</Link>, 2021</footer>
        </section>
    )
}

export default Home;