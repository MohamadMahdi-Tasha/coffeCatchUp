// Codes By Mahdi Tasha

// Defining type of props
interface typeInterface {type: string;}

// Exporting functional component as default
export default function DaysTypeButtonComponent({type}:typeInterface):any{
    // Conditional Rendering
    if (type === 'lazy') {
        return(
            <button className={'px-5 py-2 flex items-center bg-red-300/30 hover:bg-red-300/50 transition-colors ease-in-out border border-red-600 text-red-600 rounded-[40rem] text-xs'}><span className={'mr-2 w-1.5 h-1.5 bg-red-600 rounded-full'}></span>Lazy</button>
        );
    } else if (type === 'productive') {
        return(
            <button className={'px-5 py-2 flex items-center bg-green-300/30 hover:bg-green-300/50 transition-colors ease-in-out border border-green-600 text-green-600 rounded-[40rem] text-xs'}><span className={'mr-2 w-1.5 h-1.5 bg-green-600 rounded-full'}></span>Productive</button>
        );
    } else if (type === 'learned') {
        return(
            <button className={'px-5 py-2 flex items-center bg-orange-300/30 hover:bg-orange-300/50 transition-colors ease-in-out border border-orange-600 text-orange-600 rounded-[40rem] text-xs'}><span className={'mr-2 w-1.5 h-1.5 bg-orange-600 rounded-full'}></span>Learn From It</button>
        );
    } else if (type === 'vacation') {
        return(
            <button className={'px-5 py-2 flex items-center bg-blue-300/30 hover:bg-blue-300/50 transition-colors ease-in-out border border-blue-600 text-blue-600 rounded-[40rem] text-xs'}><span className={'mr-2 w-1.5 h-1.5 bg-blue-600 rounded-full'}></span>Vacation</button>
        );
    } else if (type === 'family') {
        return(
            <button className={'px-5 py-2 flex items-center bg-indigo-300/30 hover:bg-indigo-300/50 transition-colors ease-in-out border border-indigo-600 text-indigo-600 rounded-[40rem] text-xs'}><span className={'mr-2 w-1.5 h-1.5 bg-indigo-600 rounded-full'}></span>With Family</button>
        );
    }
}