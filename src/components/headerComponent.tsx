// Codes By Mahdi Tasha
// Importing Part
import { Link } from "react-router-dom";
import ContainerComponent from './containerComponent';
import IconComponent from './chunks/iconComponent';
import Logo from './../assets/img/img-logo.png';
import MyImageComponent from './chunks/myImageComponent';

// Exporting functional component as default
export default function HeaderComponent():JSX.Element{
    // Returning JSX
    return(
        <header className={'border-b border-b-black/30 bg-white/30 backdrop-blur-sm fixed top-0 w-full'}>
            <ContainerComponent className={'p-3 flex items-center justify-between'}>
                <button className={'w-8 h-8 flex items-center justify-center text-black rounded-full hover:bg-black/10 transition-colors ease-in-out border border-black/30'}><IconComponent type={'hamburger'}/></button>
                <Link to={'/'}><img className={'w-10 h-10'} src={Logo} alt="Coffee CatchUp Logo"/></Link>
                <div className={'flex items-center gap-8'}>
                    <MyImageComponent />
                    <button className={'flex font-roboto text-medium text-sm items-center gap-2 px-5 py-2 rounded-lg border border-black/30 hover:bg-black/10 transition-colors ease-in-out'}>
                        <span>+</span>
                        <span>Add</span>
                    </button>
                </div>
            </ContainerComponent>
        </header>
    );
}