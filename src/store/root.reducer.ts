import { combineReducers } from '@reduxjs/toolkit'
import infoModalSlice from 'components/info.modal.slice'

export const rootReducer = combineReducers({
  infoModal: infoModalSlice,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
