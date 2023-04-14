// Codes By Mahdi Tasha
// Importing Part
import React, { useState } from "react";
import HeaderComponent from './headerComponent';
import LeftSideNavComponent from "./leftSideNavComponent";
import AddBlogDialogComponent from "./addBlogDialogComponent";

// Exporting functional component as default
export default function HeaderHolderComponent():JSX.Element {
    // Creating State
    const [isLeftSideNavOpened, setLeftSideNavOpened] = useState(false);
    const [isAddDialogShowing, setAddDialogShowing] = useState(false);

    // Returning JSX
    return(
        <>
            <HeaderComponent clickOfAddBtn={():void => {setAddDialogShowing(true);document.body.classList.add('overflow-hidden');}} clickOfNavToggler={():void => {setLeftSideNavOpened(true);document.body.classList.add('overflow-hidden');}}/>
            <LeftSideNavComponent closeFunction={():void => {setLeftSideNavOpened(false);document.body.classList.remove('overflow-hidden');}} isOpened={isLeftSideNavOpened}/>
            <AddBlogDialogComponent closeFunction={():void => {setAddDialogShowing(false);document.body.classList.remove('overflow-hidden');}} isOpened={isAddDialogShowing}/>
        </>
    );
}