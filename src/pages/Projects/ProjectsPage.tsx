import React from 'react'
import styled, { css } from 'styled-components'
import { Link, Outlet, useParams } from 'react-router-dom'
import { Col, Row, Wrap, Title, Header1, Description } from '../../components/atomic'
import Implude from '../../assets/implude.svg?react'
import { imageFolderPath, projects } from './ProjectData.json'

export default function ProjectsPage() {
  const { id } = useParams()

  return (
    <>
      <Outlet />
      <Col align="center" gap={'10rem'} width={'100%'} margin={'18rem auto'}>
        <Title color={'--gray-black'}>{id !== undefined ? '다른 프로젝트 둘러보기' : '진행한 프로젝트'}</Title>
        <Wrap gap={'3rem'} justify="center">
          {[...projects].reverse().map((project) => {
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
            <EmptyProjectImg height={'18rem'} width={'33rem'} justify="center" align="center">
              <Implude />
            </EmptyProjectImg>
          ))}
        </Wrap>
      </Col>
    </>
  )
}

const ProjectImg = styled.img`
  height: 18rem;
  border-radius: 2rem;
`
const EmptyProjectImg = styled(Row)`
  background: var(--gray-100);
  border-radius: 2rem;
`
