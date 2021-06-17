import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { infoModalSlice } from './infoModal'

// const reducer = combineReducers({
//     counter: counterSlice.reducer,
// })

export const store = configureStore({
    reducer: {
        infoModal: infoModalSlice.reducer,
    }
    // reducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// export type AppThunk<ReturnType = void> = ThunkAction<
// ReturnType,
// RootState,
// unknown,
// Action<string>
// >