// Codes By Mahdi Tasha
// Importing Part
import { Link } from "react-router-dom";
import ContainerComponent from './containerComponent';
import IconComponent from './chunks/iconComponent';
import Logo from './../assets/img/img-logo.png';
import MyImageComponent from './chunks/myImageComponent';
import LeftSideNavComponent from "./leftSideNavComponent";

// Defining type of props
interface types {
    clickOfNavToggler: any;
    clickOfAddBtn: any;
}

// Exporting functional component as default
export default function HeaderComponent({clickOfNavToggler, clickOfAddBtn}:types):JSX.Element{
    // Returning JSX
    return(
        <header className={'border-b border-b-black/30 dark:border-b-white/30 bg-white/30 dark:bg-black/30 backdrop-blur-sm fixed top-0 w-full z-10'}>
            <ContainerComponent className={'p-3 flex items-center justify-between gap-3'}>
                <button onClick={clickOfNavToggler} className={'w-8 h-8 flex items-center justify-center text-black dark:text-white rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors ease-in-out border border-black/30 dark:border-white/30'}><IconComponent type={'hamburger'}/></button>
                <Link className={'md:block hidden'} to={'/'}><img className={'w-10 h-10'} src={Logo} alt="Coffee CatchUp Logo"/></Link>
                <div className={'flex items-center md:gap-8 gap-3'}>
                    <MyImageComponent className={'sm:block hidden'}/>
                    <button onClick={clickOfAddBtn} className={'flex font-roboto text-medium md:text-sm text-xs items-center gap-2 px-5 py-2 rounded-lg border border-black/30 dark:border-white/30 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-black dark:text-white ease-in-out'}>
                        <span>+</span>
                        <span>Add</span>
                    </button>
                </div>
            </ContainerComponent>
        </header>
    );
}