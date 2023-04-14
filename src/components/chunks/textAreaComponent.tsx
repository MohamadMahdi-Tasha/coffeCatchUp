// Codes By Mahdi Tasha
// Importing Part
import React, {useState} from "react";

// Defining type of props
interface placeHolderType {placeHolder: string;}

// Exporting functional component as default
export default function TextAreaComponent({placeHolder}:placeHolderType):JSX.Element{
    // Defining States
    const [isErrored, setErrored] = useState(false);

    // Handling change of element
    function handleChange(event: React.FormEvent<HTMLTextAreaElement>):void {
        const element: EventTarget | any = event.target;
        (element.value.startsWith(" ")) ? setErrored(true) : setErrored(false);
    }

    // Returning JSX
    return(
        <>
            <textarea
                onChange={handleChange}
                className={
                    (isErrored)
                        ? 'block resize-none my-transition border-2 border-red-600 bg-red-600/20 placeholder:text-red-600 text-red-600 outline-0 placeholder:text-black/20 w-full h-[150px] font-roboto p-2 rounded-md mb-4 text-sm'
                        : 'block resize-none my-transition focus:bg-indigo-300 focus:border-indigo-300 border-2 border-black/20 bg-black/20 placeholder:text-black/20 text-black outline-0 placeholder:text-black/20 w-full h-[150px] font-roboto p-2 rounded-md mb-4 text-sm'
                }
                placeholder={placeHolder}>
            </textarea>
            {isErrored ? (
                <h6 className={'text-sm font-bold text-red-600 mb-4'}>Please Fill The Input</h6>
            ) : false}
        </>
    );
}