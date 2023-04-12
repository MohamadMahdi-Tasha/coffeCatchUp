// Codes By Mahdi Tasha
// Importing Part
import MyProfileInArticleComponent from "./myProfileInArticleComponent";
import DaysTypeButtonComponent from "./daysTypeButtonComponent";

// Defining type of props
interface articleItemPropsType {
    img?: string;
    date: string;
}

// Exporting functional component as default
export default function ArticleItemComponent({img, date}: articleItemPropsType){
    // Returning JSX
    return(
        <li className={'home-page__articles-item'}>
            <a className={'block home-page__articles-link border-black/30'} href="#">
                <article className={'py-5 flex items-center gap-5 justify-between'}>
                    <div>
                        <MyProfileInArticleComponent date={date}/>
                        <div>
                            <h1 className={'text-lg text-black font-bold mb-2'}>10th Day Of Summer Of 2023</h1>
                            <p className={'font-light text-black/30 mb-4'}>Click To See Report Of This Day!</p>
                            <div className={'flex flex-wrap gap-4'}>
                                <DaysTypeButtonComponent type='lazy' />
                                <DaysTypeButtonComponent type='productive' />
                                <DaysTypeButtonComponent type='learned' />
                                <DaysTypeButtonComponent type='vacation' />
                                <DaysTypeButtonComponent type='family' />
                            </div>
                        </div>
                    </div>
                    <div className={'w-[300px] h-[125px] bg-indigo-600 rounded-lg'}></div>
                </article>
            </a>
        </li>
    );
}