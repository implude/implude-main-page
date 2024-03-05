import React from 'react'
import { Header1, Row, Title } from './atomic'

const Header = () => {
  return (
    <>
      <Row style={{ padding: '1rem 6rem' }} gap={'4rem'} justify="space-between">
        <Title color="--gray-900" $bold>
          #IMPLUDE
        </Title>
        <Row gap={'4rem'} align="center">
          <Header1 color="--gray-700">역사</Header1>
          <Header1 color="--gray-700">핵심가치</Header1>
          <Header1 color="--gray-700">프로젝트</Header1>
          <Header1 color="--gray-700">팀원 모집</Header1>
        </Row>
      </Row>
    </>
  )
}

export default Header
