import React, { Suspense } from 'react'
import styled from 'styled-components'

const HeaderBanner = () => {
  return (
    <>
      <Container>
        <Suspense>
          <img src={'/img/ImpludeBanner.png'} />
        </Suspense>
      </Container>
    </>
  )
}

const Container = styled.div`
  img {
    width: 100%;
  }
`

export default HeaderBanner
