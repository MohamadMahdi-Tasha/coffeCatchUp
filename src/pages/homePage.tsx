// Codes By Mahdi Tasha
// Importing Part
import ContainerComponent from "../components/containerComponent";

// Exporting functional component as default
export default function HomePage():JSX.Element{
    // Returning JSX
    return(
        <ContainerComponent className={'mt-20 p-3'}>
            <div>
                <h6>My Days:</h6>
                <button>Lazy</button>
                <button>Productive</button>
                <button>To Learn From It</button>
            </div>
            <div>
                <div><h6>Articles</h6></div>
                <a href="#">
                    <article>
                        <div>
                            <img src="" alt=""/>
                            <div>
                                <div>
                                    <h6>Mahdi Tasha</h6>
                                    <h6>.</h6>
                                    <h6><time dateTime={'2023/12/6'}>Apr 12 2023</time></h6>
                                </div>
                                <h6>Junior Front End Dev</h6>
                            </div>
                        </div>
                        <div>
                            <h1>10th Day Of Summer Of 2023</h1>
                            <p>Click To See Report Of This Day!</p>
                            <div>
                                <button>Lazy</button>
                                <button>Productive</button>
                                <button>To Learn From It</button>
                            </div>
                        </div>
                        <img src="" alt=""/>
                    </article>
                </a>
            </div>
        </ContainerComponent>
    );
}