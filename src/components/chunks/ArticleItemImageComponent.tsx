// Codes By Mahdi Tasha
// Defining Type Of Props
interface imgInterface {img: string;}

// Exporting functional component as default
export default function ArticleItemImageComponent({img}:imgInterface):JSX.Element{
    // Returning JSX
    return(
        <div className={'relative md:w-[300px] w-full md:h-[160px] h-[250px] rounded-lg overflow-hidden z-0 border border-black/30'}>
            <div className={'top-0 left-0 w-full h-full absolute bg-indigo-600 mix-blend-color opacity-[80%]'}></div>
            <img src={img} alt={'Image Of Article'} className={'md:w-[300px] w-full md:h-[160px] h-[250px] object-cover'}/>
        </div>
    );
}