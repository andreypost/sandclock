import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import type { RootState } from 'reducer'
import type { AppDispatch } from 'store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
