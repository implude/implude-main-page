import React, { useState } from 'react'
import { Header1, Row, Title, Wrap, HeaderMenu, MenuWrap, MenuImage } from './atomic'

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(0)

  return (
    <>
      <Row style={{ padding: '12px 71px' }} gap={'52px'} justify="space-between">
        <Title color="--gray-900" $bold>
          #IMPLUDE
        </Title>
        <MenuImage
          onClick={() => {
            setIsMenuOpened(1 - isMenuOpened)
          }}
        >
          {/* <img src=""/> */}
          메뉴 이미지
        </MenuImage>
        <MenuWrap gap={'52px'} align="center" open={isMenuOpened}>
          <HeaderMenu color="--gray-700">역사</HeaderMenu>
          <HeaderMenu color="--gray-700">핵심가치</HeaderMenu>
          <HeaderMenu color="--gray-700">프로젝트</HeaderMenu>
          <HeaderMenu color="--gray-700">팀원 모집</HeaderMenu>
        </MenuWrap>
      </Row>
    </>
  )
}

export default Header
