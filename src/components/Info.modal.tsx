import React from 'react'
import { useAppDispatch, useAppSelector } from 'utils/hooks'
import { unsetInfoModal, selectInfoValue } from './info.modal.slice'
import styled from 'styled-components'

const Div = styled.div`

article {
    display        : flex;
    align-items    : center;
    justify-content: space-between;
    flex-flow      : column;
    min-height     : 105px;
    margin-top     : 30vh;
    padding        : 20px 20px 10px;
    background     : #FEDEFF;
    text-align     : center;

}

h6 {
    font-size    : 18px;
    line-height  : 21px;
    margin-bottom: 10px;
}`

const InfoModal = () => {
    const infoText = useAppSelector(selectInfoValue),
        infoClass = useAppSelector(state => state.infoModal.style),
        dispatch = useAppDispatch()
    return (
        <Div className={'modal info ' + infoClass} onClick={e => { if (e.target === e.currentTarget) dispatch(unsetInfoModal()) }}>
            <article>
                <h6>{infoText}</h6>
                <p className="goBack" onClick={() => dispatch(unsetInfoModal())}>← Go back</p>
            </article>
        </Div>
    )
}

export default InfoModal