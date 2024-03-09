declare module '*.svg?react' {
    import { ReactElement, SVGProps } from 'react';
    const content: (props: SVGProps<SVGElement>) => ReactElement;
    export default content;
  }
declare type TypoType = {
  color?: string
  $bold?: boolean
  hover?: {
    color?: string
    weight?: string
  }
  activated?: boolean
}
