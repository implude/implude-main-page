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
      <Container align="center" width={'100%'} margin={'13.75rem auto'}>
        <Title color={'--gray-black'} style={{ margin: ' 0 8.5rem 8.5rem', transition: 'none' }}>
          {id !== undefined ? '다른 프로젝트 둘러보기' : '진행한 프로젝트'}
        </Title>
        <Wrap justify="center" padding={'0 0 0 3.625rem'}>
          {[...projects].reverse().map((project) => {
            return (
              <>
                {String(project.id) !== id && (
                  <Link to={'/projects/' + project.id} style={{ cursor: 'pointer', margin: '0 3.625rem 3.625rem 0' }}>
                    <ProjectImg src={imageFolderPath + project.imageUrl[0]} alt={project.title} />
                  </Link>
                )}
              </>
            )
          })}
        </Wrap>
      </Container>
    </>
  )
}

const Container = styled(Col)`
  width: calc(100%-7.25rem);
  paddingleft: '3.625rem';
  max-width: 1758px;
`

const ProjectImg = styled.img`
  max-width: 33rem;
  border-radius: 1.5rem;
`
const EmptyProjectImg = styled(Row)`
  background: var(--gray-100);
  border-radius: 1.5rem;
`
