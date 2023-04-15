// Codes By Mahdi Tasha
// Importing Part
import ContainerComponent from "../components/containerComponent";
import DaysTypeButtonComponent from "../components/chunks/daysTypeButtonComponent";
import ArticleItemComponent from "../components/chunks/articleItemComponent";
import ArticleItemsHolderComponent from '../components/chunks/articleItemsHolderComponent';

// Exporting functional component as default
export default function HomePage():JSX.Element{
    // Returning JSX
    return(
        <ContainerComponent className={'mt-20 p-3'}>
            <div className={'flex flex-wrap md:gap-4 gap-2 items-center mb-5'}>
                <h6 className={'text-black/50 text-sm'}>My Days:</h6>
                <DaysTypeButtonComponent type='lazy' />
                <DaysTypeButtonComponent type='productive' />
                <DaysTypeButtonComponent type='learned' />
                <DaysTypeButtonComponent type='vacation' />
                <DaysTypeButtonComponent type='family' />
            </div>
            <div>
                <h3 className={'text-black text-lg font-bold mb-3'}>Articles</h3>
                <ArticleItemsHolderComponent>
                    <ArticleItemComponent img={'https://bsmedia.business-standard.com/_media/bs/img/article/2020-11/06/full/1604653132-6606.jpg'} types={['productive', 'family', 'learned']} date={'2023/12/6'}/>
                </ArticleItemsHolderComponent>
            </div>
        </ContainerComponent>
    );
}