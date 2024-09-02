import React from "react"
import { Link } from "react-router-dom"
import './Nav.css'
export default function Nav() {
    return (
        <nav>
            <div className="nav--logo">
                <h1 className="nav--title"><Link to='/'>#VANLIFE</Link></h1>
            </div>
            
            <div className="nav--links">
                <Link to='/about'>About</Link>
                <Link to='/vans'>Vans</Link>
            </div>
        </nav>
    )
}