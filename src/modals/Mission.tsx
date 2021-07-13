import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from 'utils/hooks'
import { selectModalTitle, selectModalActive, selectModalType, selectModalMission, unsetModal } from './modal.slice'
import ogr_info_dog from 'svg/ogr_info_dog.svg'

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
  transition      : opacity 0.4s, z-index 0.1s 0.4s;

  >div {
    transform : scale(0);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: column;
    width        : 90%;
    min-height   : 600px;
    padding      : 48px 48px 16px;
    margin       : 15vh auto 0;
    border-radius: 30px;
    box-shadow   : 0px 16px 16px rgba(0, 0, 0, 0.25);
    background   : #fefaff;
    transition   : transform 0.6s;

    .orginfo_header {
      margin-bottom: 24px;
      text-align   : center;

      img {
        width : 44px;
        height: 44px;
      }

      h3 {
        font-family: 'Merriweather', serif;        
        font-size  : 32px;
      }
    }

    .orginfo_article {
      display           : -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 12;
      overflow          : hidden;
      align-self        : flex-start;

      h4,
      p {
        font-size  : 18px;
        line-height: 28px;
      }

      p {
        margin-bottom: 44px;
      }
    }

    @media (min-width: 992px) {
      width: 601px;
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

  &.missionActive {
    z-index   : 999;
    opacity   : 1;
    transition: z-index 0.1s, opacity 0.4s 0.1s;

    &>div {
      transform: scale(1);
    }
  }`

const Mission = () => {
  const missionState = useAppSelector(selectModalActive),
    missionTitle = useAppSelector(selectModalTitle),
    missionType = useAppSelector(selectModalType),
    missionMission = useAppSelector(selectModalMission),
    dispatch = useAppDispatch()

  useEffect(() => {
    const checkKeyDown = (e: { key: string }) => {
      if (e.key === 'Escape') dispatch(unsetModal())
    }
    document.addEventListener('keydown', (e) => checkKeyDown(e))
    return document.removeEventListener('keydown', checkKeyDown)
  }, [dispatch])
  return (
    <Div className={missionState} onClick={(e) => { if (e.target === e.currentTarget) dispatch(unsetModal()) }}>
      <div>
        <div className="orginfo_header">
          <img src={ogr_info_dog} alt="" />
          <h3>{missionTitle}</h3>
        </div>
        <article className="orginfo_article">
          <h4>Type</h4>
          <p>{missionType}</p>
          <h4>Mission</h4>
          <p>{missionMission}</p>
        </article>
        <p className="goBack" onClick={() => dispatch(unsetModal())}>
          ← Go back
        </p>
      </div>
    </Div >
  )
}

export default Mission