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