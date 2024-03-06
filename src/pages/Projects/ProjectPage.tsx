import React from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row, Wrap, Title, Header1, Description } from '../../components/atomic'
import { imageFolderPath, projects } from './ProjectData.json'

export default function ProjectPage() {
  const { id } = useParams()
  const projectData = projects.find((project) => String(project.id) === id)
  console.log(projectData)
  return (
    <Col margin={'13.75rem 0'}>
      <Col gap={'5rem'} padding={'3.75rem 7.5rem 7.5rem 7.5rem'}>
        <Col gap={'0.75rem'}>
          <Header1 color={'--gray-300'}>2022</Header1>
          <Title color={'--gray-black'}>학습 환경 개선 프로젝트, ASD</Title>
        </Col>
        <Row gap="3.75rem">
          {[...projectData.imageUrl].map((url, i) => {
            console.log(imageFolderPath + url)
            return (
              <img
                key={i}
                src={imageFolderPath + url}
                alt={url}
                style={{ height: '21.375rem', borderRadius: '1.6rem' }}
              />
            )
          })}
        </Row>
        <Description color={'--gray-black'}>{projectData?.detail}</Description>
      </Col>
      <Col></Col>
    </Col>
  )
}
