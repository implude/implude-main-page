import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Blank, Col, Description, Header1, Row, Title } from '../../components/atomic'

export default function HistoryPage() {
  const [activated, setActivated] = useState(2023)

  const data = [
    [
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
        text: '세종특별자치시 공공데이터 활용 창업경진대회 우수상 수상',
      },
      {
        date: '2023.12',
        text: '공개SW개발자대회 특별상 수상',
      },
    ],
    [
      {
        date: '2022.03',
        text: '일반동아리 신규 부원 모집',
      },
      {
        date: '2022.04',
        text: '창업동아리 신규 부원 모집',
      },
      {
        date: '2022.11',
        text: 'STA+C 대상 수상',
      },
      {
        date: '2022.11',
        text: 'ASD 언론 노출',
      },
      {
        date: '2022.12',
        text: '공개SW개발자대회 특별상 수상',
      },
    ],
    [
      {
        date: '2021.03',
        text: '일반동아리 신규 부원 모집',
      },
      {
        date: '2021.04',
        text: '창업동아리 신규 부원 모집',
      },
      {
        date: '2021',
        text: "'Discoding : 쉽게 코딩하자' 개발",
      },
      {
        date: '2021',
        text: "'Meat in : 고기에 미치다' 개발",
      },
    ],
    [
      {
        date: '2020.03',
        text: '일반동아리 신규 부원 모집',
      },
      {
        date: '2020.04',
        text: '창업동아리 신규 부원 모집',
      },
      {
        date: '2020',
        text: "'디미고인' 개발",
      },
      {
        date: '2020',
        text: "'디넌 앱' 개발",
      },
      {
        date: '2020',
        text: "'MOLA : 인공지능 텍스트 인식 단어장' 개발",
      },
      {
        date: '2020',
        text: "'JOIN : 커뮤니티 앱 개발 도우미 서비스' 개발",
      },
      {
        date: '2020',
        text: "'집가고싶다 : 귀가 시간 알리미' 개발",
      },
      {
        date: '2020',
        text: '삼성 JA KOREA 창업놀이터 최우수상 수상',
      },
    ],
    [
      {
        date: '2019.03',
        text: '일반동아리 신규 부원 모집',
      },
      {
        date: '2019.04',
        text: '창업동아리 신규 부원 모집',
      },
      {
        date: '2019.08',
        text: '삼성 SDS-JA 스마트 해커톤 대상 수상',
      },
      {
        date: '2019.11',
        text: 'STA+C 대상 수상',
      },
    ],
    [
      {
        date: '2018.03',
        text: '일반동아리 신규 부원 모집',
      },
      {
        date: '2018.04',
        text: '창업동아리 신규 부원 모집',
      },
      {
        date: '2018',
        text: '안산시 청소년 Software-UP Programming Contest 우수상 수상',
      },
      {
        date: '2018.09',
        text: '세상을 변화시키는 ICT 임팩터톤 2등 디캠프상 수상',
      },
      {
        date: '2018.10',
        text: '디지털 헬스케어해커톤 장려상 수상',
      },
    ],
    [
      {
        date: '2017.03',
        text: '일반동아리 신규 부원 모집',
      },
      {
        date: '2017.04',
        text: '창업동아리 신규 부원 모집',
      },
      {
        date: '2017.08',
        text: 'ICT 어워드코리아 장려상 수상',
      },
    ],
    [
      {
        date: '2016.03',
        text: '일반동아리 신규 부원 모집',
      },
      {
        date: '2016.04',
        text: '창업동아리 신규 부원 모집',
      },
      {
        date: '2016.11',
        text: 'STA+C 우수상 수상',
      },
    ],
    [
      {
        date: '2015.03',
        text: '임플루드 창업동아리 설립',
      },
      {
        date: '2015.03',
        text: '일반동아리 신규 부원 모집',
      },
      {
        date: '2015.04',
        text: '창업동아리 신규 부원 모집',
      },
    ],
  ]
  return (
    <Col gap="18rem" style={{ width: '100%' }}>
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
              {data[2023 - activated].map((v, i) => (
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
              <Header1 $bold style={{ overflow: 'hidden', textOverflow: 'ellipsis' }} color={'--gray-black'}>
                [스타트업 플러스] 창업은 시작이 반... "상상하는 대로 만들어라"
              </Header1>
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
              <Header1 $bold style={{ overflow: 'hidden', textOverflow: 'ellipsis' }} color={'--gray-black'}>
                [STAC2022] 미래산업 부문 대상 'ASD' "AI를 통한 더 좋은 공부 방법을 소개해요"
              </Header1>
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
    height: 68rem;
    position: absolute;
    background: var(--gray-200);

    transform: translate(9.3rem, 1.5rem);
  }
`
const Year = styled(Title)`
  color: ${(p) => (p.enabled ? 'var(--gray-black)' : 'var(--gray-200)')};
  transition: all 0.3s ease-in-out;
`
const YearCircle = styled.div`
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