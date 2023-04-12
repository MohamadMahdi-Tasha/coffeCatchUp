// Codes By Mahdi Tasha
// Importing Part
import MyImageComponent from "./myImageComponent";

// Defining type of props
interface myProfileInArticleComponentPropsType {
    date: string;
}

// Exporting functional component as default
export default function MyProfileInArticleComponent({date}:myProfileInArticleComponentPropsType):JSX.Element{
    // Variables
    const selectedDate:Date = new Date(date);
    const dayOfSelectedDate:number = selectedDate.getDate();
    const monthOfSelectedDate:number = selectedDate.getMonth();
    const yearOfSelectedDate:number = selectedDate.getFullYear();

    // Returning JSX
    return(
        <div className={'flex items-center mb-3'}>
            <MyImageComponent />
            <div className={'ml-3'}>
                <div className={'flex items-center'}>
                    <h6 className={'font-bold text-black text-sm'}>Mahdi Tasha</h6>
                    <h6 className={'mx-2 font-light text-black/50'}>.</h6>
                    <h6 className={'text-black/50 font-light text-sm'}><time dateTime={date}>{yearOfSelectedDate}/{dayOfSelectedDate}/{monthOfSelectedDate}</time></h6>
                </div>
                <h6 className={'text-sm text-black/50 font-light'}>Junior Front End Dev</h6>
            </div>
        </div>
    );
}