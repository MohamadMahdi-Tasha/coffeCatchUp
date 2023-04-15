// Codes By Mahdi Tasha
// Defining Type Of Props
interface childrenInterface {children?: React.ReactNode;}

// Exporting functional component as default
export default function ArticleItemsHolderComponent({children}:childrenInterface):JSX.Element{
    // Conditional Rendering
    if (children !== undefined) {return <ul className={'home-page__articles-list'}>{children}</ul>}
    else {
        return(
            <>
                <h1 className={'text-center text-4xl font-bold mb-3'}>SORRY!</h1>
                <h6 className={'text-center text-xl font-light text-black/40'}>But There Is Nothing To Show !</h6>
            </>
        )
    }
}