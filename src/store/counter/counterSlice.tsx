import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CounterState{
    count:number;
}

const initialState:CounterState = {
    count:31
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addOne(state){
      state.count++;
    },
    substractOne(state){
      if(state.count === 0) return;
      state.count--;
    },
    resetCounter(state,action:PayloadAction<number>){
      if(action.payload < 0) action.payload=0;
      state.count=action.payload;
    }
  }
});

export const {addOne,substractOne,resetCounter} = counterSlice.actions

export default counterSlice.reducer