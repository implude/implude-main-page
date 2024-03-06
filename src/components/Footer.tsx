import React from 'react'
import { Col, Header1, Header2, Row, Title, Wrap, Detail } from './atomic'

import Implude from '../assets/implude-light.svg?react'
import Youtube from '../assets/youtube.svg?react'
import Instagram from '../assets/instagram.svg?react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <Container>
        <Wrap justify="space-between" gap="2rem">
          <Wrap gap={'1rem'} align="center">
            <Implude height="6.25rem" width="6.25rem" />
            <Col align="start">
              <Header2 color="--gray-white" $bold>
                #IMPLUDE
              </Header2>
              <Wrap gap="0.5rem">
                <Detail color="--gray-white">IMPORT </Detail> <Detail color="--gray-white"> + INCLUDE</Detail>
              </Wrap>
            </Col>
          </Wrap>
          <Row gap={'2rem'}>
            <Link to={'https://www.youtube.com/@implude_official/featured'} style={{ cursor: 'pointer' }}>
              <Youtube height="6.25rem" width="6.25rem" />
            </Link>
            <Link to={'https://www.instagram.com/implude_official/'} style={{ cursor: 'pointer' }}>
              <Instagram height="6.25rem" width="6.25rem" />
            </Link>
          </Row>
        </Wrap>
        <Col>
          <Info>
            상호 : #IMPLUDE | 대표자명 : 김진욱, 박지윤
            <br />
            이메일 : biz.implude@dimigo.hs.kr
            <br />
            주소 : 경기도 안산시 단원구 사세충열로 94
          </Info>
        </Col>
      </Container>
    </>
  )
}

const Container = styled(Col)`
  width: 100%;
  background-color: var(--gray-black);
  padding: 4rem 8rem;
  gap: 4.5rem;

  div {
    user-select: text;
  }
  @media (max-width: 490px) {
    padding: 4rem 3.8rem;
  }
`
const Info = styled(Detail)`
  color: var(--gray-white);
  text-wrap: wrap;
`

export default Footer
