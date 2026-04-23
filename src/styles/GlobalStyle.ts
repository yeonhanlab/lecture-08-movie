
// GlobalStyle이라고 하는 이 변수는 "글로벌 CSS" 긴으을 리액트에서 사용하기 위해 만든 변수
// 얘는 return이 없으니까. 함수가 컴포넌트가 없으니까 단순한 ts파일인 것이다.

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    a {
        text-decoration: none;
        color: inherit;          /* inherit : 부모 요소의 색상을 따르겠음 */
    }

`;

export default GlobalStyle;