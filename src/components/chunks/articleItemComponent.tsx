// Codes By Mahdi Tasha
// Importing Part
import MyProfileInArticleComponent from "./myProfileInArticleComponent";
import DaysTypeOfArticleComponent from "./daysTypeOfArticleComponent";

// Defining type of props
interface articleItemPropsType {
    img?: string;
    date: string;
}

// Exporting functional component as default
export default function ArticleItemComponent({img, date}: articleItemPropsType){
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
            <a className={'block home-page__articles-link border-black/30'} href="#">
                <article className={'py-5 flex md:flex-row flex-col-reverse md:items-center items-start gap-5 justify-between'}>
                    <div>
                        <MyProfileInArticleComponent date={date}/>
                        <div>
                            <h1 className={'text-lg text-black font-semibold mb-2'}>
                                {dayOfSelectedDate} Day Of {monthOfSelectedDate} Month In {season} Of {yearOfSelectedDate}
                            </h1>
                            <p className={'font-light text-black/30 mb-4'}>Click To See Report Of This Day!</p>
                            <div className={'flex flex-wrap md:gap-4 gap-2'}>
                                <DaysTypeOfArticleComponent type='learned' />
                                <DaysTypeOfArticleComponent type='productive' />
                            </div>
                        </div>
                    </div>
                    <div className={'md:w-[300px] w-full h-[125px] bg-indigo-600 rounded-lg'}></div>
                </article>
            </a>
        </li>
    );
}