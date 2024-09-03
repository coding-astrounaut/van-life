import React from "react"

import VansListing from "../components/vansListing"

export default function Vans() {

    const [vans, setVans] = React.useState([])

    React.useEffect(function() {
        console.log("Effect ran")
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data))
    }, [])


    const listingsComp = vans.map((van) => <VansListing key={van.id} props={van}/>)

    return (
        <h1>Vans</h1>
    )
}
