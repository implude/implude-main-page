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
  font-size: 32px;
  font-style: normal;
  font-weight: ${(p) => (p.$bold ? '900' : '800')};
  line-height: 40px;
`

export const Header1 = styled(TypoRef)`
  font-size: 24px;
  font-style: normal;
  font-weight: ${(p) => (p.$bold ? '700' : '500')};
  line-height: 36px;
`
export const Description = styled(TypoRef)`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
`
