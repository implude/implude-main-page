import { styled } from "styled-components";



const TypoRef = styled.div<TypoType>`
    color:${p=>p.color ? `var(${p.color})` : `var(--gray-500)`};
`

export const Title = styled(TypoRef)`
    font-size:32px;
    font-style:normal;
    font-weight:800;
    line-height: 40px;
`

export const Header = styled(TypoRef)`
    font-size:24px;
    font-style:normal;
    font-weight:700;
    line-height: 36px;
`
export const Description = styled(TypoRef)`
    font-size:14px;
    font-style:normal;
    font-weight:600;
    line-height: 36px;
`

