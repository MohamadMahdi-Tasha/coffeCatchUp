// Codes By Mahdi Tasha
// Importing Part
import MyImage from './../../assets/img/img-mahdi-tasha.jpg';

// Exporting functional component as default
export default function MyImageComponent():JSX.Element{
    // Returning JSX
    return (
        <div className={'rounded-full p-0.5 border-2 border-2-black/30 w-10 h-10'}>
            <img className={'w-8 h-8 rounded-full'} src={MyImage} alt="Mahdi Tasha"/>
        </div>
    );
}