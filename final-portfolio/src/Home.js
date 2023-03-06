import { useState, useEffect } from 'react';
import {
    NavLink
} from "react-router-dom";

function LetterSpan({ text, id }) {
    const letters = text.split('');
    return (
        <h1 class="word" id={id}>
            {text}
        </h1>
    );
}


export default function Home() {

    const [zState, setZState] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setZState(prevZState => !prevZState);
        }, 1500);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div id="home">
            <div id="homeWrapper">
                <div className="line">
                    <LetterSpan text="hi, I'm" id="homeWord" />
                </div>
                <div class="line">
                    <NavLink to="/about" id="homeTitle" className="word fancy">
                        <span className="highlight" id="jLetter">J</span>
                        <span className="highlight">a</span>
                        <span className="highlight">m</span>
                        <span className="highlight">e</span>
                        <span className="highlight">s</span>
                        <span className="noHighlight"> </span>
                        <span className="highlight">S</span>
                        <span className="noHighlight">a</span>
                        <span className="noHighlight">n</span>
                        <span className="noHighlight">-</span>
                        <span className="highlight">y</span>
                        <span className="noHighlight">i</span>
                        <span className="noHighlight"> </span>
                        <span className="highlight">C</span>
                        <span className="noHighlight">o</span>
                        <span className="noHighlight">w</span>
                        <span className="noHighlight">a</span>
                        <span className="noHighlight">r</span>
                        <span className="noHighlight">d</span>
                        <span className="noHighlight">.</span>
                    </NavLink>
                </div>
                <div className="line">
                    <LetterSpan text="I'm a 1st year Computer Science student at King's College London, and an aspiring software engineer." id="description"/>
                </div>
                <div className="line" id="spacer"></div>
                <div className="asciiLine">
                    <div className="zees ascii">
                        <h1 className={`asciiWord ${zState ? 'zActive' : 'zInactive'}`} id="Z1">Z</h1>
                        <h1 className={`asciiWord ${zState ? 'zActive' : 'zInactive'}`} id="Z2">Z</h1>
                        <h1 className={`asciiWord ${zState ? 'zActive' : 'zInactive'}`} id="Z3">Z</h1>
                    </div>
                    <div className="cat ascii">
                        <pre>
                            |\      ____--___<br />
                            / ,`'-/`         `--,__  <br />
                            | ,^   ) )_      (  `'-'   <br />
                            \/--''(.:/.:)-'(.:\:)
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}