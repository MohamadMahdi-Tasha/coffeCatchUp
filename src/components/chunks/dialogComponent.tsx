// Codes By Mahdi Tasha
// Defining type of props
import IconComponent from "./iconComponent";
import React, {ReactNode} from "react";

interface openedInterface {
    isOpened: boolean;
    children: ReactNode;
    closeFunction: any;
}

// Exporting functional component as default
export default function DialogComponent({isOpened, children, closeFunction}:openedInterface):JSX.Element{
    // Returning JSX
    return(
        <>
            <div onClick={closeFunction} data-opened={isOpened} className={'fixed data-[opened="true"]:opacity-1 data-[opened="false"]:pointer-events-none data-[opened="false"]:opacity-0 left-0 top-0 w-full h-full bg-black/30 backdrop-blur-md my-transition'} />
            <div data-opened={isOpened} className={'fixed overflow-auto data-[opened="true"]:visible data-[opened="false"]:invisible data-[opened="false"]:scale-[.98] data-[opened="true"]:scale-[1] data-[opened="true"]:opacity-1 data-[opened="false"]:opacity-0 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] bg-white rounded-lg my-transition-short p-3 md:h-[50%] h-[95%] md:w-[50%] w-[95%]'}>
                <button onClick={closeFunction} className={'w-8 h-8 flex items-center justify-center text-black hover:bg-black/30 transition-all mb-3 rounded-full'}><IconComponent type={'x'}/></button>
                {children}
            </div>
        </>
    );
}