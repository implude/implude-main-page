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
    padding: '2rem 5rem',
    flexDirection: 'Column',
    gap: '13.75rem'
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
    bottom: '15rem',
    left: '8rem'
  },
  message: {
    background: 'var(--gray-0)',
    border: '1px solid var(--gray-100)',
    borderRadius: '5rem',
    fontSize: '6rem',
    textAlign: 'center',
    fontWeight: '600',
    padding: '8rem 0',
    margin: '0 3rem'
  },
  blue: {
    color: 'var(--brand-500)'
  }
}

function messageBar(n) {
  return {
    width: `${n / 16}rem`,
    height: '0.7rem',
    background: 'black',
    display: 'inline-block',
    position: 'relative',
    bottom: '1.5rem'
  }
}

console.log(messageBar(260))

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
      <div style={mainCss.message}>
        YOUR <span style={messageBar(244)}></span> <span style={mainCss.blue}>(IM)</span>PACT <br></br>
        <span style={mainCss.blue}>(P)</span>ASSION <span style={messageBar(96)}></span> <span style={mainCss.blue}>(L)</span>EARN <span style={messageBar(132)}></span> <br></br>
        FUT<span style={mainCss.blue}>(U)</span>RE <span style={messageBar(188)}></span> <span style={mainCss.blue}>(D)</span>REAM <br></br>
        <span style={messageBar(114)}></span> POTENTIAL <span style={messageBar(62)}></span> T<span style={mainCss.blue}>(E)</span>AM
      </div>
      <div>

      </div>
      <div>
        
      </div>
    </div>
  )
}