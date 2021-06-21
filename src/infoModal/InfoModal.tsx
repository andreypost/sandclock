import React from 'react'
import './info_styles.scss'
import { useAppDispatch, useAppSelector } from '../utils/hooks'
import { unsetInfoModal } from './index'

const Counter = () => {
    const infoText = useAppSelector(state => state.infoModal.value),
        infoClass = useAppSelector(state => state.infoModal.style),
        dispatch = useAppDispatch()
    return (
        <div className={'modal info ' + infoClass} onClick={e => { if (e.target === e.currentTarget) dispatch(unsetInfoModal()) }}>
            <article>
                <h6>{infoText}</h6>
                <p className="goBack" onClick={() => dispatch(unsetInfoModal())}>← Go back</p>
            </article>
        </div>
    )
}

export default Counter