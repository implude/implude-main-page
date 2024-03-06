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
  font-size: 4rem;
  font-style: normal;
  font-weight: ${(p) => (p.$bold ? '900' : '800')};
  line-height: 4.75rem;
`

export const Header1 = styled(TypoRef)`
  font-size: 3rem;
  font-style: normal;
  font-weight: ${(p) => (p.$bold ? '700' : '500')};
  line-height: 3.563rem;

  color: ${(p) => p.activated && 'var(--gray-black)'};
`

export const Header2 = styled(TypoRef)`
  font-size: 2.375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.813rem;
`

export const Description = styled(TypoRef)`
  font-size: 2rem;
`

export const Detail = styled(TypoRef)`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.813rem;
`

export const RecruitText = styled(TypoRef)<{ highlight?: Boolean; $bold?: Boolean }>`
  font-size: ${(p) => (p.highlight ? '2.5rem' : '2.25rem')};
  font-weight: ${(p) => (p.highlight ? '700' : '500')};
  font-weight: ${(p) => (p.$bold ? '700' : '500')};
  font-style: normal;
  text-wrap: wrap;
  li {
    text-indent: -3rem;
    margin-left: 3rem;
  }
  line-height: 167%;
`
