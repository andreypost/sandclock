import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/root.reducer'

export interface ModalState {
  active: string
  title: string | undefined
  type: string | undefined
  mission: string | undefined
  messageActive: string
  messageValue: string
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {active: '', title: '', type: '', mission: '', messageActive: '', messageValue: '' } as ModalState,
  reducers: {
    ownFormStartModal: state => {
      state.active = 'ownStartActive'
    },
    ownFormEndModal: state => {
      state.active = 'ownEndActive'
    },
    missionTypeModal: (
      state,
      { payload: { title, type, mission } }: PayloadAction<{ title: string | undefined; type: string | undefined, mission: string | undefined }>
    ) => {
      state.active = 'missionActive'
      state.title = title
      state.type = type
      state.mission = mission
    },
    unsetModal: state => {
      state.active = ''
      state.title = ''
      state.type = ''
      state.mission = ''
    },
    messageRetrieveModal: state => {
      state.messageActive = 'messageActive'
      state.messageValue = 'Sorry, but it is not possible to retrieve data at this time. Try later!'
    },
    messageTypeModal: state => {
      state.messageActive = 'messageActive'
      state.messageValue = 'Please choose the type before proceeding.'
    },
    messageFieldModal: state => {
      state.messageActive = 'messageActive'
      state.messageValue = 'We need you to fill in an additional field of your choice to ensure your donation will go to the right place.'
    },
    messageSuccsessModal: state => {
      state.messageActive = 'messageActive'
      state.messageValue = 'You have successfully subscribed!.'
    },
    messageErrorModal: state => {
      state.messageActive = 'messageActive'
      state.messageValue = 'Sorry, but it is not possible to subscribe right now. Try later!'
    },
    messageExceedModal: state => {
      state.messageActive = 'messageActive'
      state.messageValue = 'Your total allocation cannot exceed 100%. Please review your allocation(s)!'
    },
    messageSentModal: state => {
      state.messageActive = 'messageActive'
      state.messageValue = 'Your allocation(s) data has been sent!'
    },
    unsetMessageModal: state => {
      state.messageActive = ''
      state.messageValue = ''
    },
  },
})

export const {
  ownFormStartModal,
  ownFormEndModal,
  missionTypeModal,
  unsetModal,
  messageRetrieveModal,
  messageTypeModal,
  messageFieldModal,
  messageSuccsessModal,
  messageErrorModal,
  messageExceedModal,
  messageSentModal,
  unsetMessageModal,
} = modalSlice.actions

export const selectModalActive = (state: RootState) => state.modal.active
export const selectModalTitle = (state: RootState) => state.modal.title
export const selectModalType = (state: RootState) => state.modal.type
export const selectModalMission = (state: RootState) => state.modal.mission
export const selectMessageModalActive = (state: RootState) => state.modal.messageActive
export const selectMessageModalValue = (state: RootState) => state.modal.messageValue

export default modalSlice.reducer