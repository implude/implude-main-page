import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Blank, Col, Description, Header1, Row, Title } from '../../components/atomic'

export default function HistoryPage() {
  const [activated, setActivated] = useState<number>(2023)

  const data = [
    {
      date: '2023.03',
      text: '일반동아리 신규 부원 모집',
    },
    {
      date: '2023.04',
      text: '창업동아리 신규 부원 모집',
    },
    {
      date: '2023.06',
      text: 'MK 1 판매 개시',
    },
    {
      date: '2023.06',
      text: 'MK 1  1주 총 생산량 완판 / 매출 150만원 달성',
    },
    {
      date: '2023.11',
      text: '한국벤처창업아이템경진대회 동상 수상',
    },
    {
      date: '2023.12',
      text: '공개SW개발자대회 특별상 수상',
    },
  ]
  return (
    <>
      <Blank width={'100%'} height={'220px'} />
      <Row justify="center">
        <IntroText color={'--gray-black'}>
          <span>임플루드</span>는 오늘도
          <br />
          세상을 바꾸고 있습니다
        </IntroText>
      </Row>
      <Blank width={'100%'} height={'120px'} />
      <Row justify="center">
        <Row gap={'100px'}>
          <YearContainer gap={'74px'}>
            {[...Array(9)].map((v, i) => (
              <>
                <Row width="120px" justify="space-between">
                  <Year
                    hover={{ color: '--gray-black' }}
                    enabled={2023 - i === activated}
                    onClick={() => setActivated(2023 - i)}
                  >
                    {2023 - i}
                  </Year>
                  <YearCircle enabled={2023 - i === activated} />
                </Row>
              </>
            ))}
          </YearContainer>
          <HistoryContainer gap={'100px'}>
            {data.map((v, i) => (
              <HistoryBlock onClick={() => setActivated(2023 - i)}>
                <Header1 $bold color={'--gray-400'}>
                  {v.date}
                </Header1>
                <Header1 $bold color={'--gray-black'}>
                  {v.text}
                </Header1>
              </HistoryBlock>
            ))}
          </HistoryContainer>
        </Row>
      </Row>

      <Blank width="100%" height="220px" />
      <IntroText color={'--gray-black'}>언론 속의 임플루드</IntroText>
      <Blank width="100%" height="110px" />
      <Col gap={'60px'} style={{ padding: '0 120px' }}>
        <Link to="https://www.hankyung.com/society/article/2020072102397">
          <Col gap={'24px'} style={{ padding: '10px' }}>
            <Row gap={'32px'} align="center">
              <Header1 $bold color={'--brand-600'}>
                한국 경제
              </Header1>
              <Header1 $bold color={'--gray-black'}>
                2020.07.21
              </Header1>
            </Row>
            <Title color={'--gray-black'}>[스타트업 플러스] 창업은 시작이 반... "상상하는 대로 만들어라"</Title>
          </Col>
        </Link>
        <Link to="https://game.donga.com/105214/">
          <Col gap={'24px'} style={{ padding: '10px' }}>
            <Row gap={'32px'} align="center">
              <Header1 $bold color={'--brand-600'}>
                게임 동아
              </Header1>
              <Header1 $bold color={'--gray-black'}>
                2020.07.21
              </Header1>
            </Row>
            <Title color={'--gray-black'}>
              [STAC2022] 미래산업 부문 대상 'ASD' "AI를 통한 더 좋은 공부 방법을 소개해요"
            </Title>
          </Col>
        </Link>
      </Col>
      <Blank width="100%" height="220px" />
    </>
  )
}

const IntroText = styled(Title)`
  text-align: center;
  span {
    color: var(--brand-600);
  }
`
const YearContainer = styled(Col)`
  &::after {
    content: '';
    width: 3px;
    height: 910px;
    position: absolute;
    background: var(--gray-200);

    transform: translate(110px, 20px);
  }
`
const Year = styled(Title)<{ enabled: boolean }>`
  color: ${(p) => (p.enabled ? 'var(--gray-black)' : 'var(--gray-200)')};
  transition: all 0.3s ease-in-out;
`
const YearCircle = styled.div<{ enabled: boolean }>`
  z-index: 1;
  border-radius: 20px;
  ${(p) =>
    p.enabled
      ? css`
          width: 20px;
          height: 20px;

          background: white;
          border: 4px solid var(--brand-600);
          transform: translate(1.5px, 10px);
        `
      : css`
          width: 15px;
          height: 15px;
          background: var(--gray-200);
          transform: translate(-1px, 10px);
        `}
`
const HistoryContainer = styled(Col)``
const HistoryBlock = styled.div`
  position: relative;
  cursor: pointer;
`
