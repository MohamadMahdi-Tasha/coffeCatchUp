// Codes By Mahdi Tasha
// Importing part
import React, { useState, useEffect } from "react";
import DaysTypeButtonWithoutSelectingComponent from './daysTypeButtonWithoutSelectingComponent';

// Defining type of props
interface placeHolderType {placeHolder: string}
// Exporting functional component as default
export default function ActivitiesDropDownComponent({placeHolder}:placeHolderType):JSX.Element{
    // Creating States
    const [isOpened, setOpened] = useState(false);
    const [isTypesSelected, setTypesSelected] = useState(false);
    const [selectedTypes, setSelectedTypes] = useState([]);

    // Handling Clicks
    function handleClickOfTypeButtons(event:React.MouseEvent):void {
        const clickedElement:any = event.target;
        const contentOfClickedElement = clickedElement.textContent;
        let nameToPush:string;

        switch (contentOfClickedElement) {
            case "Lazy":nameToPush = "lazy";break;
            case "Productive":nameToPush = "productive";break;
            case "Learn From It":nameToPush = "learned";break;
            case "Vacation":nameToPush = "vacation";break;
            case "With Family":nameToPush = "family";break;
        }

        setTypesSelected(true)
        // @ts-ignore
        if (selectedTypes.indexOf(nameToPush) === -1) {
            // @ts-ignore
            setSelectedTypes(prevState => [...prevState, nameToPush])
        }
    }

    // Returning JSX
    return(
        <div className={'relative'}>
            <div onClick={() => (isOpened) ? setOpened(false) : setOpened(true)} className={`block cursor-pointer border-2 ${(isOpened) ? 'border-indigo-300': 'border-black/20' } outline-0 ${(isOpened) ? 'bg-indigo-300': 'bg-black/20'} focus:bg-indigo-300 focus:border-indigo-300 text-black/60 font-roboto text-black w-full p-3 h-[62px] overflow-auto rounded-md mb-4 text-start font-normal text-sm my-transition flex flex-wrap gap-3`}>
                {
                    (isTypesSelected)
                        ? selectedTypes.map((type:string,index:number):any => <DaysTypeButtonWithoutSelectingComponent key={index} span notFocusable type={type}/>)
                        : placeHolder
                }
            </div>
            <div data-opened={isOpened} className={'absolute data-[opened="false"]:invisible outline-0 outline-white data-[opened="false"]:visible data-[opened="false"]:opacity-0 data-[opened="false"]:opacity-1 data-[opened="false"]:top-[20px] data-[opened="true"]:top-0 my-transition translate-y-[-90%] bg-white w-full bg-white shadow rounded-lg p-3 flex flex-wrap gap-3'}>
                <DaysTypeButtonWithoutSelectingComponent onClick={handleClickOfTypeButtons} type={'lazy'}/>
                <DaysTypeButtonWithoutSelectingComponent onClick={handleClickOfTypeButtons} type={'productive'}/>
                <DaysTypeButtonWithoutSelectingComponent onClick={handleClickOfTypeButtons} type={'learned'}/>
                <DaysTypeButtonWithoutSelectingComponent onClick={handleClickOfTypeButtons} type={'vacation'}/>
                <DaysTypeButtonWithoutSelectingComponent onClick={handleClickOfTypeButtons} type={'family'}/>
            </div>
        </div>
    );
}