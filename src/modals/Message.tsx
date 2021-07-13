import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'utils/hooks'
import { unsetMessageModal, selectMessageValue } from './message.modal.slice'
import styled from 'styled-components'

const Div = styled.div`

  opacity         : 0;
  position        : fixed;
  z-index         : -99;
  left            : 0;
  top             : 0;
  width           : 100%;
  height          : 200%;
  overflow        : auto;
  background-color: rgba(0, 0, 0, 0.2);
  transition      : opacity .4s, z-index .1s .4s;

  article {
    transform    : scale(0);
    box-sizing   : border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: column;
    width        : 90%;
    min-height: 105px;
    margin       : 30vh auto 0;
    padding: 20px 20px 10px;
    border-radius: 30px;
    box-shadow   : 0px 16px 16px rgba(0, 0, 0, 0.25);
    background: #fedeff;
    transition   : transform 0.6s;

    @media (min-width: 992px) {
      width: 601px;
    }
    
    h6 {
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 10px;
    }

    .goBack {
      color     : #7f7d80;
      transition: color 0.4s;
  
      @media (min-width: 992px) {
        &:hover {
          cursor: pointer;
          color : #000000;
        }
      }
    }
  }

  &.messageActive {
    z-index   : 9999;
    opacity   : 1;
    transition: z-index .1s, opacity .4s .1s;

    >article {
      transform: scale(1);
    }
  }`

const Message = () => {
  const messageValue = useAppSelector(selectMessageValue),
    messageState = useAppSelector((state) => state.messageModal.active),
    dispatch = useAppDispatch()
  useEffect(() => {
    const checkKeyDown = (e: { key: string }) => {
      if (e.key === 'Escape') dispatch(unsetMessageModal())
    }
    document.addEventListener('keydown', (e) => checkKeyDown(e))
    return document.removeEventListener('keydown', checkKeyDown)
  }, [dispatch])
  return (
    <Div className={messageState} onClick={(e) => { if (e.target === e.currentTarget) dispatch(unsetMessageModal()) }}>
      <article>
        <h6>{messageValue}</h6>
        <p className="goBack" onClick={() => dispatch(unsetMessageModal())}>← Go back</p>
      </article>
    </Div>
  )
}

export default Message
