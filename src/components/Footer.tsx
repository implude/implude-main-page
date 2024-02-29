import React from 'react'
import { Col, Header1, Row, Title } from './atomic'

import Implude from '../assets/implude-light.svg?react'
import Youtube from '../assets/youtube.svg?react'
import Instagram from '../assets/instagram.svg?react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <Container>
        <Row style={{ padding: '40px 80px' }} justify="space-between">
          <Col gap={'45px'}>
            <Row gap={'15px'} align="center">
              <Implude />
              <Col align="start">
                <Title color="--gray-white" $bold>
                  #IMPLUDE
                </Title>
                <Header1 color="--gray-white">IMPORT + INCLUDE</Header1>
              </Col>
            </Row>
            <Col>
              <Header1 color="--gray-white">
                상호 : #IMPLUDE | 대표자명 : 김진욱, 박지윤
                <br />
                이메일 : 몰라몰라@implude.com
                <br />
                주소 : 경기도 안산시 단원구 사세충열로 94
              </Header1>
            </Col>
          </Col>
          <Row gap={'32px'}>
            <Link to={'https://www.youtube.com/@implude_official/featured'} style={{ cursor: 'pointer' }}>
              <Youtube />
            </Link>
            <Link to={'https://www.instagram.com/implude_official/'} style={{ cursor: 'pointer' }}>
              <Instagram />
            </Link>
          </Row>
        </Row>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  background-color: var(--gray-black);

  div {
    user-select: text;
  }
`
export default Footer
