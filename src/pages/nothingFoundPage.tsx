// Codes By Mahdi Tasha
// Importing Part
import ContainerComponent from "../components/containerComponent";
import SectionComponent from "../components/sectionComponent";

// Exporting functional component as default
export default function NothingFoundPage():JSX.Element{
    return (
        <ContainerComponent className={'mt-20 p-3'}>
            <SectionComponent>
                <h1 className={'text-center text-4xl font-bold text-black dark:text-white mb-3'}>404</h1>
                <h6 className={'text-center text-xl font-light dark:text-white/40 text-black/40'}>Nothing Found!</h6>
            </SectionComponent>
        </ContainerComponent>
    );
}