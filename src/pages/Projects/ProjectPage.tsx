import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { Col, Row, Wrap, Title, Header1, Description, RecruitText } from '../../components/atomic'
import { imageFolderPath, projects } from './ProjectData.json'

export default function ProjectPage() {
  const { id } = useParams()
  const projectData = projects.find((project) => String(project.id) === id)
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' })
  return (
    <Col margin={'13.75rem 0'}>
      <Col gap={'5rem'} padding={'3.75rem 7.5rem 7.5rem 7.5rem'}>
        <Col gap={'0.75rem'}>
          <Header1 color={'--gray-300'}>{projectData.year}</Header1>
          <Title color={'--gray-black'}>{projectData.title}</Title>
        </Col>
        <Wrap gap="3.75rem" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
          {[...projectData.imageUrl].map((url, i) => {
            return (
              <img
                key={i}
                src={imageFolderPath + url}
                alt={url}
                style={{
                  height: isMobile ? 'auto' : '21.375rem',
                  width: isMobile ? '100%' : 'auto',
                  borderRadius: '1.6rem',
                }}
              />
            )
          })}
        </Wrap>
        <Description color={'--gray-black'}>
          {projectData.detail.map((x) => (
            <>
              {x}
              <br />
            </>
          ))}
        </Description>
        <Col>
          {projectData?.achievement ? (
            <Wrap gap="6.25rem" align="center" margin="0 0 8.75rem 0">
              <Title color="--gray-black">성과</Title>
              <Wrap gap="1rem" justify="center">
                {projectData.achievement.map((x) => (
                  <Header1 $bold color={x.highlight ? '--brand-600' : '--gray-black'}>
                    {x.content}
                  </Header1>
                ))}
              </Wrap>
            </Wrap>
          ) : null}
          {projectData.media ? (
            <Wrap gap="6.25rem" margin="0 0 8.75rem 0">
              <Title color="--gray-black">언론 노출</Title>
              <Link to="https://game.donga.com/105214/">
                <Col>
                  <Row gap="2rem" align="center">
                    <RecruitText color="--brand-600">{projectData?.media.press}</RecruitText>
                    <Description color="--gray-black">{projectData?.media.date}</Description>
                  </Row>
                  <RecruitText $bold highlight={true} style={{ textOverflow: 'ellipsis' }} color="--gray-black">
                    {projectData.media.title}
                  </RecruitText>
                </Col>
              </Link>
            </Wrap>
          ) : null}
        </Col>
      </Col>
    </Col>
  )
}
