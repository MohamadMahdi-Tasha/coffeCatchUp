// Codes By Mahdi Tasha
// Importing part
import ActivitiesDropDownComponent, {typesHolderRef} from "./chunks/activitiesDropDownComponent";
import TextAreaComponent, {textAreaRef} from "./chunks/textAreaComponent";
import DialogComponent from "./chunks/dialogComponent";
import {actionsOfAppSlice} from "../store";
import { useSelector, useDispatch} from "react-redux";

// creating types for props
interface propsType {
    closeFunction: any;
    isOpened: boolean;
}

// Exporting functional component as default
export default function AddBlogDialogComponent({closeFunction, isOpened}:propsType):JSX.Element{
    // Getting Redux State
    const store = useSelector(state => state);
    const dispatch = useDispatch();

    // handing submit of Form
    function handleSubmitOfForm(event:React.FormEvent<HTMLFormElement>):void {
        event.preventDefault();

        const typesHolder:any = typesHolderRef.current;
        const textArea:any = textAreaRef.current;

        if (typesHolder.textContent === 'Select Activities ...') {
            typesHolder.setAttribute('data-errored', 'true');
        } else {
            typesHolder.setAttribute('data-errored', 'false');
        }

        if (textArea.value.startsWith(" ") || textArea.value === ""){
            textArea.setAttribute('data-errored', 'true');
        } else {
            textArea.setAttribute('data-errored', 'false');
        }

        if (document.querySelectorAll('[data-errored="true"]').length === 0) {
            document.body.classList.remove('overflow-hidden');
            const today:Date = new Date();
            const todayYear:Number = today.getFullYear();
            const todayMonth:Number = today.getMonth();
            const todayDate:Number = today.getDate();
            // TODO:this block of codes has errors
            const payloadToDispatch = {
                content: textArea.value,
                date: `${todayYear}/${todayDate}/${todayMonth}`,
                img: 'https://bsmedia.business-standard.com/_media/bs/img/article/2020-11/06/full/1604653132-6606.jpg',
                type: ['family','lazy']
            }

            dispatch(actionsOfAppSlice.createBlog(payloadToDispatch))
            textArea.value = '';
            typesHolder.textContent = '';
            closeFunction();
        }
    }

    // Returning JSX
    return(
        <DialogComponent closeFunction={closeFunction} isOpened={isOpened}>
            <h6 className={'font-semibold text-lg text-black dark:text-white mb-3'}>Want to add a report?</h6>
            <form onSubmit={handleSubmitOfForm} action="#">
                <TextAreaComponent placeHolder={'Write your history here ...'}/>
                <ActivitiesDropDownComponent placeHolder={'Select Activities ...'}/>
                <button className={'w-full p-3 bg-black dark:bg-white/20 rounded-md dark:text-black text-white font-roboto font-semibold'}>Submit</button>
            </form>
        </DialogComponent>
    );
}