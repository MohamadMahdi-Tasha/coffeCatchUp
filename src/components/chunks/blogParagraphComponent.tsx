// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";

// Defining type of props
interface propsInteface {
    firstLetterBig?: boolean;
    children: ReactNode;
    isHalf?: boolean;
}

// Exporting functional component as default
export default function BlogParagraphComponent({firstLetterBig, children, isHalf}:propsInteface):JSX.Element{
    // Returning JSX
    return(
        <p className={`${(isHalf) ? 'md:w-[50%] w-full' : false} ${(firstLetterBig) ? 'first-letter:text-5xl first-letter:font-extrabold' : false} text-base text-black/70 font-normal`}>
            {children}
        </p>
    );
}

