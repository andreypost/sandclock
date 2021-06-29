import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'reducer'

export interface InfoModalState {
  value: string;
  style: string;
}
  
const initialState: InfoModalState = {
  value: '',
  style: '',
}
  
export const infoModalSlice = createSlice({
  name: 'infoModal',
  initialState,
  reducers: {
    // increment: state => {
    //   state.value += 1
    // },
    // decrement: state => {
    //   state.value -= 1
    // },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
      // state.value += action.payload
    // },
    unsetInfoModal: state => {
      state.value = ''
      state.style = ''
    },
    retrieveInfoModal: state => {
      state.value = 'Sorry, but it is not possible to retrieve data at this time. Try later!'
      state.style = 'active'
    },
    typeInfoModal: state => {
      state.value = 'Please choose the type before proceeding.'
      state.style = 'active'
    },
    fieldInfoModal: state => {
      state.value = 'We need you to fill in an additional field of your choice to ensure your donation will go to the right place.'
      state.style = 'active'
    },
    succsessInfoModal: state => {
      state.value = 'You have successfully subscribed!.'
      state.style = 'active'
    },
    errorInfoModal: state => {
      state.value = 'Sorry, but it is not possible to subscribe right now. Try later!'
      state.style = 'active'
    },
    exceedInfoModal: state => {
      state.value = 'Your total allocation cannot exceed 100%. Please review your allocation(s)!'
      state.style = 'active'
    },
    sentInfoModal: state => {
      state.value = 'Your allocation(s) data has been sent!'
      state.style = 'active'
    },
  },
})
  
export const { unsetInfoModal, retrieveInfoModal, typeInfoModal, fieldInfoModal, succsessInfoModal, errorInfoModal, exceedInfoModal, sentInfoModal } = infoModalSlice.actions
  
// Other code such as selectors can use the imported `RootState` type
export const selectInfoValue = (state: RootState) => state.infoModal.value

export default infoModalSlice.reducer