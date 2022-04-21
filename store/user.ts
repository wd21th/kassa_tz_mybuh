import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import AsyncStorage from '@react-native-async-storage/async-storage';


const user_slice = createSlice({
  name: "user",
  initialState: {
    user: "null"
  },
  reducers: {
    set_user(state, action: PayloadAction<string>) {

async function a_func(){
await AsyncStorage.setItem("@user", action.payload)
     
}
a_func()
// console.log(await AsyncStorage.getItem("user") )
  


console.log("action")
      console.log(action)


      state.user = action.payload

    }


    
  }
})

export const { set_user } = user_slice.actions
export default user_slice.reducer