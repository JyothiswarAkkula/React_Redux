import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Redux/Counterslice'
import userReducer from './Redux/userslice'
import commentReducer from './Redux/commentsslice'


export const store = configureStore({
    reducer: {
         counter: counterReducer,
         newsubsciber: userReducer,
         adddcomments: commentReducer,  
          }
})


