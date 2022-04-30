import React, { useState } from 'react'
import Header from './Header'
import Welcome from './Welcome'
import Meals from './Meals'

function Home() {
    const [item, setItem] = useState("");
    return (
        <>
            <Welcome setItem={value => setItem(value)} />
            <h1 style={{ textAlign: "center", margin: "50px 0" }}>All Categories</h1>
            <Meals searchName={item} />
        </>

    )
}

export default Home