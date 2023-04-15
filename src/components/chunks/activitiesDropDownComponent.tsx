// Codes By Mahdi Tasha
// Importing part
import React, { useState, useEffect } from "react";
import DaysTypeButtonWithoutSelectingComponent from './daysTypeButtonWithoutSelectingComponent';
import DaysTypeTextWithoutSelectingComponent from './daysTypeTextWithoutSelectingComponent';

// Defining type of props
interface placeHolderType {placeHolder: string}

// ref
export const typesHolderRef:React.RefObject<any> = React.createRef();

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
            <button
                ref={typesHolderRef}
                type={'button'}
                onClick={() => (isOpened) ? setOpened(false) : setOpened(true)}
                className={`block peer data-[errored="true"]:border-red-600 dark:text-white/20 data-[errored="true"]:bg-red-600/20 data-[errored="true"]:text-red-600 cursor-pointer border-2 ${(isOpened) ? 'border-indigo-300 dark:border-indigo-900': 'border-black/20 dark:border-white/20' } outline-0 ${(isOpened) ? 'bg-indigo-300 dark:bg-indigo-900': 'bg-black/20 dark:bg-white/20'} focus:bg-indigo-300 dark:focus:border-indigo-900 dark:focus:bg-indigo-900 focus:border-indigo-300 text-black/60 font-roboto w-full p-3 h-[62px] overflow-auto rounded-md mb-4 text-start font-normal text-sm my-transition flex flex-wrap gap-3`}
                data-errored={false}
            >
                {
                    (isTypesSelected)
                        ? selectedTypes.map((type:string,index:number):any => <DaysTypeTextWithoutSelectingComponent key={index} type={type}/>)
                        : placeHolder
                }
            </button>
            <h6 className={'peer-data-[errored="true"]:block hidden text-sm font-bold text-red-600 mb-4'}>Please Select At Least 1 Type Of Blog</h6>
            <div
                data-opened={isOpened}
                className={'absolute data-[opened="true"]:visible outline-0 outline-white data-[opened="false"]:invisible data-[opened="false"]:opacity-0 data-[opened="false"]:opacity-1 data-[opened="false"]:top-[20px] data-[opened="true"]:top-0 my-transition translate-y-[-90%] bg-white w-full bg-white dark:bg-slate-800 shadow rounded-lg p-3 flex flex-wrap gap-3'}>
                <DaysTypeButtonWithoutSelectingComponent onClick={handleClickOfTypeButtons} type={'lazy'}/>
                <DaysTypeButtonWithoutSelectingComponent onClick={handleClickOfTypeButtons} type={'productive'}/>
                <DaysTypeButtonWithoutSelectingComponent onClick={handleClickOfTypeButtons} type={'learned'}/>
                <DaysTypeButtonWithoutSelectingComponent onClick={handleClickOfTypeButtons} type={'vacation'}/>
                <DaysTypeButtonWithoutSelectingComponent onClick={handleClickOfTypeButtons} type={'family'}/>
            </div>
        </div>
    );
}