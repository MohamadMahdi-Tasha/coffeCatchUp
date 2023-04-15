// Codes By Mahdi Tasha
// Importing Part
import {Link} from "react-router-dom";
import MyProfileInArticleComponent from "./myProfileInArticleComponent";
import DaysTypeOfArticleComponent from "./daysTypeOfArticleComponent";
import ArticleItemImageComponent from './articleItemImageComponent';

// Defining type of props
interface articleItemPropsType {
    img: string;
    date: string;
    types: string[];
}

// Exporting functional component as default
export default function ArticleItemComponent({img, date, types}: articleItemPropsType){
    // Variables
    const selectedDate:Date = new Date(date);
    const monthOfSelectedDate:number = selectedDate.getMonth();
    const yearOfSelectedDate:number = selectedDate.getFullYear();
    const dayOfSelectedDate:number = selectedDate.getDate();
    let season;

    // A Condition To Find Season
    switch (monthOfSelectedDate) {
        case 11 || 12 || 1: season = 'Spring';break;
        case 2 || 3 || 4: season = 'Summer';break;
        case 5 || 6 || 7: season = 'Autumn';break;
        case 8 || 9 || 10: season = 'Winter';break;
    }

    // Returning JSX
    return(
        <li className={'home-page__articles-item'}>
            <Link className={'block home-page__articles-link border-black/30 dark:border-white/30'} to={`/blogs/${btoa(date)}`}>
                <article className={'py-5 flex md:flex-row flex-col-reverse md:items-center items-start gap-5 justify-between'}>
                    <div>
                        <MyProfileInArticleComponent date={date}/>
                        <div>
                            <h1 className={'text-lg text-black dark:text-white font-semibold mb-2'}>
                                {dayOfSelectedDate} Day Of {monthOfSelectedDate} Month In {season} Of {yearOfSelectedDate}
                            </h1>
                            <p className={'font-light text-black/30 dark:text-white/30 mb-4'}>Click To See Report Of This Day!</p>
                            <div className={'flex flex-wrap md:gap-4 gap-2'}>
                                {
                                    types.map((type:string, index:number) =>
                                        <DaysTypeOfArticleComponent key={index} type={type} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <ArticleItemImageComponent img={img} />
                </article>
            </Link>
        </li>
    );
}