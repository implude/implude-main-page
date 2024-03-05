import React, { useState } from 'react'
import { Header1, Row, Title, Wrap, HeaderMenu, MenuWrap, MenuImage } from './atomic'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(0)

  return (
    <>
      <Row style={{ padding: '0.75rem 4.438rem' }} gap={'3.25rem'} justify="space-between">
        <Link to="/">
          <Title color="--gray-900" $bold>
            #IMPLUDE
          </Title>
        </Link>
        <MenuImage
          onClick={() => {
            setIsMenuOpened(1 - isMenuOpened)
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

export default Header
