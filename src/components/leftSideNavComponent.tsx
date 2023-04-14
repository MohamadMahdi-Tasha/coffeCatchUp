// Codes By Mahdi Tasha
// Importing Part
import IconComponent from './chunks/iconComponent';
import { Link } from "react-router-dom";

// Defining type of props
interface openedInterface {isOpened: boolean}

// Exporting functional component as default
export default function LeftSideNavComponent({isOpened}:openedInterface):JSX.Element{
    // Returning JSX
    return(
        <>
            <div data-opened={isOpened} className={'absolute data-[opened="true"]:opacity-1 data-[opened="false"]:opacity-0 left-0 top-0 w-full h-full bg-black/30 backdrop-blur-md transition-all'} />
            <nav data-opened={isOpened} className={'absolute data-[opened="true"]:left-0 md:data-[opened="false"]:left-[-30%] data-[opened="false"]:-left-[-70%] top-0 md:w-[30%] w-[70%] h-full p-3 bg-indigo-600 transition-all'}>
                <a href="https://www.github.com/MohamadMahdi-Tasha"><button><IconComponent type={'github'}/>My Github</button></a>
                <Link to={'#'}><button>2023/12/6</button></Link>
                <Link to={'#'}><button>2023/12/6</button></Link>
            </nav>
        </>
    );
}