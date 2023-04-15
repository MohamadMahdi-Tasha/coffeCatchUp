// Codes By Mahdi Tasha
// Importing Part
import React from "react";

// Defining type of props
interface placeHolderType {placeHolder: string;}

// ref
export const textAreaRef:React.RefObject<any> = React.createRef();

// Exporting functional component as default
export default function TextAreaComponent({placeHolder}:placeHolderType):JSX.Element{
    // Returning JSX
    return(
        <>
            <textarea
                data-errored={false}
                ref={textAreaRef}
                className={'block peer resize-none my-transition border-2 dark:border-white/20 border-black/20 dark:bg-white/20 bg-black/20 dark:placeholder:text-white/20 placeholder:text-black/20 dark:text-white text-black focus:bg-indigo-300 dark:focus:border-indigo-900 dark:focus:bg-indigo-900 focus:border-indigo-300 data-[errored="true"]:border-red-600 data-[errored="true"]:bg-red-600/20 data-[errored="true"]:placeholder:text-red-600 data-[errored="true"]:text-red-600 outline-0 placeholder:text-black/20 w-full h-[150px] font-roboto p-2 rounded-md mb-4 text-sm'}
                placeholder={placeHolder}>
            </textarea>
            <h6 className={'text-sm peer-data-[errored="true"]:block hidden font-bold text-red-600 mb-4'}>Please Fill The Input</h6>
        </>
    );
}