import React, { Component } from "react";
import { useState } from 'react';
import {
    Route,
    NavLink,
    HashRouter,
    Routes
} from "react-router-dom";

import Home from ".//Home";

function NavText({ letter, navState }) {
    return (
        <span className={`nav-letter ${navState}`}>{letter}</span>
    );
}

function NavItem({ word, navState, onClick }) {
    return (
        <li>
            <NavLink
                className={`nav-item ${word} ${navState}`}
                to={word}
                onClick={() => onClick(word)}
            >
                {word.split("").map((letter, letterIndex) => (
                    <NavText index={letterIndex} letter={letter} navState={navState} />
                ))}
            </NavLink>
        </li>
    );
}


function NavButton({ navState, onClick }) {

    return (
        <button id="nav-toggle" type="button" onClick={onClick} className={navState}>
            <h1 id="closedIcon" className={navState}>j</h1>
            <h1 id="openIcon" className={navState}>:3</h1>
        </button>
    )
}

function NavBar({ navState }) {
    return (
        <nav id="nav-bar" className={navState}>
            <ul>
                <NavItem
                    word="Home"
                    navState={navState}
                />
                <NavItem
                    word="About"
                    navState={navState}
                />
                <NavItem
                    word="Projects"
                    navState={navState}
                />
                <NavItem
                    word="Resume"
                    navState={navState}
                />
                <NavItem
                    word="Contact"
                    navState={navState}
                />
            </ul>
        </nav>
    );
}


export default function Main() {
    const [navState, setNavState] = useState(false);

    function toggleNav() {
        setNavState(navState => !navState);
    }

    let toggleClassCheck = navState ? 'navActive' : 'navInactive';

    return (

        <HashRouter>
            <header>
                <div id="logo">
                    <h2>jam</h2>
                </div>
                <div></div>
                <div id="navstuff">
                    <NavButton navState={toggleClassCheck} onClick={toggleNav} />
                    <div id="secret">
                        <NavBar navState={toggleClassCheck} />

                    </div>
                </div>
            </header>
            <div id="bodyWrapper">
                <Routes>
                    <Route path="/Home" element={<Home />} />
                </Routes>
            </div>
        </HashRouter>
    );
}