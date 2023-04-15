// Codes By Mahdi Tasha
// Importing Part
import IconComponent from './chunks/iconComponent';
import ArticleItemsInNavComponent from './chunks/articleItemsInNavComponent';
import Logo from './../assets/img/img-logo.png';
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

// Defining type of props
interface types {
    isOpened: boolean;
    closeFunction: any;
}

// Exporting functional component as default
export default function LeftSideNavComponent({isOpened, closeFunction}:types):JSX.Element{
    // Getting Redux State
    const store:any = useSelector(state => state);
    const blogs:object[] = store.blogs;
    const lastBlog = blogs[blogs.length - 2];
    const oneBeforeLastBlog = blogs[blogs.length - 1];
    const lastTwoBlogs = [lastBlog, oneBeforeLastBlog];

    // Returning JSX
    return(
        <>
            <div onClick={closeFunction} data-opened={isOpened} className={'fixed z-10 data-[opened="true"]:opacity-1 data-[opened="false"]:pointer-events-none data-[opened="false"]:opacity-0 left-0 top-0 w-full h-full bg-black/30 dark:bg-white/10 backdrop-blur-md my-transition'} />
            <nav data-opened={isOpened} className={'fixed z-10 overflow-auto data-[opened="true"]:visible data-[opened="false"]:invisible data-[opened="true"]:opacity-1 data-[opened="false"]:opacity-0 data-[opened="true"]:left-0 md:data-[opened="false"]:left-[-30%] data-[opened="false"]:left-[-70%] top-0 md:w-[30%] w-[70%] h-full bg-white dark:bg-slate-900 my-transition'}>
                <button onClick={closeFunction} className={'w-8 h-8 flex items-center justify-center text-black dark:text-white hover:bg-black/30 dark:hover:bg-white/30 transition-all mb-3 rounded-full m-3'}><IconComponent type={'x'}/></button>
                <Link to={'/'} className={'bg-black flex justify-center items-center p-5'}>
                    <img src={Logo} alt="Coffe CatchUp Logo" width={'50px'} height={'50px'}/>
                </Link>
                <a className={'block border-y border-y-black/30 dark:border-b-white/20'} href="https://www.github.com/MohamadMahdi-Tasha">
                    <button tabIndex={-1} className={'flex items-center p-3 w-full text-black dark:text-white hover:bg-black/20 dark:hover:bg-white/20 transition-all'}>
                        <IconComponent type={'github'}/>
                        <span className={'ml-2'}>My Github</span>
                    </button>
                </a>
                <div>
                    <h6 className={'m-3 text-black dark:text-white font-semibold text-lg'}>Latest Reports:</h6>
                    <ul className={'border-b border-b-black/20 dark:border-b-white/20'}>
                        {
                            (lastBlog === undefined || lastTwoBlogs === undefined)
                                ? false
                                : lastTwoBlogs.map((item:any,index:number) => <ArticleItemsInNavComponent key={index} date={item.date} img={item.img}/>)
                        }
                    </ul>
                </div>
                <div className={'p-3'}>
                    <h6 className={'text-black dark:text-white font-semibold text-lg block mb-3'}>Find Reports On Date :</h6>
                    <input className={'w-full bg-transparent border cursor-pointer border-black/20 dark:border-white/20 p-3 rounded-md text-black dark:text-white hover:bg-black/20 transition-all'} type="date"/>
                </div>
            </nav>
        </>
    );
}