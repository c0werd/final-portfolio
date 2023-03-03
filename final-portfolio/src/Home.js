import React, { Component } from "react";


function LetterSpan({ text, id }) {
    const letters = text.split('');
    return (
        <h1 class="word" id={id}>
            {text}
        </h1>
    );
}


export default function Home() {
    return (
        <div id="home">
            <div id="homeWrapper">
                <div className="line">
                    <LetterSpan text="hi, i'm" id="homeWord" />
                </div>
                <div class="line">
                    <a href="https://www.linkedin.com/in/james-c-638ba0191/" id="homeTitle" class="word fancy" target="_blank">
                        <span className="highlight" id="jLetter">j</span>
                        <span className="highlight">a</span>
                        <span className="highlight">m</span>
                        <span className="highlight">e</span>
                        <span className="highlight">s</span>
                        <span className="noHighlight"> </span>
                        <span className="highlight">s</span>
                        <span className="noHighlight">a</span>
                        <span className="noHighlight">n</span>
                        <span className="noHighlight">-</span>
                        <span className="highlight">y</span>
                        <span className="noHighlight">i</span>
                        <span className="noHighlight"> </span>
                        <span className="highlight">c</span>
                        <span className="noHighlight">o</span>
                        <span className="noHighlight">w</span>
                        <span className="noHighlight">a</span>
                        <span className="noHighlight">r</span>
                        <span className="noHighlight">d</span>
                    </a>
                </div>
                <div className="line">
                    <LetterSpan text="and this is my website." id="homeWord" />
                </div>
                <div className="line">
                    {/* <LetterSpan text="penis penis penis penis penis penis penis penis" id="homeWord" /> */}
                </div>
            </div>
        </div>
    );
}