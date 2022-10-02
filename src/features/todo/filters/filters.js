import { createSlice } from "@reduxjs/toolkit"

const initialState={
    colors:[],
    tag:'all'
}
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
      
      addColor(state, action) {
        state.colors.includes(action.payload)?
        state.colors=state.colors.filter(color=>color!==action.payload)
        :
        state.colors.push(action.payload)    
      },
     
      addTag(state, action) {
       
        state.tag=action.payload
      },
      
    },
  })
export const { addColor, addTag } = filterSlice.actions
export default filterSlice.reducer