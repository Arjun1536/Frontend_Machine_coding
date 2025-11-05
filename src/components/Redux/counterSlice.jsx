import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value :1
    },
    reducers:{
        increment:(state)=>{state.value+=1},
        decrement:(state)=>{state.value-=1},
        reset:(state)=>{state.value = 0}
    }

})
export default counterSlice.reducer  // check this reducer carefully

export const{increment,decrement,reset} = counterSlice.actions