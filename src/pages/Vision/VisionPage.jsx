import { useState } from 'react'
import { Blank, Col, Description, Header1, Row, Title } from '../../components/atomic'

export default function VisionPage() {
  const [RendComponent, setRendComponent] = useState(<OldVision />)
  let HeadColV1 = '--black'
  let HeadColV2 = '--gray-400'

  const Ver1 = () => {
    setRendComponent(<OldVision />)
    HeadColV1 = '--black'
    HeadColV2 = '--gray-400'
  }

  const Ver2 = () => {
    setRendComponent(<NewVision />)
    HeadColV1 = '--gray-400'
    HeadColV2 = '--black'
  }

  return (
    <div style={{ padding: '13.75rem 0' }}>
      <Col gap="6.25rem">
        <Row justify="center" gap="4.75rem">
          <Title color="--black">비전</Title>
          <Col gap="0.625rem">
            <Row justify="right" gap="5.375rem">
              <Header1 color={HeadColV1} $bold onClick={Ver1}>
                임플루드 비전 1.0
              </Header1>
              <Header1 color={HeadColV2} $bold onClick={Ver2}>
                임플루드 비전 2.0
              </Header1>
            </Row>
            <div style={{ width: '68.3125rem', height: '0.125rem', background: 'gray' }}></div>
          </Col>
        </Row>
        {RendComponent}
        <Row gap={'3rem'} justify="center">
          <Title color="--black">핵심 가치</Title>
          <Blank width="9.375rem" height="1.25rem" />
          <Col gap={'1.25rem'}>
            <div>
              <Header1 color="--brand-600" $bold>
                팀워크
              </Header1>
              <Description color="--black">
                임플루드는 팀워크를 가장 중요한 요소로 생각합니다.
                <br />
                혼자서는 할 수 없던 일도 여러 인재가 모이면
                <br />
                할 수 있게 됩니다. 모두가 서로의 단점을 보완하며 <br />
                각자의 역량을 인정하는 팀을 지향합니다.
              </Description>
            </div>
            <div>
              <Header1 color="--brand-600" $bold>
                자유롭고 편한 소통
              </Header1>
              <Description color="--black">
                수직적이지 않고 수평적인 분위기를 지향하며, 모두가
                <br />
                자유롭게 질문하고 의견을 제시하는 분위기를 추구합니다.
              </Description>
            </div>
            <div>
              <Header1 color="--brand-600" $bold>
                많은 실전 경험
              </Header1>
              <Description color="--black">
                임플루드는 책상에 앉아서 배우는 내용보다 실제로
                <br />
                적용해보며 배우는 것이 많다고 생각합니다. 보다
                <br />
                많은 실전 경험을 통해 압축적인 성장을 하는 것을
                <br />
                지향합니다.
              </Description>
            </div>
          </Col>
          <Col gap={'1.25rem'}>
            <div>
              <Header1 color="--brand-600" $bold>
                실패를 즐기는
              </Header1>
              <Description color="--black">
                프로젝트에서 실패는 성공의 과정에 필연적인 존재
                <br />
                입니다. 실패를 통한 깨달음과 성장만 있을 뿐, 실패는
                <br />
                두려운 존재가 아닙니다.
                <br />.
              </Description>
            </div>
            <div>
              <Header1 color="--brand-600" $bold>
                지속적인 혁신
              </Header1>
              <Description color="--black">
                어제의 내가 오늘의 나와 같다면, 유지가 아닌 퇴행
                <br />
                입니다. 지속적인 혁신으로 세상을 바꿉니다.
              </Description>
            </div>
            <div>
              <Header1 color="--brand-600" $bold>
                깊은 신뢰
              </Header1>
              <Description color="--black">
                임플루드는 서로를 깊게 신뢰하고, 더 나아가 서로의
                <br />
                상상이 실현될 것이라는 것에 확신을 가지고 있습니다.
                <br />
                불가능을 가능하다고 믿는 사람이 모이면 불가능했던
                <br />
                것도 가능하게 됩니다.
              </Description>
            </div>
          </Col>
        </Row>
      </Col>
      <Blank height="5.75rem" width="1.25rem" />
      <Row gap="5.125rem" justify="center">
        <Title color="--black">인재상</Title>
        <Blank width="9.375rem" />
        <Col gap={'1.25rem'}>
          <div>
            <Header1 color="--positive-500" $bold>
              책임감 있는
            </Header1>
            <Description color="--black">
              팀워크에서 가장 중요한 점은 책임감 입니다. 내가
              <br />
              맡은 바를 책임감 있게 수행해야 성공적인 프로젝트가
              <br />
              진행될 수 있습니다.
            </Description>
          </div>
          <div>
            <Header1 color="--positive-500" $bold>
              상상력이 풍부한
            </Header1>
            <Description color="--black">
              상상은 세상을 바꾸는 힘이 있습니다. 빛나는
              <br />
              아이디어를 가진 인재가 세상을 바꾼다고 믿습니다.
              <br />
              <br />
              ps. MBTI가 N일 필요는 없습니다.
            </Description>
          </div>
        </Col>
        <Col gap={'1.25rem'}>
          <div>
            <Header1 color="--positive-500" $bold>
              열정 넘치는
            </Header1>
            <Description color="--black">
              열정은 불가능을 가능하게 만드는 힘이 있습니다. <br />
              임플루드 부원들은 활활 타오르는 열정을 가지고 있습니다. <br />.
            </Description>
          </div>
          <div>
            <Header1 color="--positive-500" $bold>
              진지함과 위트
            </Header1>
            <Description color="--black">
              일에 대한 진지함은 잃지 않으면서, 위트있고
              <br /> 유쾌한 방식으로 문제를 풀어나갑니다.
            </Description>
          </div>
        </Col>
      </Row>
    </div>
  )
}

const OldVision = () => {
  return (
    <div>
      <Row justify="center">
        <Blank width="25rem" height="1.25rem" />
        <Col gap="5rem">
          <Title color="--black">상상하는 대로 만들어라</Title>
          <Description color="--black">
            2015년부터 2023년까지 임플루드는 “상상하는 대로 만들어라” 를 모토로, 많은 상상
            <br />
            들을 여러 프로젝트에 녹여내며 훌륭한 성과를 달성하고 있습니다. 상상의 힘을 믿고 나<br />
            아간다면, 당신이 원하는 바에 도달할 수 있을 것 입니다.
          </Description>
        </Col>
      </Row>
    </div>
  )
}

const NewVision = () => {
  return (
    <div>
      <Row justify="center">
        <Blank width="25rem" height="1.25rem" />
        <Col>
          <div style={{ width: '37.8125rem', height: '16.5rem', backgroundColor: 'blue' }}>AA</div>
          <Blank height="5rem" />
          <Description color="--black">
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
          </Description>
        </Col>
      </Row>
    </div>
  )
}
