// Codes By Mahdi Tasha
// Importing Part
import { Link } from "react-router-dom";
import ContainerComponent from './containerComponent';
import IconComponent from './chunks/iconComponent';
import MyImage from './../assets/img/img-mahdi-tasha.jpg';
import Logo from './../assets/img/img-logo.png';

// Exporting functional component as default
export default function HeaderComponent():JSX.Element{
    // Returning JSX
    return(
        <header className={'border-b border-b-slate-500/30'}>
            <ContainerComponent className={'p-3 flex items-center justify-between'}>
                <button className={'w-8 h-8 flex items-center justify-center text-black rounded-full'}><IconComponent type={'hamburger'}/></button>
                <Link to={'/'}><img className={'w-10 h-10'} src={Logo} alt="Coffee CatchUp Logo"/></Link>
                <div className={'flex items-center gap-8'}>
                    <div className={'rounded-full p-0.5 border-2 border-2-slate-500/30'}>
                        <img className={'w-8 h-8 rounded-full'} src={MyImage} alt="Mahdi Tasha"/>
                    </div>
                    <button className={'flex font-roboto text-medium text-sm items-center gap-2 px-5 py-2 rounded-md border border-slate-500/30 hover:bg-slate-400/30 transition-colors ease-in-out'}>
                        <span>+</span>
                        <span>Add</span>
                    </button>
                </div>
            </ContainerComponent>
        </header>
    );
}