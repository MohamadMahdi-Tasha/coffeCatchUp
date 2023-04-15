// Codes By Mahdi Tasha
// Importing Part
import {configureStore, createSlice, Slice} from "@reduxjs/toolkit";

// Creating Slice
const appSlice:Slice = createSlice({
    name: 'app',
    initialState: {
        blogs: [
            {
                date: '2023/6/11',
                img: 'https://bsmedia.business-standard.com/_media/bs/img/article/2020-11/06/full/1604653132-6606.jpg',
                content: `Hi! <br> To Day`,
                types: ['productive', 'learned']
            },
            {
                date: '2023/2/3',
                img: 'https://bsmedia.business-standard.com/_media/bs/img/article/2020-11/06/full/1604653132-6606.jpg',
                content: `TODDDS`,
                types: ['lazy', 'family']
            }
        ]
    },
    reducers: {

    }
})

// Exporting Actions To Use
export const actionsOfAppSlice = appSlice.actions;

// Configuring Store And Exporting It As Default
const appState = configureStore({reducer: appSlice.reducer})
export default appState;