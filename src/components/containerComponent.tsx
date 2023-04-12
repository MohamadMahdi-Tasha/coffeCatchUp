// Codes By Mahdi Tasha
// Defining type of props
interface typeInterface {
    children: React.ReactNode;
    className?: string;
}

// Exporting functional component as default
export default function ContainerComponent({children,className}:typeInterface){
    // Returning JSX
    return(
        <div className={
            (className === undefined)
                ? 'max-w-[1200px] mx-auto'
                : `max-w-[1200px] mx-auto ${className}`
        }>{children}</div>
    );
}