// Codes By Mahdi Tasha
// Importing Part
// Defining Types Of Props
interface imgInterface {img: string;}

// Exporting functional component as default
export default function BlogPageImageComponent({img}:imgInterface):JSX.Element{
    // Returning JSX
    return(
        <div className={'relative overflow-hidden rounded-xl mb-10'}>
            <div className={'absolute w-full h-[250px] bg-indigo-600 mix-blend-color opacity-[80%]'}></div>
            <img className={'w-full object-cover h-[250px]'} src={img} alt="Image Of Blog"/>
        </div>
    );
}