// Codes By Mahdi Tasha
// Importing Part
import { Link } from "react-router-dom";
import MyImageComponent from "./myImageComponent";

// Defining type of props
interface openedInterface {
    date: string;
    img: string;
}

// Exporting functional component as default
export default function LeftSideNavComponent({date, img}:openedInterface):JSX.Element{
    // variables
    const selectedDate = new Date(date);
    const yearOfSelectedDate = selectedDate.getFullYear();
    const monthOfSelectedDate = selectedDate.getMonth();
    const dateOfSelectedDate = selectedDate.getDate();

    // Returning JSX
    return(
        <li>
            <Link to={`/blogs/${btoa(date)}`}>
                <article className={'md:flex block px-3 py-4 bg-transparent hover:bg-black/20 dark:hover:bg-white/20 transition-all'}>
                    <div className={'relative md:mr-2 mr-0 md:mb-0 mb-2 rounded-lg overflow-hidden md:w-[100px] md:h-[100px] h-[150px] w-full'}>
                        <div className={'absolute w-full h-full top-0 left-0 bg-indigo-600 mix-blend-color opacity-[80%]'}></div>
                        <img src={img} alt="Image Of Article" className={'md:w-[100px] md:h-[100px] object-cover'}/>
                    </div>
                    <div className={'md:flex block flex-col justify-between'}>
                        <div className={'md:mb-0 mb-2'}>
                            <h6 className={'text-black dark:text-white font-bold font-sm'}>{yearOfSelectedDate}/{(dateOfSelectedDate.toString().length === 1) ? `0${dateOfSelectedDate}` : dateOfSelectedDate}/{(monthOfSelectedDate.toString().length === 1) ? `0${monthOfSelectedDate}` : monthOfSelectedDate}</h6>
                            <h6 className={'text-black/60 dark:text-white/60 font-medium font-sm'}>Mahdi Tasha</h6>
                        </div>
                        <p className={'text-black/50 dark:text-white/50 font-light font-sm'}>Click Here To See Report Of Day</p>
                    </div>
                </article>
            </Link>
        </li>
    );
}