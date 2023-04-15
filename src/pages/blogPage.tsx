// Codes By Mahdi Tasha
// Importing Part
import { useParams } from "react-router-dom";
import ContainerComponent from "../components/containerComponent";
import SectionComponent from "../components/sectionComponent";
import DaysTypeButtonWithoutSelectingComponent from "../components/chunks/daysTypeButtonWithoutSelectingComponent";
import MyProfileInArticleComponent from "../components/chunks/myProfileInArticleComponent";
import BlogParagraphComponent from "../components/chunks/blogParagraphComponent";

// Exporting functional component as default
export default function BlogPage():JSX.Element{
    // Using 'useParams' Hook To Get Id Of Product From URL
    const { encodedDate } = useParams();

    // variables
    const decodedDate= atob(String(encodedDate));
    const selectedDate:Date = new Date(decodedDate);
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
        <ContainerComponent className={'mt-20 p-3'}>
            <SectionComponent>
                <div className={'flex flex-wrap gap-3 mb-3'}>
                    <DaysTypeButtonWithoutSelectingComponent type={'lazy'}/>
                    <DaysTypeButtonWithoutSelectingComponent type={'learned'}/>
                </div>
                <h1 className={'text-4xl font-black mb-5'}>{dayOfSelectedDate} Day Of {monthOfSelectedDate} Month In {season} Of {yearOfSelectedDate}</h1>
                <MyProfileInArticleComponent date={`${yearOfSelectedDate}/${dayOfSelectedDate}/${monthOfSelectedDate}`}/>
            </SectionComponent>
            <SectionComponent>
                <div className={'flex md:flex-row flex-col gap-3 mb-10'}>
                    <BlogParagraphComponent firstLetterBig isHalf>
                        Lorem ipsum dolor sit amet, at iriure dolorum facilisis eum, mea ea movet partem convenire. Est et ludus placerat contentiones. Et mel delenit inimicus, graeci patrioque delicatissimi vel cu. Laudem appetere vis at, antiopam mandamus no est. Ex vix facete vocent commune, erant suscipit deserunt vel ex. Ea soleat offendit senserit mea, id rebum inciderint intellegebat pri, ne cum posse eleifend.
                        <br/><br/>
                        Ad honestatis persequeris eloquentiam quo, pri esse nullam eligendi ut. Nam mucius quaeque expetenda ei. Quaeque appellantur complectitur qui in, facilis atomorum vituperatoribus has ne. Has eu minimum laboramus, vis indoctum adolescens ne. Vix eu facer augue expetenda. Natum dicit ius no, tota semper inciderint id sit.
                        <br/><br/>
                        Iriure diceret omnesque ad per. Pri posse atomorum an, exerci laudem ex vim. Omnis volumus percipit id vel. Ei velit partem noluisse usu, his id quodsi vituperata, ne iudico dolorem nam. Per an ignota epicurei ullamcorper.
                    </BlogParagraphComponent>
                    <div className={'md:w-[50%] w-full h-[250px] bg-indigo-600'}></div>
                </div>
                <BlogParagraphComponent>
                    Per sumo sententiae scripserit ut, sint epicuri comprehensam et mea. Option legimus sit ex, in quo mazim fastidii legendos. Amet sumo latine vis ex. Mei tale voluptua in, clita nonumy mea ut, sea ex sint voluptua. Vim at qualisque reprimique, qui homero dolores ad, at tation munere complectitur nec. Sea ut tantas impedit.
                    <br/><br/>
                    Vel tale minim an, quem iuvaret no vel. Labitur philosophia te mei. Eos solum novum albucius ut. Ei option reprimique consequuntur per. Dicta quando prompta eu has, tollit putant malorum his et. Ei pri justo omittam, ne quo modus vocibus accusamus, eu sit vocent iriure conceptam. Nec nibh alienum ei, at nec omnis homero legendos.
                </BlogParagraphComponent>
            </SectionComponent>
        </ContainerComponent>
    );
}