import React, { Component } from "react";
import { useState } from 'react';
import {
    Route,
    NavLink,
    HashRouter,
    Routes, 
    Navigate
} from "react-router-dom";

import Home from ".//Home";
import About from ".//About";

function NavText({ letter, navState }) {
    return (
        <span className={`nav-letter ${navState}`}>{letter}</span>
    );
}

function NavItem({ word, navState, onClick }) {
    return (
        <li className="nav-li">
            <NavLink
                className={`nav-item ${word} ${navState}`}
                to={word.toLowerCase()}
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
            {/* <h1 i>j</h1> */}
            <svg id="closedIcon" className={navState} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="6" x2="20" y2="6" />
  <line x1="4" y1="12" x2="20" y2="12" />
  <line x1="4" y1="18" x2="20" y2="18" />
</svg>
            <h1 id="openIcon" className={navState}>:3</h1>
        </button>
    );
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
                    <div id="counter">

                    </div>
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
                    <Route path="/" element={<Navigate replace to="/home" />} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                </Routes>
            </div>
        </HashRouter>
    );
}