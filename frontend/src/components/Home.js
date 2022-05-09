import React, { useEffect, useState } from 'react'
import Welcome from './Welcome'
import Meals from './Meals'
import ErrorModal from './ErrorModal'
import LogoutModal from './LogoutModal';
import FavouritesModal from './FavouritesModal';

function Home(props) {
    const [item, setItem] = useState("");

    return (
        <>
            <Welcome setItem={value => setItem(value)} isLoggedIn={props.isLoggedIn} />
            <h1 style={{ textAlign: "center", margin: "50px 0" }}>All Categories</h1>
            <Meals searchName={item} isLoggedIn={props.isLoggedIn} />
            <ErrorModal />
            <LogoutModal />
            <FavouritesModal />
        </>

    )
}

export default Home