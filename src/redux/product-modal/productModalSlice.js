import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: null
}

export const productModalSlide = createSlice({
    name: 'productModal',
    initialState,
    reducers: {
        set: (state, action) => {
            state.value = action.payload
        },
        remove: (state) => {
            state.value = null
        }
    }
})

export const {set, remove} = productModalSlide.actions;

export default productModalSlide.reducer;