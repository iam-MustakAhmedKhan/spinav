import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import toogleSlice from "./toogleSlice";


const store = configureStore({
    reducer: {
        search: searchSlice,
        toogle:toogleSlice
    }
});

export default store