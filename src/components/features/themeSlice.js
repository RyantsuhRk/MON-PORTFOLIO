import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isDark:false
}

const themeSlice=createSlice({
    name:'theme',
    initialState,
    reducers:{
      toggleTheme:(state,action)=>{
        state.isDark=!action.payload
      }
    }
})

export const {toggleTheme}=themeSlice.actions

export default themeSlice.reducer