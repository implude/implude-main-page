import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Blank, Col, Wrap, Description, Header1, Row, Title } from '../../components/atomic'

export default function RecruitPage() {
  return (
    <Col>
      <BannerImage></BannerImage>
      <Blank height='10rem'/>
      <Col>
        <div style={{ textAlign:'center' }}>
          <Title>시작하기에 앞서</Title>
        </div>
      </Col>
    </Col>
    
  )
}

const BannerImage = styled.img`
  width : 100%;
  height : 37.5rem;
  background : gray;
`