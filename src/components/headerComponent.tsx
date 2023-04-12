// Codes By Mahdi Tasha
// Importing Part
import IconComponent from './chunks/iconComponent';
import MyImage from './../assets/img/img-mahdi-tasha.jpg';

// Exporting functional component as default
export default function HeaderComponent():JSX.Element{
    // Returning JSX
    return(
        <header>
            <button><IconComponent type={'hamburger'}/></button>
            <h1>Coffee CatchUp</h1>
            <div>
                <img src={MyImage} alt="Mahdi Tasha"/>
                <button>
                    <IconComponent type={'plus'}/>
                    write
                </button>
            </div>
        </header>
    );
}