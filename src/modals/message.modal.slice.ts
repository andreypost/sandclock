import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'reducer'

export interface MessageModalState {
  value: string
  active: string
}

export const messageModalSlice = createSlice({
  name: 'messageModal',
  initialState: { value: '', active: '' } as MessageModalState,
  reducers: {
    messageRetrieveModal: state => {
      state.active = 'messageActive'
      state.value = 'Sorry, but it is not possible to retrieve data at this time. Try later!'
    },
    messageTypeModal: state => {
      state.active = 'messageActive'
      state.value = 'Please choose the type before proceeding.'
    },
    messageFieldModal: state => {
      state.active = 'messageActive'
      state.value = 'We need you to fill in an additional field of your choice to ensure your donation will go to the right place.'
    },
    messageSuccsessModal: state => {
      state.active = 'messageActive'
      state.value = 'You have successfully subscribed!.'
    },
    messageErrorModal: state => {
      state.active = 'messageActive'
      state.value = 'Sorry, but it is not possible to subscribe right now. Try later!'
    },
    messageExceedModal: state => {
      state.active = 'messageActive'
      state.value = 'Your total allocation cannot exceed 100%. Please review your allocation(s)!'
    },
    messageSentModal: state => {
      state.active = 'messageActive'
      state.value = 'Your allocation(s) data has been sent!'
    },
    unsetMessageModal: state => {
      state.value = ''
      state.active = ''
    },
  },
})

export const {
  messageRetrieveModal,
  messageTypeModal,
  messageFieldModal,
  messageSuccsessModal,
  messageErrorModal,
  messageExceedModal,
  messageSentModal,
  unsetMessageModal,
} = messageModalSlice.actions

export const selectMessageActive = (state: RootState) => state.messageModal.active
export const selectMessageValue = (state: RootState) => state.messageModal.value

export default messageModalSlice.reducer
