// Codes By Mahdi Tasha
// Importing part
import ActivitiesDropDownComponent, {typesHolderRef} from "./chunks/activitiesDropDownComponent";
import TextAreaComponent, {textAreaRef} from "./chunks/textAreaComponent";
import DialogComponent from "./chunks/dialogComponent";

// creating types for props
interface propsType {
    closeFunction: any;
    isOpened: boolean;
}

// Exporting functional component as default
export default function AddBlogDialogComponent({closeFunction, isOpened}:propsType):JSX.Element{
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
            alert('succses')
        }
    }

    // Returning JSX
    return(
        <DialogComponent closeFunction={closeFunction} isOpened={isOpened}>
            <h6 className={'font-semibold text-lg text-black mb-3'}>Want to add a report?</h6>
            <form onSubmit={handleSubmitOfForm} action="#">
                <TextAreaComponent placeHolder={'Write your history here ...'}/>
                <ActivitiesDropDownComponent placeHolder={'Select Activities ...'}/>
                <button className={'w-full p-3 bg-black rounded-md text-white font-roboto font-semibold'}>Submit</button>
            </form>
        </DialogComponent>
    );
}