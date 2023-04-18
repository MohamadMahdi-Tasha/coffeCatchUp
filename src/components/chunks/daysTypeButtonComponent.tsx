// Codes By Mahdi Tasha
// Importing Part
import React, { useState } from "react";

// Defining type of props
interface typeInterface {
    type: string;
    onClick: any;
}

// Exporting functional component as default
export default function DaysTypeButtonComponent({type, onClick}:typeInterface):any{
    // Creating State
    const [isSelected, setSelected] = useState(false);

    // Handling clicks
    function handleClick():void {
        onClick();
        setSelected(true);
    }

    // Conditional Rendering
    if (type === 'lazy') {
        return(
            <button
                onClick={handleClick}
                data-selected={isSelected}
                className={'type-day-filter-btn px-5 py-2 flex items-center data-[selected="true"]:bg-red-500/50 bg-red-300/30 transition-colors ease-in-out border border-red-600 text-red-600 rounded-[40rem] text-xs'}
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
                className={'type-day-filter-btn px-5 py-2 flex items-center data-[selected="true"]:bg-green-500/50 bg-green-300/30 transition-colors ease-in-out border border-green-600 text-green-600 rounded-[40rem] text-xs'}
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
                className={'type-day-filter-btn px-5 py-2 flex items-center data-[selected="true"]:bg-orange-500/50 bg-orange-300/30 transition-colors ease-in-out border border-orange-600 text-orange-600 rounded-[40rem] text-xs'}
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
                className={'type-day-filter-btn px-5 py-2 flex items-center data-[selected="true"]:bg-blue-500/50 bg-blue-300/30 transition-colors ease-in-out border border-blue-600 text-blue-600 rounded-[40rem] text-xs'}
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
                className={'type-day-filter-btn px-5 py-2 flex items-center data-[selected="true"]:bg-indigo-500/50 bg-indigo-300/30 transition-colors ease-in-out border border-indigo-600 text-indigo-600 rounded-[40rem] text-xs'}
            >
                <span className={'mr-2 w-1.5 h-1.5 bg-indigo-600 rounded-full'}></span>
                With Family
            </button>
        );
    } else if (type === 'date') {
        return(
            <button
                onClick={handleClick}
                data-selected={true}
                className={'type-day-filter-btn px-5 py-2 flex items-center data-[selected="true"]:bg-amber-500/50 bg-amber-300/30 transition-colors ease-in-out border border-amber-600 text-amber-600 rounded-[40rem] text-xs'}
            >
                <span className={'mr-2 w-1.5 h-1.5 bg-amber-600 rounded-full'}></span>
                Date
            </button>
        );
    }
}