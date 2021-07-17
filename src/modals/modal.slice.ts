import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/root.reducer'

export interface ModalState {
  active: string
  title: string | undefined
  type: string | undefined
  mission: string | undefined
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {active: '', title: '', type: '', mission: '' } as ModalState,
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
  },
})

export const {
  ownFormStartModal,
  ownFormEndModal,
  missionTypeModal,
  unsetModal,
} = modalSlice.actions

export const selectModalActive = (state: RootState) => state.modal.active
export const selectModalTitle = (state: RootState) => state.modal.title
export const selectModalType = (state: RootState) => state.modal.type
export const selectModalMission = (state: RootState) => state.modal.mission

export default modalSlice.reducer