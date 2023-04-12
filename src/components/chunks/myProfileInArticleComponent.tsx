// Codes By Mahdi Tasha
// Importing Part
import MyImageComponent from "./myImageComponent";

// Defining type of props
interface myProfileInArticleComponentPropsType {
    date: string;
}

// Exporting functional component as default
export default function MyProfileInArticleComponent({date}:myProfileInArticleComponentPropsType):JSX.Element{
    // Returning JSX
    return(
        <div className={'flex items-center mb-3'}>
            <MyImageComponent />
            <div className={'ml-3'}>
                <div className={'flex items-center'}>
                    <h6 className={'font-bold text-black text-sm'}>Mahdi Tasha</h6>
                    <h6 className={'mx-2 text-black/50'}>.</h6>
                    <h6 className={'text-black/50 text-sm'}><time dateTime={date}>{date}</time></h6>
                </div>
                <h6 className={'text-sm text-black/50'}>Junior Front End Dev</h6>
            </div>
        </div>
    );
}