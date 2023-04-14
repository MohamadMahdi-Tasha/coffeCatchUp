// Codes By Mahdi Tasha
// Importing Part
import React, { useState } from "react";
import HeaderComponent from './headerComponent';
import LeftSideNavComponent from "./leftSideNavComponent";
import DialogComponent from './chunks/dialogComponent';
import TextAreaComponent from './chunks/textAreaComponent';
import ActivitiesDropDownComponent from './chunks/activitiesDropDownComponent';

// Exporting functional component as default
export default function HeaderAndLeftSideNavComponent():JSX.Element {
    // Creating State
    const [isLeftSideNavOpened, setLeftSideNavOpened] = useState(false);
    const [isAddDialogShowing, setAddDialogShowing] = useState(false);

    // Returning JSX
    return(
        <>
            <HeaderComponent
                clickOfAddBtn={():void => {setAddDialogShowing(true);document.body.classList.add('overflow-hidden');}}
                clickOfNavToggler={():void => {setLeftSideNavOpened(true);document.body.classList.add('overflow-hidden');}}/>
            <LeftSideNavComponent closeFunction={():void => {setLeftSideNavOpened(false);document.body.classList.remove('overflow-hidden');}} isOpened={isLeftSideNavOpened}/>
            <DialogComponent closeFunction={():void => {setAddDialogShowing(false);document.body.classList.remove('overflow-hidden');}} isOpened={isAddDialogShowing}>
                <h6 className={'font-semibold text-lg text-black mb-3'}>Want to add a report?</h6>
                <form action="#">
                    <TextAreaComponent placeHolder={'Write your history here ...'}/>
                    <ActivitiesDropDownComponent placeHolder={'Select Activities ...'}/>
                    <button className={'w-full p-3 bg-black rounded-md text-white font-roboto font-semibold'}>Submit</button>
                </form>
            </DialogComponent>
        </>
    );
}