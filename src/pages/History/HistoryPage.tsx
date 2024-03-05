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
    <Col gap="18rem" style={{ padding: '18rem' }}>
      <Col gap={'10rem'}>
        <Row justify="center">
          <IntroText color={'--gray-black'}>
            <span>임플루드</span>는 오늘도
            <br />
            세상을 바꾸고 있습니다
          </IntroText>
        </Row>
        <Row justify="center">
          <Row gap={'8rem'}>
            <YearContainer gap={'6rem'}>
              {[...Array(9)].map((v, i) => (
                <>
                  <Row width="10rem" justify="space-between">
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
            <HistoryContainer gap={'6rem'}>
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
      </Col>

      <Col gap={'10rem'}>
        <IntroText color={'--gray-black'}>언론 속의 임플루드</IntroText>
        <Col gap={'5rem'} style={{ padding: '0 10rem' }}>
          <Link to="https://www.hankyung.com/society/article/2020072102397">
            <Col gap={'2rem'} style={{ padding: '1rem' }}>
              <Row gap={'3rem'} align="center">
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
            <Col gap={'2rem'} style={{ padding: '1rem' }}>
              <Row gap={'3rem'} align="center">
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
      </Col>
    </Col>
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
    width: 0.25rem;
    height: 56rem;
    position: absolute;
    background: var(--gray-200);

    transform: translate(10rem, 1.5rem);
  }
`
const Year = styled(Title)<{ enabled: boolean }>`
  color: ${(p) => (p.enabled ? 'var(--gray-black)' : 'var(--gray-200)')};
  transition: all 0.3s ease-in-out;
`
const YearCircle = styled.div<{ enabled: boolean }>`
  z-index: 1;
  border-radius: 1.5rem;
  ${(p) =>
    p.enabled
      ? css`
          width: 1.5rem;
          height: 1.5rem;

          background: white;
          border: 0.25rem solid var(--brand-600);
          transform: translate(0.1rem, 1rem);
        `
      : css`
          width: 1rem;
          height: 1rem;
          background: var(--gray-200);
          transform: translate(-0.08rem, 1rem);
        `}
`
const HistoryContainer = styled(Col)``
const HistoryBlock = styled.div`
  position: relative;
  cursor: pointer;
`
