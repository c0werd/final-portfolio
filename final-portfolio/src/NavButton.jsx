import { useState } from 'react';

function NavButton() {
    const [navState, setNavState] = useState(false);
    
    function toggleNav() {
        setNavState(navState => !navState);
    }
    
    let toggleClassCheck = navState ? ' active' : ' inactive';

    return (
        <button id="nav-toggle" type="button" 
        onClick={toggleNav}
        className={toggleClassCheck}>
                <h1 id="closedIcon">j</h1>
                <h1 id="openIcon">:3</h1>
        </button>
    )
}

export default NavButton;