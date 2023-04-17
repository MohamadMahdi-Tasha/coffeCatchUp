// Codes By Mahdi Tasha
// Importing Part
import {configureStore, createSlice, Slice} from "@reduxjs/toolkit";

// Creating Slice
const appSlice:Slice = createSlice({
    name: 'app',
    initialState: {
        blogs: [
            {
                date: '2023/4/15',
                img: 'https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/Articles/Twice+a+Day/man+working+out-carousel.jpg',
                content: 'Hi. This is this websites first report. and im glad to write it here but it feels a bit awkward that im writing this type of thing in my code editor (webstorm 2023.1). it should be written in the app but thats going to happen in future 😅. is the pleasure to introduce my self to you. ahh my name is mahdi tasha. im junior front end developer from iran (a country in middle-east in case you dont know about it) but my goal is to go from it forever. some of you who read this will be saying that "no you cant live when your far from homeland" but trust me living in iran is harder than you might think. anyway im 16 right now. i will be turning 17 at september 🎂. and the point of creating this whole app is to write my report for my self to check it every day.ok now for the report : today ive been working on this app you see right here but let me give you step by step when i woke up. first ive done my bathroom things of course then i worked up for 20 minutes. that wa painful excersize for abdomen because iv gain little fat recently and it just annoys me. after the workout ive done my a 5 minute meditation and think about that how world is beautiful and im in peace and relaxed for a bit. then i read the book called "15 invaluable laws of growth" by "John.C Maxwell". That realy good book i would recommend you to read it. after that i went to school and wasted 5 hours of my precious life :( but thats okay it will end soon (2 years from now LOL). after school i came home, had delicious lunch from a week ago 😂. after i had my tea with relaxing piano in nature which is playing write now. then i worked on this project you are seeing right now and at last i wrote the blog you are reading. after this i will play music instrument, be with my family, brush my teeth, pray and sleep. and yeah thats it. thats all ive done today (and will done because its 8:45 when im writing this) for my purpose which i told you earlier what it is. and i want to thank you for reading this blog. i hope we all reach our goals very very soon and it will happen. till tomorrow and another report, bye bye',
                types: ['productive', 'learned', 'family']
            },
            {
                date: '2023/4/16',
                img: 'https://img.freepik.com/free-photo/front-view-man-meditating-outdoors-yoga-mat_23-2148988394.jpg',
                content: 'Hi. this is another blog by me :)). soo lets get it quilckly. ive set alarm for 6 in morning but i didnt woke up at the time but hopefully this wast no problem becuase at the time i was going to excersize but today i had P.E. classes a school so ididnt have to worry much about it. i woke up at 6:24 in morning and done my bathrom things and got ready to meditate. after that i meditated for 5 minutes and then i read 10 pages from book that i mentioned in last blog named "15 invaluable laws of growth".then i wen to school and had lunch a school. had a lil bit of discussion with my classmate and went back to home at 2 in afternoon. i again done my bathrooom things and sit and played some tanbour. if you dont know im tanbour(persian music instrument) player. its good to mention that im having sore thorat and it hurtss even now im not speaking :////. anyways it will be gone in few days. i done some medication for that and then i had my tea and watched some youtube (watched some coffe vlogs. they are realy good to me. idk). then i began my journy to learn pwa (progressive web app) for my work. i dindnt llearn much about it but i got some information about it. then i just played some tanbour again and had dinner with my family. right now its 9:42 in night that im wrinting this. after this i will eat some medications again and brush my teeth, pray to god and sleep for tommrow. and yeah thats it about today. hope you enjoy :)). i will reach my purposes/goals, i promis my self that',
                types: ['productive', 'learned', 'family']
            },
            {
                date: '2023/4/17',
                img: 'https://bsmedia.business-standard.com/_media/bs/img/article/2020-11/06/full/1604653132-6606.jpg',
                content: 'Hi. this is another blog by me :)). soo lets get it quilckly. ive woke up at 6 in morning. done my excersizes. done my 5 minutes of meditation and read 10 pages of book called "15 invaluable laws of growth". then i went to school. at park i waited for others unlike the other days 😅. i went to school and wasted 6 hours of my life in there :(. i came back to park and saw iman with his friend. we been there from 12 oclock from 2:30 afternoon. then i got home eat sandwich that i didnt pick for school and made some nooodalite and eat that too. then i played some tanbour and study some coding skills about pwa features like geolocation, notifications, ... . then i watcher "spirited away" animeh with my family and had dinner with them. right now its 9:58. after this i will eat my medication, brush my teeth, prya to god and sleep for tommoroow. and yeah thats it. hope u enjoy it. as always peace ♥',
                types: ['productive', 'learned', 'family']
            }
        ]
    },
    // TODO:STILL HAS ISSUES
    reducers: {
        createBlog(state, action):void {
            const payload = action.payload;

            state.blogs.push({
                date: payload.date,
                img: payload.img,
                content: payload.current,
                types: payload.types
            })
        },
    }
})

// Exporting Actions To Use
export const actionsOfAppSlice = appSlice.actions;

// Configuring Store And Exporting It As Default
const appState = configureStore({reducer: appSlice.reducer})
export default appState;
