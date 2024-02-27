import styled from "styled-components";
import { widthAndHeight } from "../interfaces";
import { rowColTypes } from "./container";



export const Row = styled.div<rowColTypes>`
  display: flex;
  ${(props) => props.width && `width: ${props.width};`}
  ${(props) => props.justify && `justify-content: ${props.justify};`}
  ${(props) => props.align && `align-items: ${props.align};`}
  ${(props) => props.gap && `gap: ${props.gap};`}
`;

export const Col = styled.div<rowColTypes>`
  display: flex;
  flex-direction: column;
  ${(props) => props.width && `width: ${props.width};`}
  ${(props) => props.justify && `justify-content: ${props.justify};`}
  ${(props) => props.align && `align-items: ${props.align};`}
  ${(props) => props.gap && `gap: ${props.gap};`}
`;

export const Blank = styled.div<widthAndHeight>`
    width:${p=>p.width && p.width};
    height:${p=>p.height && p.height};
`