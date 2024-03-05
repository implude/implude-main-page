import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Blank, Col, Wrap, Description, Header1, Row, Title } from '../../components/atomic'

export default function RecruitPage() {
  return (
    <Col>
      <BannerImage src='' />
      <div style={{ padding:'0 7.5rem' }}>
        <Blank height='7.5rem'/>
        <Col>
          <div style={{ textAlign:'center' }}>
            <Title color={'--gray-black'}>시작하기에 앞서</Title>
          </div>
          <Blank height='5rem'/>
          <>
            <Header1 color={'--gray-black'}>임플루드와 함께하기로 결정하셨다면, 임플루드 합류 여정을 소개해드릴게요!</Header1>
            <Blank height='1rem'/>
            <Row style={{position:'relative'}}>
              <TitleCircle style={{background: '#99c8ff'}}></TitleCircle>
              <TitleCircle style={{background: '#005ecc', left:'8rem'}}></TitleCircle>
              <TitleCircle style={{background: '#002f66', left:'16rem'}}></TitleCircle>
              <TitleCircle style={{background: '#3391ff', left:'24rem'}}></TitleCircle>
              <TitleCircle style={{background: 'black', left:'32rem'}}></TitleCircle>
            </Row>
            <Blank height='11rem'/>
            <Description color={'--gray-400'}>*상황에 따라 유동적으로 변경될 수 있어요.</Description>
          </>
          <Blank height='7.5rem'/>
          <>
            <Title color={'--gray-black'}>1. 포지션 선택하기</Title>
            <Blank height='1rem'/>
            <Description color={'--gray-black'}>임플루드의 포지션은 ‘FE, BE, APP, 디자이너, 기획자’로 구성되어 있어요.<br />
                          포지션은 중복 선택이 가능해요! 내가 자신있는 / 하고싶은 포지션을 자유롭게 선택해주세요!</Description>
          </>
          <Blank height='4.5rem'/>
          <>
            <Title color={'--gray-black'}>2. 지원서 작성하기</Title>
            <Blank height='1rem'/>
            <Description color={'--gray-black'}>임플루드에서 활동하고싶은 포지션을 선택했다면, 이제 지원서를 작성할 차례에요.</Description>
            <Description color={'--gray-black'}>지원서 작성 전 미리 확인해주시면 좋아요.</Description>
            <Description color={'--gray-black'}>
              <li>본인만의 포트폴리오가 있다면 꼭 제출해주는게 좋아요! 지원한 분야의 포트폴리오가 아니더라도 좋아요. 포트폴리오가 있으면 여러분의 지원서가 훨씬 매력적으로 보인답니다.</li>
              <li>개발 직군의 경우, 기술 스택을 지원서에 작성해주시는게 좋아요! 없다면 작성하지 않으셔도 무방합니다.</li>
              <li>지원서에는 자신의 성장 가능성을 구체적으로 알아볼 수 있는 내용이 들어가면 좋아요!</li>
            </Description>
            <Description color={'--gray-black'}>지원서는 소중한 시간을 할애해 지원해주신 만큼 꼼꼼하게 살펴보고 있어요!</Description>
            <div style={{textAlign:'center'}}>
              <button>지원서 작성 바로가기</button>
            </div>
          </>
          <Blank height='4.5rem'/>
          <>
            <Title color={'--gray-black'}>3. 면접 보기</Title>
            <Blank height='1rem'/>
            <Description color={'--gray-black'}>벌써 마지막 단계에요! 면접에서 합격한다면 임플루드의 일원으로서 1년을 보내게 됩니다!</Description>
            <Description color={'--gray-black'}>면접 참여 전 미리 확인해주시면 좋아요.</Description>
            <Description color={'--gray-black'}>
              <li>편안한 분위기에서 면접을 진행하는 것을 추구해요. 압박 면접은 절대 없을테니 걱정 않고 오셔도 돼요!</li>
              <li>임플루드가 면접에서 보고싶은 건 지원자님의 있는 그대로의 모습이에요. 긴장하지 않고 있는 그대로의 자신을 보여준다면, 매력적인 면접자가 될 수 있어요.</li>
              <li>임플루드의 면접은 지원자님을 일방적으로 평가하는 자리가 아니라, 대화를 통해 임플루드에서 함께 성장할 수 있을지 서로를 알아보는 자리에요. 면접이 임플루드에 대한 좋은 경험이 되도록 저희도 계속 노력할게요!</li>
            </Description>
            <Description color={'--gray-black'}>너무 긴장하지 않고 편한 마음으로 면접을 보신다면, 좋은 결과를 기대해볼만 해요!</Description>
          </>
          <Blank height='7.5rem'/>
          <div style={{ textAlign:'center'}}>
            <Title color={'--gray-black'}>모집 분야 자세히 보기</Title>
            <Blank height='5rem'/>
            <Row gap='1rem' justify='center'>
              <button>개발자</button>
              <button>디자이너</button>
              <button>기획자</button>
            </Row>
          </div>
          <>
          </>
        </Col>
      </div>
  </Col>
   
    
    
  )
}

const BannerImage = styled.img`
  width : 100%;
  height : 25rem;
  background : gray;
`

const TitleCircle = styled.div`
  width : 10rem;
  height : 10rem;
  border-radius : 10rem;
  position : absolute;

`