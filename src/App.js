import React from 'react';
import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator'
import './css/app.css'

export default function App() {
    return (
        <div>
            <Header />
            <MemeGenerator />
        </div>
    )
}