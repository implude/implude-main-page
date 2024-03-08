import { useState } from 'react'
import { Col, Description, Header1, Row, Title, Wrap, RecruitText } from '../../components/atomic'
import { styled } from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import './VisionPage.css'

export default function VisionPage() {
  const [version, setVersion] = useState(0)

  const onClickVer1 = () => {
    setVersion(0)
  }

  const onClickVer2 = () => {
    setVersion(1)
  }

  const isMob = useMediaQuery({ query: '(max-width: 425px)' })
  const layout549 = useMediaQuery({ query: '(max-width: 549px)' })

  return (
    <Col gap={'13.75rem'} margin={'13.75rem auto'} width={'87.6%'}>
      <Wrap justify={layout549 ? 'center' : 'space-between'} gap="4rem 8.5rem">
        <Wrap padding={'0 0 0 0.625rem'} style={{ flexGWrap: 1 }}>
          <Title color="--black">비전</Title>
        </Wrap>
        <Col style={{ flexGrow: 5 }} gap="6.25rem">
          <VisionVerContainer justify={layout549 ? 'center' : 'right'} gap={layout549 ? '2.5rem' : '5.375rem'}>
            <VisionVer color={version == 0 ? '--gray-black' : '--gray-400'} $bold onClick={onClickVer1}>
              임플루드 비전 1.0
            </VisionVer>
            <VisionVer color={version == 0 ? '--gray-400' : '--gray-black'} $bold onClick={onClickVer2}>
              임플루드 비전 2.0
            </VisionVer>
          </VisionVerContainer>
          {version === 0 ? <OldVision /> : <NewVision />}
        </Col>
      </Wrap>
      <Wrap gap="4rem 0" justify={layout549 ? 'center' : 'flex-start'}>
        <Title color="--black" style={{ textAlign: layout549 ? 'center' : '', width: layout549 ? 'auto' : '14.75rem' }}>
          핵심 가치
        </Title>
        <Wrap justify="center" style={{ flexGrow: 5 }}>
          <Col gap={'1.25rem'} style={{ width: layout549 ? '70vw' : '' }}>
            <div>
              <VisionHeader color="--brand-600" $bold style={{ textAlign: layout549 ? 'center' : '' }}>
                팀워크
              </VisionHeader>
              <VisionDesc color="--black" style={{ textAlign: layout549 ? 'center' : '' }}>
                <span>
                  임플루드는 팀워크를 가장 중요한 요소로 생각합니다.
                  <br />
                  혼자서는 할 수 없던 일도 여러 인재가 모이면
                  <br />
                  할 수 있게 됩니다. 모두가 서로의 단점을 보완하며 <br />
                  각자의 역량을 인정하는 팀을 지향합니다.
                </span>
              </VisionDesc>
            </div>
            <div>
              <VisionHeader color="--brand-600" $bold style={{ textAlign: layout549 ? 'center' : '' }}>
                자유롭고 편한 소통
              </VisionHeader>
              <VisionDesc color="--black" style={{ textAlign: layout549 ? 'center' : '' }}>
                <span>
                  수직적이지 않고 수평적인 분위기를 지향하며, 모두가
                  <br />
                  자유롭게 질문하고 의견을 제시하는 분위기를 추구합니다.
                </span>
              </VisionDesc>
            </div>
            <div>
              <VisionHeader color="--brand-600" $bold style={{ textAlign: layout549 ? 'center' : '' }}>
                많은 실전 경험
              </VisionHeader>
              <VisionDesc color="--black" style={{ textAlign: layout549 ? 'center' : '' }}>
                <span>
                  임플루드는 책상에 앉아서 배우는 내용보다 실제로
                  <br />
                  적용해보며 배우는 것이 많다고 생각합니다. 보다
                  <br />
                  많은 실전 경험을 통해 압축적인 성장을 하는 것을
                  <br />
                  지향합니다.
                </span>
              </VisionDesc>
            </div>
          </Col>
          <Col gap={'1.25rem'} style={{ width: layout549 ? '70vw' : '' }}>
            <div>
              <VisionHeader color="--brand-600" $bold style={{ textAlign: layout549 ? 'center' : '' }}>
                실패를 즐기는
              </VisionHeader>
              <VisionDesc color="--black" style={{ textAlign: layout549 ? 'center' : '' }}>
                <span>
                  프로젝트에서 실패는 성공의 과정에 필연적인 존재
                  <br />
                  입니다. 실패를 통한 깨달음과 성장만 있을 뿐, 실패는
                  <br />
                  두려운 존재가 아닙니다.
                  <br />
                </span>
              </VisionDesc>
            </div>
            <div>
              <VisionHeader color="--brand-600" $bold style={{ textAlign: layout549 ? 'center' : '' }}>
                지속적인 혁신
              </VisionHeader>
              <VisionDesc color="--black" style={{ textAlign: layout549 ? 'center' : '' }}>
                <span>
                  어제의 내가 오늘의 나와 같다면, 유지가 아닌 퇴행
                  <br />
                  입니다. 지속적인 혁신으로 세상을 바꿉니다.
                </span>
              </VisionDesc>
            </div>
            <div>
              <VisionHeader color="--brand-600" $bold style={{ textAlign: layout549 ? 'center' : '' }}>
                깊은 신뢰
              </VisionHeader>
              <VisionDesc color="--black" style={{ textAlign: layout549 ? 'center' : '' }}>
                <span>
                  임플루드는 서로를 깊게 신뢰하고, 더 나아가 서로의
                  <br />
                  상상이 실현될 것이라는 것에 확신을 가지고 있습니다.
                  <br />
                  불가능을 가능하다고 믿는 사람이 모이면 불가능했던
                  <br />
                  것도 가능하게 됩니다.
                </span>
              </VisionDesc>
            </div>
          </Col>
        </Wrap>
      </Wrap>
      <Wrap gap="4rem 0" justify={layout549 ? 'center' : 'flex-start'}>
        <Title color="--black" style={{ width: layout549 ? 'auto' : '14.75rem' }}>
          인재상
        </Title>
        <Wrap justify="center" style={{ flexGrow: 5 }}>
          <Col gap={'1.25rem'} style={{ width: layout549 ? '70vw' : '' }}>
            <div>
              <VisionHeader color="--positive-500" $bold style={{ textAlign: layout549 ? 'center' : '' }}>
                책임감 있는
              </VisionHeader>
              <VisionDesc color="--black" style={{ textAlign: layout549 ? 'center' : '' }}>
                <span>
                  팀워크에서 가장 중요한 점은 책임감 입니다. 내가
                  <br />
                  맡은 바를 책임감 있게 수행해야 성공적인 프로젝트가
                  <br />
                  진행될 수 있습니다.
                </span>
              </VisionDesc>
            </div>
            <div>
              <VisionHeader color="--positive-500" $bold style={{ textAlign: layout549 ? 'center' : '' }}>
                상상력이 풍부한
              </VisionHeader>
              <VisionDesc color="--black" style={{ textAlign: layout549 ? 'center' : '' }}>
                <span>
                  상상은 세상을 바꾸는 힘이 있습니다. 빛나는
                  <br />
                  아이디어를 가진 인재가 세상을 바꾼다고 믿습니다.
                  <br />
                  <br />
                  ps. MBTI가 N일 필요는 없습니다 :&#41;
                </span>
              </VisionDesc>
            </div>
          </Col>
          <Col gap={'1.25rem'} style={{ width: layout549 ? '70vw' : '' }}>
            <div>
              <VisionHeader color="--positive-500" $bold style={{ textAlign: layout549 ? 'center' : '' }}>
                열정 넘치는
              </VisionHeader>
              <VisionDesc color="--black" style={{ textAlign: layout549 ? 'center' : '' }}>
                <span>
                  열정은 불가능을 가능으로 만드는 힘이 있습니다. <br />
                  임플루드 부원들은 활활 타오르는 열정을 가지고 있습니다. <br />
                  <br />
                </span>
              </VisionDesc>
            </div>
            <div>
              <VisionHeader color="--positive-500" $bold style={{ textAlign: layout549 ? 'center' : '' }}>
                진지함과 위트
              </VisionHeader>
              <VisionDesc color="--black" style={{ textAlign: layout549 ? 'center' : '' }}>
                <span>
                  일에 대한 진지함은 잃지 않으면서, 위트있고
                  <br /> 유쾌한 방식으로 문제를 풀어나갑니다.
                </span>
              </VisionDesc>
            </div>
          </Col>
        </Wrap>
      </Wrap>
    </Col>
  )
}

const OldVision = () => {
  return (
    <div>
      <Row justify="center">
        <Col gap="5rem">
          <Title className="Thinking" color="--black" style={{ fontSize: '6rem', textAlign: 'center' }}>
            &quot;상상하는 대로 만들어라&quot;
          </Title>
          <ImpludeDesc color="--black">
            2015년부터 2023년까지 임플루드는 “상상하는 대로 만들어라” 를 모토로, 많은 상상
            <br />
            들을 여러 프로젝트에 녹여내며 훌륭한 성과를 달성하고 있습니다. 상상의 힘을 믿고 나<br />
            아간다면, 당신이 원하는 바에 도달할 수 있을 것 입니다.
          </ImpludeDesc>
        </Col>
      </Row>
    </div>
  )
}

const NewVision = () => {
  return (
    <div>
      <Row justify="center">
        <Col>
          <span style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="src/assets/VisionThumbnail/Vision2.jpg"
              style={{ width: '45.8125rem', height: 'auto', marginBottom: '2rem' }}
              alt="dd"
            />
          </span>
          <ImpludeDesc color="--black">
            우리가 사용하는 평범하고도 대단한 많은 것들은 처음엔 누군가의 상상에 의해 만들어졌
            <br />
            습니다. 세상을 구성하는 상상들에는 특별한 힘이 있습니다. 우리의 상상은 세상을 바꿀 <br />
            수 있습니다.
            <br />
            <br />
            임플루드는 상상의 힘이 세상을 바꿀 수 있다고 믿습니다. 하지만 그저 상상만으로는
            <br />
            세상을 바꿀 수 없습니다. 상상으로 세상을 바꾸기 위해서는 상상을 현실로 만들어낼 수 있<br />
            능력이 필요합니다. 임플루드는 이를 돕기 위해 존재합니다. 당신의 상상이 세상을 바<br />
            꿀 수 있도록, 임플루드는 최고의 팀, 문화 등을 제공합니다.
            <br />
            <br />
            우리의 상상이 세상을 바꿀 수 있도록, 임플루드는 오늘도 달리고 있습니다.
          </ImpludeDesc>
        </Col>
      </Row>
    </div>
  )
}

const VisionVerContainer = styled(Row)`
  border-bottom: solid var(--gray-100) 2px;
`

const VisionHeader = styled(Header1)`
  font-size: 2.5rem;
  margin: 0.7rem 1rem;
`

const VisionDesc = styled(Description)`
  font-size: 1.5rem;
  margin: 0.7rem 1rem;
`

const VisionVer = styled(RecruitText)`
  cursor: pointer;
  padding: 0.75rem;
`

const ImpludeDesc = styled(Description)`
  font-size: 1.7rem;
  margin: 0 6rem;
`
