// Codes By Mahdi Tasha
// Importing Part
import IconComponent from './chunks/iconComponent';
import ArticleItemsInNavComponent from './chunks/articleItemsInNavComponent';
import Logo from './../assets/img/img-logo.png';
import { Link } from "react-router-dom";

// Defining type of props
interface types {
    isOpened: boolean;
    clickOfBg: any;
}

// Exporting functional component as default
export default function LeftSideNavComponent({isOpened, clickOfBg}:types):JSX.Element{
    // Returning JSX
    return(
        <>
            <div onClick={clickOfBg} data-opened={isOpened} className={'absolute data-[opened="true"]:opacity-1 data-[opened="false"]:pointer-events-none data-[opened="false"]:opacity-0 left-0 top-0 w-full h-full bg-black/30 backdrop-blur-md my-transition'} />
            <nav data-opened={isOpened} className={'absolute overflow-auto data-[opened="true"]:visible data-[opened="false"]:invisible data-[opened="true"]:opacity-1 data-[opened="false"]:opacity-0 data-[opened="true"]:left-0 md:data-[opened="false"]:left-[-30%] data-[opened="false"]:-left-[-70%] top-0 md:w-[30%] w-[70%] h-full bg-indigo-600 my-transition'}>
                <Link to={'/'} className={'bg-black flex justify-center items-center p-5'}>
                    <img src={Logo} alt="Coffe CatchUp Logo" width={'50px'} height={'50px'}/>
                </Link>
                <a className={'block border-y border-y-white/30'} href="https://www.github.com/MohamadMahdi-Tasha">
                    <button tabIndex={-1} className={'flex items-center p-3 w-full text-white hover:bg-white/20 transition-all'}>
                        <IconComponent type={'github'}/>
                        <span className={'ml-2'}>My Github</span>
                    </button>
                </a>
                <div>
                    <h6 className={'m-3 text-white font-semibold text-lg'}>Latest Reports:</h6>
                    <ul className={'border-b border-b-white/20'}>
                        <ArticleItemsInNavComponent date={'2023/12/6'} img={'s'}/>
                        <ArticleItemsInNavComponent date={'2023/12/6'} img={'s'}/>
                    </ul>
                </div>
                <div className={'p-3'}>
                    <h6 className={'text-white font-semibold text-lg block mb-3'}>Find Reports On Date :</h6>
                    <input className={'w-full bg-transparent border cursor-pointer border-white/20 p-3 rounded-md text-white hover:bg-white/20 transition-all'} type="date"/>
                </div>
            </nav>
        </>
    );
}