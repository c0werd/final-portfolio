import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter,
    Routes
} from "react-router-dom";

class Main extends Component {
    render() {
        return (
            <header data-nav="false">
        <div id="logo">
            <h2>jam</h2>
        </div>
        <div></div>
        <div id="navstuff">
            <button id="nav-toggle" type="button" onClick={toggleNav}>
                <h1 id="closedIcon">j</h1>
                <h1 id="openIcon">:3</h1>

            </button>
            <div id="secret">
                <HashRouter>
                <nav id="nav-bar">
                    <ul>
                        <li>
                            <NavLink className="nav-item" to="">
                                <span className="nav-letter">A</span>
                                <span className="nav-letter">b</span>
                                <span className="nav-letter">o</span>
                                <span className="nav-letter">u</span>
                                <span className="nav-letter">t</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-item" to="">
                                <span className="nav-letter">P</span>
                                <span className="nav-letter">r</span>
                                <span className="nav-letter">o</span>
                                <span className="nav-letter">j</span>
                                <span className="nav-letter">e</span>
                                <span className="nav-letter">c</span>
                                <span className="nav-letter">t</span>
                                <span className="nav-letter">s</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-item" to="">
                                <span className="nav-letter">R</span>
                                <span className="nav-letter">e</span>
                                <span className="nav-letter">s</span>
                                <span className="nav-letter">u</span>
                                <span className="nav-letter">m</span>
                                <span className="nav-letter">e</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-item" to="">
                                <span className="nav-letter">C</span>
                                <span className="nav-letter">o</span>
                                <span className="nav-letter">n</span>
                                <span className="nav-letter">t</span>
                                <span className="nav-letter">a</span>
                                <span className="nav-letter">c</span>
                                <span className="nav-letter">t</span>
                            </NavLink>
                        </li>

                    </ul>
                </nav>
                </HashRouter>
            </div>
        </div>
    </header>
        );
    }
}


const toggleNav = () => {
    document.header.dataset.nav = document.header.dataset.nav === "true" ? "false" : "true";
    const face = document.getElementById('openIcon');
    if (document.header.dataset.nav === "true") {
        face.className = 'activate';
    }
    else {
        face.className = 'deactivate';
    }
}


export default Main;