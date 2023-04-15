// Codes By Mahdi Tasha
// Exporting functional component as default
export default function ArticleItemImageComponent():JSX.Element{
    // variables
    const randomNumber = Math.round(Math.random() * 7);
    let imgElementSRC;
    let imgElementALT;

    // simple condition to set 'src' of image and its 'alt' attribute
    switch (randomNumber) {
        case 1: {
            imgElementSRC = 'https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/Articles/Twice+a+Day/man+working+out-carousel.jpg';
            imgElementALT = 'Picture Of A Man Working Out';
            break;
        } case 2: {
            imgElementSRC = 'https://img.freepik.com/free-photo/front-view-man-meditating-outdoors-yoga-mat_23-2148988394.jpg';
            imgElementALT = 'Picture Of A Man Meditating';
            break;
        } case 3: {
            imgElementSRC = 'https://imageio.forbes.com/specials-images/imageserve/61eed13455280e85209371d7/Young-man-reading-a-book-at-home/960x0.jpg?format=jpg&width=960';
            imgElementALT = 'Picture Of A Man Reading A Book';
            break;
        } case 4: {
            imgElementSRC = 'https://www.timeshighereducation.com/sites/default/files/istock_000016588219_large_0.jpg';
            imgElementALT = 'Picture Of Two Mans Studying';
            break;
        } case 5: {
            imgElementSRC = 'https://bsmedia.business-standard.com/_media/bs/img/article/2020-11/06/full/1604653132-6606.jpg';
            imgElementALT = 'Picture Of A Man Coding';
            break;
        } case 6: {
            imgElementSRC = 'https://img.freepik.com/free-photo/man-being-surprised-with-gift-family-gathering_23-2149043501.jpg';
            imgElementALT = 'Picture Of A Man With His Family';
            break;
        }
    }

    // Returning JSX
    return(
        <div className={'relative md:w-[300px] w-full md:h-[160px] h-[250px] rounded-lg overflow-hidden z-0 border border-black/30'}>
            <div className={'top-0 left-0 w-full h-full absolute bg-indigo-600 mix-blend-color opacity-[80%]'}></div>
            <img src={imgElementSRC} alt={imgElementALT} className={'md:w-[300px] w-full md:h-[160px] h-[250px] object-cover'}/>
        </div>
    );
}