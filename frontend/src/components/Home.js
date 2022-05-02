import React, { useEffect, useState } from 'react'
import Welcome from './Welcome'
import Meals from './Meals'
import ErrorModal from './ErrorModal'

function Home(props) {
    const [item, setItem] = useState("");

    return (
        <>
            <Welcome setItem={value => setItem(value)} isLoggedin={props.isLoggedin} />
            <h1 style={{ textAlign: "center", margin: "50px 0" }}>All Categories</h1>
            <Meals searchName={item} isLoggedin={props.isLoggedin} />
            <ErrorModal />
        </>

    )
}

export default Home