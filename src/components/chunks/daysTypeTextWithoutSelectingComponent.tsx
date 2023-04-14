// Codes By Mahdi Tasha
// Defining type of props
interface typesInterface {type: string}

// Exporting functional component as default
export default function DaysTypeTextWithoutSelectingComponent({type}:typesInterface):any {
// Conditional Rendering
    if (type === 'lazy') {
        return(
            <h6 className={'px-5 py-2 flex items-center bg-red-300/30 focus:bg-red-300/50 hover:bg-red-300/50 transition-colors ease-in-out border border-red-600 text-red-600 rounded-[40rem] text-xs'}>
                <span className={'mr-2 w-1.5 h-1.5 bg-red-600 rounded-full'}></span>
                Lazy
            </h6>
        );
    } else if (type === 'productive') {
        return(
            <h6 className={'px-5 py-2 flex items-center bg-green-300/30 focus:bg-green-300/50 hover:bg-green-300/50 transition-colors ease-in-out border border-green-600 text-green-600 rounded-[40rem] text-xs'}>
                <span className={'mr-2 w-1.5 h-1.5 bg-green-600 rounded-full'}></span>
                Productive
            </h6>
        );
    } else if (type === 'learned') {
        return(
            <h6 className={'px-5 py-2 flex items-center bg-orange-300/30 focus:bg-orange-300/50 hover:bg-orange-300/50 transition-colors ease-in-out border border-orange-600 text-orange-600 rounded-[40rem] text-xs'}>
                <span className={'mr-2 w-1.5 h-1.5 bg-orange-600 rounded-full'}></span>
                Learn From It
            </h6>
        );
    } else if (type === 'vacation') {
        return(
            <h6 className={'px-5 py-2 flex items-center bg-blue-300/30 focus:bg-blue-300/50 hover:bg-blue-300/50 transition-colors ease-in-out border border-blue-600 text-blue-600 rounded-[40rem] text-xs'}>
                <span className={'mr-2 w-1.5 h-1.5 bg-blue-600 rounded-full'}></span>
                Vacation
            </h6>
        );
    } else if (type === 'family') {
        return(
            <h6 className={'px-5 py-2 flex items-center bg-indigo-300/30 focus:bg-indigo-300/50 hover:bg-indigo-300/50 transition-colors ease-in-out border border-indigo-600 text-indigo-600 rounded-[40rem] text-xs'}>
                <span className={'mr-2 w-1.5 h-1.5 bg-indigo-600 rounded-full'}></span>
                With Family
            </h6>
        );
    }
}