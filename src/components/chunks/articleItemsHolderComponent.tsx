// Codes By Mahdi Tasha
// Importing Part
import { useSelector } from "react-redux";
import ArticleItemComponent from "./articleItemComponent";

// defining types of props
interface propsTypes {filterMethod: string;}

// Exporting functional component as default
export default function ArticleItemsHolderComponent({filterMethod}:propsTypes):JSX.Element{
    // Getting Redux State
    const store:any = useSelector(state => state);
    const blogs:object[] = store.blogs;
    let arrayToMap:any;

    // a condition to give how to render articles
    if (filterMethod === 'date') {
        // a function to reverse array
        function reverseArr(input:any) {
            const ret:object[] = new Array;

            for(let i:number = input.length-1; i >= 0; i--) { ret.push(input[i]) }
            return ret;
        }

        arrayToMap = reverseArr(blogs);
    } else if (filterMethod === 'lazy') {arrayToMap = blogs.filter((item:object | any) => item.types.includes('lazy'))}
    else if (filterMethod === 'productive') {arrayToMap = blogs.filter((item:object | any) => item.types.includes('productive'))}
    else if (filterMethod === 'learned') {arrayToMap = blogs.filter((item:object | any) => item.types.includes('learned'))}
    else if (filterMethod === 'vacation') {arrayToMap = blogs.filter((item:object | any) => item.types.includes('vacation'))}
    else if (filterMethod === 'family') {arrayToMap = blogs.filter((item:object | any) => item.types.includes('family'))}

    // returning jsx
    if (arrayToMap[0] === undefined) {
        return(
            <div>
                <h1 className={'text-center text-4xl font-bold text-black dark:text-white mb-3'}>SORRY!</h1>
                <h6 className={'text-center text-xl font-light dark:text-white/40 text-black/40'}>But There Is Nothing To Show !</h6>
            </div>
        )
    } else {
        return <ul className={'home-page__articles-list'}>{arrayToMap.map((blog: any, index: number) => <ArticleItemComponent key={index} img={blog.img} date={blog.date} types={blog.types}/>)}</ul>
    }
}