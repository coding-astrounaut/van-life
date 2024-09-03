import React from "react"
import { Link } from "react-router-dom"
import './VansListing.css'
export default function VansListing({props}) {
    return (
        <>
            <h1>{props.name}</h1>
            <p>{props.price}</p>
            <p>{props.description}</p>
            <p>{props.imageUrl}</p>
            <p>{props.type}</p>
        </>
    )
}