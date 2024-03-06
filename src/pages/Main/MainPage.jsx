import React from 'react'
import styled, { css } from 'styled-components'
import { Link, Outlet, useParams } from 'react-router-dom'
import { Col, Row, Wrap, Title, Header1, Description } from '../../components/atomic'
import slogan from '../../assets/mainpage_1.jpg'
import instagram from '../../assets/mainpage_instagram.jpg'
import youtube from '../../assets/mainpage_youtube.jpg'

// 정말 죄송하지만 styled component는 쓰지 않고 개발하겠습니다,,,

const mainCss = {
  container : {
    display: 'flex',
    justifyContent: 'center',
    padding: '10rem'
  },
  slogansns : {
    display: 'flex',
    gap: '2.5rem'
  },
  slogan: {
    flexGrow: '2'
  },
  sns: {
    flexGrow: '1',
    display: 'flex',
    flexDirection: 'Column',
    gap: '2.5rem'
  },
  img: {
    borderRadius: '2rem'
  },
  sloganMent: {
    position: 'absolute',
    color: 'white',
    fontSize: '4rem',
    fontWeight: '700',
    bottom: '6rem',
    left: '8rem'
  }
}

export default function MainPage() {
  return (
    <div style={mainCss.container}>
      <div style={mainCss.slogansns}>
        <div style={mainCss.slogan}>
          <div style={mainCss.sloganMent}>우리의 상상이<br></br>세상을 바꿀 수 있도록.</div>
          <img src={slogan} style={mainCss.img} alt="No image" />
        </div>
        <div style={mainCss.sns}>
          <img src={youtube} style={mainCss.img} alt="No image" />
          <img src={instagram} style={mainCss.img} alt="No image" />
        </div>
      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
    </div>
  )
}