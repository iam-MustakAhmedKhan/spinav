import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggled: false,
    loading: true,
};

const toogledSlice = createSlice({
    name: 'tooggledSlice',
    initialState,
    reducers: {
        isToogled: (state,action) => {
            state.toggled=action.payload
        },
        isloading: (state,action) => {
            state.loading=action.payload
        },
       
    }
});

export default toogledSlice.reducer;
export const {isToogled,isloading} = toogledSlice.actions