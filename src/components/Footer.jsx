import React from "react"
import './Footer.css'



export default function Footer() {

    const year = new Date().getFullYear()

    return (
        <footer>
            <h3>Ⓒ {year} #VANLIFE</h3>
        </footer>
    )
}