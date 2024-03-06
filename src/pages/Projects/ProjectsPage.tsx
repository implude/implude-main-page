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
      <Container align="center" gap={'7.5rem'} width={'106.25rem'} margin={'13.75rem auto'}>
        <Title color={'--gray-black'}>{id !== undefined ? '다른 프로젝트 둘러보기' : '진행한 프로젝트'}</Title>
        <Wrap gap={'3.625rem'} justify="center">
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
            <EmptyProjectImg height={'18.563rem'} width={'33rem'} justify="center" align="center">
              <Implude />
            </EmptyProjectImg>
          ))}
        </Wrap>
      </Container>
    </>
  )
}

const Container = styled(Col)`
  @media (max-width: 1800px) {
    width: 100%;
    padding: 0 1rem;
  }
`

const ProjectImg = styled.img`
  height: 18.563rem;
  border-radius: 1.5rem;
`
const EmptyProjectImg = styled(Row)`
  background: var(--gray-100);
  border-radius: 1.5rem;
`
