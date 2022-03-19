import React from 'react'
import { Link } from "react-router-dom";

const Default = ({children}) => {
    return ( <>
        <nav>
            <div className='container'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shoppinglist">Liste des courses</Link></li>
                    <li><Link to="/todolist">Liste des tâches</Link></li>
                    <li><Link to="/weightlist">Liste des poids</Link></li>
                </ul>
            </div>
        </nav>
        <div className='container mt-50'>
            {children}
        </div>
    </>)
}

export default Default