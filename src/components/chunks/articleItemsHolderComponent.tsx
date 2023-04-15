// Codes By Mahdi Tasha
// Importing Part
import { useSelector } from "react-redux";
import ArticleItemComponent from "./articleItemComponent";

// Exporting functional component as default
export default function ArticleItemsHolderComponent():JSX.Element{
    // Getting Redux State
    const store:any = useSelector(state => state);
    const blogs:object[] = store.blogs;

    // Conditional Rendering
    if (blogs[0] === undefined) {
        return(
            <>
                <h1 className={'text-center text-4xl font-bold text-black dark:text-white mb-3'}>SORRY!</h1>
                <h6 className={'text-center text-xl font-light dark:text-white/40 text-black/40'}>But There Is Nothing To Show !</h6>
            </>
        )
    } else {
        return (
            <ul className={'home-page__articles-list'}>
                {blogs.map((blog:any, index:number) => <ArticleItemComponent key={index} img={blog.img} date={blog.date} types={blog.types}/>)}
            </ul>
        )
    }
}