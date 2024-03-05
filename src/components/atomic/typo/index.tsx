import { styled } from 'styled-components'

const TypoRef = styled.div<TypoType>`
  color: ${(p) => (p.color ? `var(${p.color})` : `var(--gray-500)`)};
  transition: all 0.3s ease-in-out;
  white-space: nowrap;
  &:hover {
    ${(p) =>
      p.hover &&
      `
        cursor: pointer;
        ${p.hover.color && `color:var(${p.hover.color});`}
        ${p.hover.weight && `font-weight: ${p.hover.weight};`}
    `}
  }
`

export const Title = styled(TypoRef)`
  font-size: 2rem;
  font-style: normal;
  font-weight: ${(p) => (p.$bold ? '900' : '800')};
  line-height: 2.5rem;
`

export const Header1 = styled(TypoRef)`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: ${(p) => (p.$bold ? '700' : '500')};
  line-height: 2.25rem;
`

export const HeaderMenu = styled(Header1)`
  @media (max-width: 825px) {
    
  }
`

export const MenuImage = styled.div`
  display: none;
  @media (max-width: 825px) {
    display: inline-block;
    position: absolute;
    right: 6.25rem;
  }
`

export const Description = styled(TypoRef)`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.25rem;
`