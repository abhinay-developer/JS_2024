import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='header'>
            <div>
                <h1>React Api Calls</h1>
            </div>
            <div>
                <ul>
                    <li><Link to='users'>Users</Link></li>
                </ul>
            </div>
        </header>
    )
}
