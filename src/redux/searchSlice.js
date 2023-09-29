import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValue:'',
}

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        seach: (state,action) => {
            state.searchValue=action.payload
        }
    }
});

export default searchSlice.reducer;
export const {seach} = searchSlice.actions