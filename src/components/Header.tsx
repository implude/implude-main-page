import React, { useState } from 'react'
import styled from 'styled-components'
import { Header1, Row, Title, Wrap, Detail } from './atomic'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  return (
    <>
      <Row style={{ padding: '0.75rem 2.438rem', flexWrap: 'wrap', gap: '1rem' }} gap={'3.25rem'} justify="space-between" align="start">
        <Link to="/">
          <Header1 color="--gray-900" $bold>
            #IMPLUDE
          </Header1>
        </Link>
        <MenuImage
          onClick={() => {
            setIsMenuOpened(!isMenuOpened)
          }}
        >
          메뉴 이미지
        </MenuImage>
        <MenuWrap gap={'3.25rem'} align="center" open={isMenuOpened}>
          <Link to="/history">
            <HeaderMenu color="--gray-700">역사</HeaderMenu>
          </Link>
          <Link to="/vision">
            <HeaderMenu color="--gray-700">핵심가치</HeaderMenu>
          </Link>
          <Link to="/projects">
            <HeaderMenu color="--gray-700">프로젝트</HeaderMenu>
          </Link>
          <Link to="/recruit">
            <HeaderMenu color="--gray-700">팀원 모집</HeaderMenu>
          </Link>
        </MenuWrap>
      </Row>
    </>
  )
}

const HeaderMenu = styled(Detail)`
  &:hover {
    color: var(--brand-600);
    font-size: 1.7rem;
  }
`

const MenuWrap = styled(Wrap)<{ open?: boolean }>`
  @media (max-width: 890px) {
    display: ${(p) => (p.open ? '' : 'none')};
    width: 6.25rem;
    gap: 20px;
    margin-top: 3rem;
  }
`

const MenuImage = styled.div`
  display: none;
  @media (max-width: 890px) {
    display: inline-block;
    position: relative;
    top: 0.7rem;
  }
`

export default Header
