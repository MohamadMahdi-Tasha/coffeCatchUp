// Codes By Mahdi Tasha
// Importing Part
import { useParams } from "react-router-dom";
import ContainerComponent from "../components/containerComponent";
import SectionComponent from "../components/sectionComponent";
import DaysTypeButtonWithoutSelectingComponent from "../components/chunks/daysTypeButtonWithoutSelectingComponent";
import MyProfileInArticleComponent from "../components/chunks/myProfileInArticleComponent";
import BlogParagraphComponent from "../components/chunks/blogParagraphComponent";
import {useSelector} from "react-redux";
import BlogPageImageComponent from './../components/chunks/blogPageImageComponent';

// Exporting functional component as default
export default function BlogPage():JSX.Element{
    // Using 'useParams' Hook To Get Id Of Product From URL
    const { encodedDate } = useParams();

    // getting encoded value of url
    const decodedDate= atob(String(encodedDate));

    // Getting Redux State
    const store:any = useSelector(state => state);
    const blogs:object[] = store.blogs;
    // @ts-ignore
    const blogToGet:any = blogs.find(obj => obj.date === decodedDate)

    // variables
    const selectedDate:Date = new Date(blogToGet.date);
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
                    {blogToGet.types.map((item:any, index:number) => <DaysTypeButtonWithoutSelectingComponent key={index} type={item} />)}
                </div>
                <h1 className={'text-4xl font-black text-black dark:text-white mb-7'}>{dayOfSelectedDate} Day Of {monthOfSelectedDate} Month In {season} Of {yearOfSelectedDate}</h1>
                <MyProfileInArticleComponent date={blogToGet.date}/>
                <BlogPageImageComponent img={blogToGet.img} />
            </SectionComponent>
            <SectionComponent><BlogParagraphComponent firstLetterBig>{blogToGet.content}</BlogParagraphComponent></SectionComponent>
        </ContainerComponent>
    );
}