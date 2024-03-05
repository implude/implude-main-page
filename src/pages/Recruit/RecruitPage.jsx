import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Blank, Col, Wrap, Description, Header1, Row, Title } from '../../components/atomic'

export default function RecruitPage() {
  const [part, setPart] = useState(0)

  return (
    <Col>
      <BannerImage src="" />
      <div style={{ padding: '0 7.5rem' }}>
        <Blank height="7.5rem" />
        <Col>
          <div style={{ textAlign: 'center' }}>
            <Title color={'--gray-black'}>시작하기에 앞서</Title>
          </div>
          <Blank height="5rem" />
          <>
            <Header1 color={'--gray-black'}>
              임플루드와 함께하기로 결정하셨다면, 임플루드 합류 여정을 소개해드릴게요!
            </Header1>
            <Blank height="1rem" />
            <Row style={{ position: 'relative' }}>
              <TitleCircle style={{ background: '#99c8ff' }}>
                <CircleText color="black">
                  지원서
                  <br />
                  접수
                </CircleText>
              </TitleCircle>
              <TitleCircle style={{ background: '#3391ff', left: '8rem' }}>
                <CircleText color="black">
                  지원서
                  <br />
                  검토
                </CircleText>
              </TitleCircle>
              <TitleCircle style={{ background: '#005ecc', left: '16rem' }}>
                <CircleText color="--gray-white">
                  지원서
                  <br />
                  결과 발표
                </CircleText>
              </TitleCircle>
              <TitleCircle style={{ background: '#002f66', left: '24rem' }}>
                <CircleText color="--gray-white">면접</CircleText>
              </TitleCircle>
              <TitleCircle style={{ background: 'black', left: '32rem' }}>
                <CircleText color="--gray-white">
                  최종
                  <br />
                  발표
                </CircleText>
              </TitleCircle>
            </Row>
            <Blank height="11rem" />
            <Description color={'--gray-400'}>*상황에 따라 유동적으로 변경될 수 있어요.</Description>
          </>
          <Blank height="7.5rem" />
          <>
            <Title color={'--gray-black'}>1. 포지션 선택하기</Title>
            <Blank height="1rem" />
            <Description color={'--gray-black'}>
              임플루드의 포지션은 ‘FE, BE, APP, 디자이너, 기획자’로 구성되어 있어요.
              <br />
              포지션은 중복 선택이 가능해요! 내가 자신있는 / 하고싶은 포지션을 자유롭게 선택해주세요!
            </Description>
          </>
          <Blank height="4.5rem" />
          <>
            <Title color={'--gray-black'}>2. 지원서 작성하기</Title>
            <Blank height="1rem" />
            <Description color={'--gray-black'}>
              임플루드에서 활동하고싶은 포지션을 선택했다면, 이제 지원서를 작성할 차례에요.
            </Description>
            <Description color={'--gray-black'}>지원서 작성 전 미리 확인해주시면 좋아요.</Description>
            <Description color={'--gray-black'}>
              <li>
                본인만의 포트폴리오가 있다면 꼭 제출해주는게 좋아요! 지원한 분야의 포트폴리오가 아니더라도 좋아요.
                포트폴리오가 있으면 여러분의 지원서가 훨씬 매력적으로 보인답니다.
              </li>
              <li>
                개발 직군의 경우, 기술 스택을 지원서에 작성해주시는게 좋아요! 없다면 작성하지 않으셔도 무방합니다.
              </li>
              <li>지원서에는 자신의 성장 가능성을 구체적으로 알아볼 수 있는 내용이 들어가면 좋아요!</li>
            </Description>
            <Description color={'--gray-black'}>
              지원서는 소중한 시간을 할애해 지원해주신 만큼 꼼꼼하게 살펴보고 있어요!
            </Description>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ApplyButton>
                <PartButtonText style={{ color: 'white' }}>지원서 작성 바로가기</PartButtonText>
              </ApplyButton>
            </div>
          </>

          <Blank height="4.5rem" />
          <>
            <Title color={'--gray-black'}>3. 면접 보기</Title>
            <Blank height="1rem" />
            <Description color={'--gray-black'}>
              벌써 마지막 단계에요! 면접에서 합격한다면 임플루드의 일원으로서 1년을 보내게 됩니다!
            </Description>
            <Description color={'--gray-black'}>면접 참여 전 미리 확인해주시면 좋아요.</Description>
            <Description color={'--gray-black'}>
              <li>편안한 분위기에서 면접을 진행하는 것을 추구해요. 압박 면접은 절대 없을테니 걱정 않고 오셔도 돼요!</li>
              <li>
                임플루드가 면접에서 보고싶은 건 지원자님의 있는 그대로의 모습이에요. 긴장하지 않고 있는 그대로의 자신을
                보여준다면, 매력적인 면접자가 될 수 있어요.
              </li>
              <li>
                임플루드의 면접은 지원자님을 일방적으로 평가하는 자리가 아니라, 대화를 통해 임플루드에서 함께 성장할 수
                있을지 서로를 알아보는 자리에요. 면접이 임플루드에 대한 좋은 경험이 되도록 저희도 계속 노력할게요!
              </li>
            </Description>
            <Description color={'--gray-black'}>
              너무 긴장하지 않고 편한 마음으로 면접을 보신다면, 좋은 결과를 기대해볼만 해요!
            </Description>
          </>
          <Blank height="7.5rem" />
          <div style={{ textAlign: 'center' }}>
            <Title color={'--gray-black'}>모집 분야 자세히 보기</Title>
            <Blank height="5rem" />
            <Row gap="1rem" justify="center">
              <PartButton
                style={{ backgroundColor: part == 0 ? '#005ecc' : 'var(--gray-200)' }}
                onClick={() => {
                  setPart(0)
                }}
              >
                <PartButtonText style={{ color: part == 0 ? 'white' : 'var(--gray-600)' }}>개발자</PartButtonText>
              </PartButton>
              <PartButton
                style={{ backgroundColor: part == 1 ? '#005ecc' : 'var(--gray-200)' }}
                onClick={() => {
                  setPart(1)
                }}
              >
                <PartButtonText style={{ color: part == 1 ? 'white' : 'var(--gray-600)' }}>디자이너</PartButtonText>
              </PartButton>
              <PartButton
                style={{ backgroundColor: part == 2 ? '#005ecc' : 'var(--gray-200)' }}
                onClick={() => {
                  setPart(2)
                }}
              >
                <PartButtonText style={{ color: part == 2 ? 'white' : 'var(--gray-600)' }}>기획자</PartButtonText>
              </PartButton>
            </Row>
            <Blank height="5rem" />
            {part == 0 && <>se</>}
            {part == 1 && <>sa</>}
            {part == 2 && (
              <>
                <PartBox>asoifsdaiofsjfsdakj</PartBox>
              </>
            )}
            <Blank height="7.5rem" />
          </div>
        </Col>
      </div>
    </Col>
  )
}

const BannerImage = styled.img`
  width: 100%;
  height: 25rem;
  background: gray;
`

const TitleCircle = styled.div`
  display: flex;
  width: 10rem;
  height: 10rem;
  border-radius: 10rem;
  position: absolute;
  text-align: center;
  justify-content: center;
  align-items: center;
`

const CircleText = styled(Title)`
  text-align: center;
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const ApplyButton = styled.button`
  display: flex;
  padding: 0.25rem 3.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border: none;
  border-radius: 3.1875rem;
  background: var(--Gray-Brand-600, #005ecc);
`

const PartButton = styled.button`
  display: flex;
  padding: 0.25rem 3.625rem;
  align-items: center;
  gap: 19.9375rem;
  border-radius: 3.5625rem;
  border: none;
`

const PartButtonText = styled.p`
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const PartBox = styled.div`
  display: flex;
  width: 100%;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 5rem;
  border-radius: 1rem;
  background: var(--Gray-0, #fbfbfb);
`
