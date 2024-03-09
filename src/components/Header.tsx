import React, { useState } from 'react'
import styled from 'styled-components'
import { Header1, Row, Title, Wrap, Detail } from './atomic'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  return (
    <>
      <Wrap padding="0.75rem 2.438rem" gap={'0 3.25rem'} justify="space-between" align="center">
        <Link to="/">
          <Header1 color="--gray-900" className="logo-text" $bold>
            #IMPLUDE
          </Header1>
        </Link>
        <MenuImage
          onClick={() => {
            setIsMenuOpened(!isMenuOpened)
          }}
        >
          <Menu />
        </MenuImage>
        <MenuWrap gap={'3.25rem'} align={'center'} open={isMenuOpened}>
          <Link to="/history">
            <HeaderMenu color="--gray-700" onClick={() => {setIsMenuOpened(false)}}>역사</HeaderMenu>
          </Link>
          <Link to="/vision">
            <HeaderMenu color="--gray-700" onClick={() => {setIsMenuOpened(false)}}>핵심가치</HeaderMenu>
          </Link>
          <Link to="/projects">
            <HeaderMenu color="--gray-700" onClick={() => {setIsMenuOpened(false)}}>프로젝트</HeaderMenu>
          </Link>
          <Link to="/recruit">
            <HeaderMenu color="--gray-700" onClick={() => {setIsMenuOpened(false)}}>팀원 모집</HeaderMenu>
          </Link>
        </MenuWrap>
      </Wrap>
    </>
  )
}

const HeaderMenu = styled(Detail)`
  &:hover {
    color: var(--brand-600);
  }
`

const MenuWrap = styled(Wrap)<{ open?: boolean }>`
  @media (max-width: 388px) {
    display: ${(p) => (p.open ? '' : 'none')};
    width: 6.25rem;
    gap: 20px;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
`

const MenuImage = styled.div`
  display: none;
  @media (max-width: 388px) {
    display: inline-block;
    position: relative;
    top: 0.4rem;
    width: 50%;
    margin-left: 10rem;
    text-align: right;
  }
  @media (max-width: 388px) {
    display: inline-block;
    position; relative;
    top: 0.4rem;
    width: 6rem;
  }
`

export default Header
