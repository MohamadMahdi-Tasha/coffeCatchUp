// Codes By Mahdi Tasha
// Importing Part
import React, { useState } from "react";

// Defining type of props
interface typeInterface {type: string;}

// Exporting functional component as default
export default function DaysTypeButtonComponent({type}:typeInterface):any{
    // Creating State
    const [isSelected, setSelected] = useState(false);

    // Handling clicks
    function handleClick():void {
        (isSelected)
            ? setSelected(false)
            : setSelected(true)
    }

    // Conditional Rendering
    if (type === 'lazy') {
        return(
            <button
                onClick={handleClick}
                data-selected={isSelected}
                className={'px-5 py-2 flex items-center data-[selected="true"]:bg-red-500/50 data-[selected="true"]:ring data-[selected="true"]:ring-black/40 bg-red-300/30 focus:bg-red-300/50 hover:bg-red-300/50 transition-colors ease-in-out border border-red-600 text-red-600 rounded-[40rem] text-xs'}
            >
                <span className={'mr-2 w-1.5 h-1.5 bg-red-600 rounded-full'}></span>
                Lazy
            </button>
        );
    } else if (type === 'productive') {
        return(
            <button
                onClick={handleClick}
                data-selected={isSelected}
                className={'px-5 py-2 flex items-center data-[selected="true"]:bg-green-500/50 data-[selected="true"]:ring data-[selected="true"]:ring-black/40 bg-green-300/30 focus:bg-green-300/50 hover:bg-green-300/50 transition-colors ease-in-out border border-green-600 text-green-600 rounded-[40rem] text-xs'}
            >
                <span className={'mr-2 w-1.5 h-1.5 bg-green-600 rounded-full'}></span>
                Productive
            </button>
        );
    } else if (type === 'learned') {
        return(
            <button
                onClick={handleClick}
                data-selected={isSelected}
                className={'px-5 py-2 flex items-center data-[selected="true"]:bg-orange-500/50 data-[selected="true"]:ring data-[selected="true"]:ring-black/40 bg-orange-300/30 focus:bg-orange-300/50 hover:bg-orange-300/50 transition-colors ease-in-out border border-orange-600 text-orange-600 rounded-[40rem] text-xs'}
            >
                <span className={'mr-2 w-1.5 h-1.5 bg-orange-600 rounded-full'}></span>
                Learn From It
            </button>
        );
    } else if (type === 'vacation') {
        return(
            <button
                onClick={handleClick}
                data-selected={isSelected}
                className={'px-5 py-2 flex items-center data-[selected="true"]:bg-blue-500/50 data-[selected="true"]:ring data-[selected="true"]:ring-black/40 bg-blue-300/30 focus:bg-blue-300/50 hover:bg-blue-300/50 transition-colors ease-in-out border border-blue-600 text-blue-600 rounded-[40rem] text-xs'}
            >
                <span className={'mr-2 w-1.5 h-1.5 bg-blue-600 rounded-full'}></span>
                Vacation
            </button>
        );
    } else if (type === 'family') {
        return(
            <button
                onClick={handleClick}
                data-selected={isSelected}
                className={'px-5 py-2 flex items-center data-[selected="true"]:bg-indigo-500/50 data-[selected="true"]:ring data-[selected="true"]:ring-black/40 bg-indigo-300/30 focus:bg-indigo-300/50 hover:bg-indigo-300/50 transition-colors ease-in-out border border-indigo-600 text-indigo-600 rounded-[40rem] text-xs'}
            >
                <span className={'mr-2 w-1.5 h-1.5 bg-indigo-600 rounded-full'}></span>
                With Family
            </button>
        );
    }
}