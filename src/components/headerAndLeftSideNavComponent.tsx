// Codes By Mahdi Tasha
// Importing Part
import React, { useState } from "react";
import HeaderComponent from './headerComponent';
import LeftSideNavComponent from "./leftSideNavComponent";

// Defining type of props
interface openedInterface {isOpened: boolean}

// Exporting functional component as default
export default function HeaderAndLeftSideNavComponent():JSX.Element {
    // Creating State
    const [isLeftSideNavOpened, setLeftSideNavOpened] = useState(false);

    // Returning JSX
    return(
        <>
            <HeaderComponent clickOfNavToggler={() => setLeftSideNavOpened(true)}/>
            <LeftSideNavComponent clickOfBg={() => setLeftSideNavOpened(false)} isOpened={isLeftSideNavOpened}/>
        </>
    );
}