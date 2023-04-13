// Codes By Mahdi Tasha
// Importing Part
import MyImage from './../../assets/img/img-mahdi-tasha.jpg';

// Defining type of props
interface classNameInterface {className?: string;}

// Exporting functional component as default
export default function MyImageComponent({className}:classNameInterface):JSX.Element{
    // Returning JSX
    return (
        <div className={(className === undefined) ? 'rounded-full p-0.5 border-2 border-2-black/30 w-10 h-10' : `rounded-full p-0.5 border-2 border-2-black/30 w-10 h-10 ${className}`}>
            <img className={'w-8 h-8 rounded-full'} src={MyImage} alt="Mahdi Tasha"/>
        </div>
    );
}