// Codes By Mahdi Tasha
// Importing Part
import ContainerComponent from "../components/containerComponent";
import DaysTypeButtonComponent from "../components/chunks/daysTypeButtonComponent";
import ArticleItemComponent from "../components/chunks/articleItemComponent";

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
                <ul className={'home-page__articles-list'}>
                    <ArticleItemComponent types={['productive', 'family', 'learned']} img={'sd'} date={'2023/12/6'}/>
                </ul>
            </div>
        </ContainerComponent>
    );
}