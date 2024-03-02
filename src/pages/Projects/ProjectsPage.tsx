import React from 'react'
import styled, { css } from 'styled-components'
import { Link, Outlet, useParams } from 'react-router-dom'
import { Col, Row, Wrap, Title, Header1, Description } from '../../components/atomic'
import Implude from '../../assets/implude.svg?react'
import { imageFolderPath, projects } from './ProjectData.json'

export default function ProjectsPage() {
  const { id } = useParams()
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

  console.log(projects)
  return (
    <>
      <Outlet />
      <Col align="center" gap={'120px'} width={'1700px'} margin={'220px auto'}>
        <Title color={'--gray-black'}>{id !== undefined ? '다른 프로젝트 둘러보기' : '진행한 프로젝트'}</Title>
        <Wrap gap={'58px'} justify="center">
          {projects.reverse().map((project, i) => {
            console.log(project, project.id)
            return (
              <>
                {String(project.id) !== id && (
                  <Link to={'/projects/' + project.id} style={{ cursor: 'pointer' }}>
                    <ProjectImg src={imageFolderPath + project.imageUrl[0]} alt={project.title} />
                  </Link>
                )}
              </>
            )
          })}
          {[...Array(((projects.length - Number(Boolean(id))) * 2) % 3)].map(() => (
            <EmptyProjectImg height={'297px'} width={'528px'} justify="center" align="center">
              <Implude />
            </EmptyProjectImg>
          ))}
        </Wrap>
      </Col>
    </>
  )
}

const ProjectImg = styled.img`
  height: 297px;
  border-radius: 24px;
`
const EmptyProjectImg = styled(Row)`
  background: var(--gray-100);
  border-radius: 24px;
`
