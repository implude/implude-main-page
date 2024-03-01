import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Col, Row, Wrap, Title, Header1, Description } from '../../components/atomic'
import Implude from '../../assets/implude.svg?react'

export default function ProjectsPage() {
  const thumbnailFolderPath = './src/assets/ProjectThumbnail/'
  const thumbnailNames = [
    'JipGaGoSipDa.jpg',
    'DAYCUBE.jpg',
    'MOLA.jpg',
    'JOIN.jpg',
    'DINEON.jpg',
    'ITNun.jpg',
    'ASD.jpg',
    'Yummy.jpg',
    'MK1.jpg',
    'VOAH.jpg',
  ]

  return (
    <Row style={{ padding: '220px 0' }}>
      <Col align="center" gap={'120px'}>
        <Title color={'--gray-black'}>진행한 프로젝트</Title>
        <Row justify="center">
          <Wrap gap={'58px'} style={{ flexBasis: '1700px' }}>
            {thumbnailNames.reverse().map((thumbnailName) => (
              <Link
                to={'https://www.youtube.com/watch?v=PYtsD-X_UiQ&pp=ygUZYm9jY2hpIHRoZSByb2NrIG11cmkgbXVyaQ%3D%3D'}
                style={{ cursor: 'pointer' }}
              >
                <ProjectImg src={thumbnailFolderPath + thumbnailName} alt={thumbnailName} />
              </Link>
            ))}
            {[...Array((thumbnailNames.length * 2) % 3)].map(() => (
              <EmptyProjectImg height={'297px'} width={'528px'} justify="center" align="center">
                <Implude />
              </EmptyProjectImg>
            ))}
          </Wrap>
        </Row>
      </Col>
    </Row>
  )
}

const ProjectImg = styled.img`
  height: 297px;
  width: 528px;
  border-radius: 24px;
`
const EmptyProjectImg = styled(Row)`
  background: var(--gray-100);
  border-radius: 24px;
`
