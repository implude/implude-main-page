import React from 'react'
import { Header1, Row, Title } from './atomic'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Row style={{ padding: '1rem 6rem' }} gap={'4rem'} justify="space-between">
        <Title color="--gray-900" $bold>
          #IMPLUDE
        </Title>
        <Row gap={'4rem'} align="center">
          <Link to="/history"><Header1 color="--gray-700">역사</Header1></Link>
          <Link to="/vision"><Header1 color="--gray-700">핵심가치</Header1></Link>
          <Link to="/projects"><Header1 color="--gray-700">프로젝트</Header1></Link>
          <Link to="/recruit"><Header1 color="--gray-700">팀원 모집</Header1></Link>
        </Row>
      </Row>
    </>
  )
}

export default Header
