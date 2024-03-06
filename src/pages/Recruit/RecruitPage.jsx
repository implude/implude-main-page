import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import {
  Blank,
  Col,
  Wrap,
  Description,
  Header1,
  Header2,
  Row,
  Title,
  Detail,
  RecruitText,
} from '../../components/atomic'

export default function RecruitPage() {
  const [part, setPart] = useState(0)
  const [detailPartDev, setDetailPartDev] = useState(0)

  return (
    <Col>
      <BannerImage src="" />
      <div style={{ padding: '0 7.5rem' }}>
        <Blank height="7.5rem" />
        <Col>
          <div style={{ textAlign: 'center' }}>
            <Title color={'--gray-black'}>시작하기에 앞서</Title>
          </div>
          <Blank height="7.5rem" />
          <>
            <Header2 color={'--gray-black'}>
              임플루드와 함께하기로 결정하셨다면, 임플루드 합류 여정을 소개해드릴게요!
            </Header2>
            <Blank height="3.75rem" />
            <Row justify="space-between" gap={'-3.125rem'}>
              <TitleCircle style={{ background: '#99c8ff' }}>
                <CircleText color="black">
                  지원서
                  <br />
                  접수
                </CircleText>
              </TitleCircle>
              <TitleCircle style={{ background: '#3391ff' }}>
                <CircleText color="black">
                  지원서
                  <br />
                  검토
                </CircleText>
              </TitleCircle>
              <TitleCircle style={{ background: '#005ecc' }}>
                <CircleText color="--gray-white">
                  지원서
                  <br />
                  결과 발표
                </CircleText>
              </TitleCircle>
              <TitleCircle style={{ background: '#002f66' }}>
                <CircleText color="--gray-white">면접</CircleText>
              </TitleCircle>
              <TitleCircle style={{ background: 'black' }}>
                <CircleText color="--gray-white">
                  최종
                  <br />
                  발표
                </CircleText>
              </TitleCircle>
            </Row>
            <Blank height="2rem" />
            <Description color={'--gray-400'}>*상황에 따라 유동적으로 변경될 수 있어요.</Description>
          </>
          <Blank height="21.25rem" />
          <>
            <Title color={'--gray-black'}>1. 포지션 선택하기</Title>
            <Blank height="3.25rem" />
            <RecruitText color={'--gray-black'}>
              임플루드의 포지션은 ‘FE, BE, APP, 디자이너, 기획자’로 구성되어 있어요.
              <br />
              포지션은 중복 선택이 가능해요! 내가 자신있는 / 하고싶은 포지션을 자유롭게 선택해주세요!
            </RecruitText>
          </>
          <Blank height="12.5rem" />
          <>
            <Title color={'--gray-black'}>2. 지원서 작성하기</Title>
            <Blank height="3.25rem" />
            <RecruitText color={'--gray-black'}>
              임플루드에서 활동하고싶은 포지션을 선택했다면, 이제 지원서를 작성할 차례에요.
            </RecruitText>
            <Blank height="3rem" />
            <RecruitText color={'--gray-black'} highlight={true}>
              지원서 작성 전 미리 확인해주시면 좋아요.
            </RecruitText>
            <Blank height="1.5rem" />
            <RecruitText color={'--gray-black'}>
              <li>
                본인만의 포트폴리오가 있다면 꼭 제출해주는게 좋아요! 지원한 분야의 포트폴리오가 아니더라도 좋아요.
                포트폴리오가 있으면 여러분의 지원서가 훨씬 매력적으로 보인답니다.
              </li>
              <li>
                개발 직군의 경우, 기술 스택을 지원서에 작성해주시는게 좋아요! 없다면 작성하지 않으셔도 무방합니다.
              </li>
              <li>지원서에는 자신의 성장 가능성을 구체적으로 알아볼 수 있는 내용이 들어가면 좋아요!</li>
            </RecruitText>
            <Blank height="3rem" />
            <RecruitText color={'--gray-black'}>
              지원서는 소중한 시간을 할애해 지원해주신 만큼 꼼꼼하게 살펴보고 있어요!
            </RecruitText>
            <Blank height="7.5rem" />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ApplyButton>
                <PartButtonText style={{ color: 'white' }}>지원서 작성 바로가기</PartButtonText>
              </ApplyButton>
            </div>
          </>

          <Blank height="12.5rem" />
          <>
            <Title color={'--gray-black'}>3. 면접 보기</Title>
            <Blank height="3.25rem" />
            <RecruitText color={'--gray-black'}>
              벌써 마지막 단계에요! 면접에서 합격한다면 임플루드의 일원으로서 1년을 보내게 됩니다!
            </RecruitText>
            <Blank height="3rem" />
            <RecruitText highlight color={'--gray-black'}>
              면접 참여 전 미리 확인해주시면 좋아요.
            </RecruitText>
            <Blank height="1.5rem" />
            <RecruitText color={'--gray-black'}>
              <li>편안한 분위기에서 면접을 진행하는 것을 추구해요. 압박 면접은 절대 없을테니 걱정 않고 오셔도 돼요!</li>
              <li>
                임플루드가 면접에서 보고싶은 건 지원자님의 있는 그대로의 모습이에요. 긴장하지 않고 있는 그대로의 자신을
                보여준다면, 매력적인 면접자가 될 수 있어요.
              </li>
              <li>
                임플루드의 면접은 지원자님을 일방적으로 평가하는 자리가 아니라, 대화를 통해 임플루드에서 함께 성장할 수
                있을지 서로를 알아보는 자리에요. 면접이 임플루드에 대한 좋은 경험이 되도록 저희도 계속 노력할게요!
              </li>
            </RecruitText>
            <Blank height="3rem" />
            <RecruitText color={'--gray-black'}>
              너무 긴장하지 않고 편한 마음으로 면접을 보신다면, 좋은 결과를 기대해볼만 해요!
            </RecruitText>
          </>
          <Blank height="21.25rem" />
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
            {part == 0 && (
              <Col gap="1.5rem">
                <Part
                  title="이런 인재를 찾고있어요!  🔍"
                  descriptions={[
                    '적극적이고 자발적으로 동아리 활동에 참여할 의지가 있는 학생',
                    '학습에 대한 열정이 뛰어난 학생',
                    '팀워크 능력이 뛰어난 학생',
                    '문제 해결 능력과 끈기를 갖추고, 어려운 과제에 대한 도전을 두려워하지 않는 학생',
                    'AI에 관심이 많은 학생',
                  ]}
                />
                <Row justify="center" gap="1rem">
                  <PartButton
                    style={{ backgroundColor: detailPartDev == 0 ? '#005ecc' : 'var(--gray-200)' }}
                    onClick={() => {
                      setDetailPartDev(0)
                    }}
                  >
                    <PartButtonText style={{ color: detailPartDev == 0 ? 'white' : 'var(--gray-600)' }}>
                      프론트앤드
                    </PartButtonText>
                  </PartButton>
                  <PartButton
                    style={{ backgroundColor: detailPartDev == 1 ? '#005ecc' : 'var(--gray-200)' }}
                    onClick={() => {
                      setDetailPartDev(1)
                    }}
                  >
                    <PartButtonText style={{ color: detailPartDev == 1 ? 'white' : 'var(--gray-600)' }}>
                      백앤드
                    </PartButtonText>
                  </PartButton>
                  <PartButton
                    style={{ backgroundColor: detailPartDev == 2 ? '#005ecc' : 'var(--gray-200)' }}
                    onClick={() => {
                      setDetailPartDev(2)
                    }}
                  >
                    <PartButtonText style={{ color: detailPartDev == 2 ? 'white' : 'var(--gray-600)' }}>
                      앱
                    </PartButtonText>
                  </PartButton>
                </Row>
                {detailPartDev == 0 && (
                  <>
                    <Part
                      title="이런 활동을 할 예정이에요! 📒"
                      descriptions={[
                        '체계적인 커리큘럼과 함께 참여형 웹 개발 교육을 진행해요.',
                        '능률을 300% 올려주는 ‘팀워크의 정석’에 대한 교육을 진행해요.',
                        '웹 개발자로 여러 대회에 참가해 화려한 수상실적을 쌓을 수 있어요.',
                        '백엔드, 기획, 디자이너 분들과 함께 프로젝트를 진행하며, 원할 경우 팀 내에서 세미나를 열 수도 있으며 스터디를 진행할 수도 있습니다.',
                      ]}
                    />
                    <Part
                      title="이런 경험이 있으면 더 좋아요 😀"
                      descriptions={[
                        'html, css, js를 다뤄본 경험',
                        'react를 다뤄본 경험',
                        '디자이너 및 기획자와 협업해본 경험',
                        '대회 출전 경험',
                        'cmd / terminal을 활용해본 경험',
                      ]}
                    />
                  </>
                )}
                {detailPartDev == 1 && (
                  <>
                    <Part
                      title="이런 활동을 할 예정이에요! 📒"
                      descriptions={[
                        '능률을 300% 올려주는 ‘팀워크의 정석’에 대한 교육을 진행해요.',
                        '백엔드 개발자로 여러 대회에 참가해 화려한 수상실적을 쌓을 수 있어요.',
                        '프론트엔드, 기획, 디자이너 분들과 함께 프로젝트를 진행하며, 원할 경우 팀 내에서 세미나를 열 수도 있으며 스터디를 진행할 수도 있습니다.',
                      ]}
                    />
                    <Part
                      title="이런 경험이 있으면 더 좋아요 😀"
                      descriptions={[
                        '백엔드 개발 경험이 있다면 무조건 포지션 중복 선택 해주세요.',
                        'cmd / terminal을 활용해본 경험',
                      ]}
                    />
                  </>
                )}
                {detailPartDev == 2 && (
                  <>
                    <Part
                      title="이런 활동을 할 예정이에요! 📒"
                      descriptions={[
                        '체계적인 커리큘럼으로 혼자서 프로젝트를 완성할 수 있도록 교육 활동을 진행해요.',
                        '능률을 300% 올려주는 ‘팀워크의 정석’에 대한 교육을 진행해요.',
                        '앱 개발자로 여러 대회에 참가해 화려한 수상실적을 쌓을 수 있어요.',
                        '기획, 디자이너 분들과 함께 프로젝트를 진행하며, 원할 경우 팀 내에서 세미나를 열 수도 있으며 스터디를 진행할 수도 있습니다.',
                      ]}
                    />
                    <Part
                      title="이런 경험이 있으면 더 좋아요 😀"
                      descriptions={[
                        '안드로이드 개발 경험',
                        '하나 이상의 프로그래밍 언어 학습 경험',
                        'cmd / terminal을 활용해본 경험',
                      ]}
                    />
                  </>
                )}
              </Col>
            )}
            {part == 1 && (
              <Col gap="1.5rem">
                <Part
                  title="이런 인재를 찾고있어요!  🔍"
                  descriptions={[
                    '창의적인 아이디어를 지닌 학생',
                    '그래픽 소프트웨어 및 도구에 익숙한 학생 (포토샵, 일러스트레이터, 피그마 등)',
                    '새로운 기술과 트렌드에 대한 관심과 학습 의욕이 높은 학생',
                    '팀원들과 원활한 협업과 소통이 가능한 학생',
                    '시간 약속을 잘 지키는 학생',
                  ]}
                />
                <Part
                  title="이런 활동을 할 예정이에요! 📒"
                  descriptions={[
                    '체계적인 커리큘럼과 함께 참여형 디자인 교육을 진행해요.',
                    '능률을 300% 올려주는 ‘팀워크의 정석’에 대한 교육을 진행해요.',
                    '디자이너로 여러 대회에 참가해 화려한 수상실적을 쌓을 수 있어요.',
                    '영상 제작, 로고 디자인, UI/UX 디자인, AI툴 등의 교육 및 실습',
                  ]}
                />
                <Part
                  title="이런 경험이 있으면 더 좋아요 😀"
                  descriptions={[
                    '디자인 프로그램(어도비 등)을 사용해본 경험',
                    '개발자와의 협업 경험',
                    'cmd / terminal 을 활용해본 경험',
                  ]}
                />
              </Col>
            )}
            {part == 2 && (
              <Col gap="1.5rem">
                <Part
                  title="이런 인재를 찾고있어요!  🔍"
                  descriptions={[
                    '창의적인 아이디어를 가지고 있는 학생',
                    '적극적이고 자발적으로 동아리 활동에 참여할 의지가 있는 학생',
                    '팀워크 능력이 뛰어난 학생',
                    '문제 해결 능력과 끈기를 갖추고, 어려운 과제에 대한 도전을 두려워하지 않는 학생',
                    'AI에 관심이 많은 학생',
                  ]}
                />
                <Part
                  title="이런 활동을 할 예정이에요! 📒"
                  descriptions={[
                    '체계적인 커리큘럼과 함께 참여형 기획 교육을 진행해요.',
                    '능률을 300% 올려주는 ‘팀워크의 정석’에 대한 교육을 진행해요.',
                    '기획자로서 여러 대회에 참가해 화려한 수상실적을 쌓을 수 있어요.',
                    '실제 창업을 경험하며 마케팅 등의 각종 업무를 진행해요.',
                  ]}
                />
                <Part
                  title="이런 경험이 있으면 더 좋아요 😀"
                  descriptions={['프레젠테이션 발표 경험', '여러 프로젝트(it 분야가 아니여도 괜찮아요!)의 기획 경험']}
                />
              </Col>
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
  width: 15.625rem;
  height: 15.625rem;
  border-radius: 50%;
  position: absolute;
  text-align: center;
  justify-content: center;
  align-items: center;
`

const CircleText = styled(Header2)`
  text-align: center;
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

function Part({ title, descriptions }) {
  const itemList = Array.isArray(descriptions) ? descriptions : []
  return (
    <PartBox>
      <Header1 color="black">{title}</Header1>
      <Blank height="2rem" />
      <Description color="black">
        {itemList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </Description>
    </PartBox>
  )
}
