// Codes By Mahdi Tasha
// Importing Part
import ContainerComponent from "../components/containerComponent";
import DaysTypeButtonComponent from "../components/chunks/daysTypeButtonComponent";
import ArticleItemsHolderComponent from '../components/chunks/articleItemsHolderComponent';

// Exporting functional component as default
export default function HomePage():JSX.Element{
    // Returning JSX
    return(
        <ContainerComponent className={'mt-20 p-3'}>
            <div className={'flex flex-wrap md:gap-4 gap-2 items-center mb-5'}>
                <h6 className={'text-black/50 dark:text-white/50 text-sm'}>My Days:</h6>
                <DaysTypeButtonComponent type='lazy' />
                <DaysTypeButtonComponent type='productive' />
                <DaysTypeButtonComponent type='learned' />
                <DaysTypeButtonComponent type='vacation' />
                <DaysTypeButtonComponent type='family' />
            </div>
            <div>
                <h3 className={'text-black dark:text-white text-lg font-bold mb-3'}>Articles</h3>
                <ArticleItemsHolderComponent />
            </div>
        </ContainerComponent>
    );
}