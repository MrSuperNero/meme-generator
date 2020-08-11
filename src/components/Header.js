import React from 'react';
import logo from '../assets/favicon-192.png';
import '../css/header.css'


export default function Header(props) {
    return (
        <header>
            <h1>Random Meme Generator</h1>

            <a href="//www.github.com/MrSuperNero">
                    <img src={logo} alt="logo" />
                </a>
        </header>
    );
}