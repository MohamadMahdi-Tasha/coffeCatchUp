// Codes By Mahdi Tasha
// Importing Part
import React, { useState } from "react";
import ContainerComponent from "../components/containerComponent";
import DaysTypeButtonComponent from "../components/chunks/daysTypeButtonComponent";
import ArticleItemsHolderComponent from '../components/chunks/articleItemsHolderComponent';

// Exporting functional component as default
export default function HomePage():JSX.Element{
    // Creating State for filtering stuff
    const [filterMethod, setFilterMethod] = useState('date');

    // Returning JSX
    return(
        <ContainerComponent className={'mt-20 p-3'}>
            <div className={'flex flex-wrap md:gap-4 gap-2 items-center mb-5'}>
                <h6 className={'text-black/50 dark:text-white/50 text-sm'}>My Days:</h6>
                <DaysTypeButtonComponent onClick={() => setFilterMethod('lazy')} type='lazy' />
                <DaysTypeButtonComponent onClick={() => setFilterMethod('productive')} type='productive' />
                <DaysTypeButtonComponent onClick={() => setFilterMethod('learned')} type='learned' />
                <DaysTypeButtonComponent onClick={() => setFilterMethod('vacation')} type='vacation' />
                <DaysTypeButtonComponent onClick={() => setFilterMethod('family')} type='family' />
                <DaysTypeButtonComponent onClick={() => setFilterMethod('date')} type='date' />
            </div>
            <div>
                <h3 className={'text-black dark:text-white text-lg font-bold mb-3'}>Articles</h3>
                <ArticleItemsHolderComponent filterMethod={filterMethod} />
            </div>
        </ContainerComponent>
    );
}