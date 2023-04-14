// Codes By Mahdi Tasha
// Creating Type Of Props
interface childrenInterface {children: React.ReactNode;}

// Exporting functional component as default
export default function SectionComponent({children}:childrenInterface):JSX.Element{
    // Returning JSX
    return(
        <section>
            <main>{children}</main>
        </section>
    );
}