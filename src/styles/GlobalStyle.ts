import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    *{
        font-family: 'Noto Sans KR', sans-serif;
        list-style: none;
        text-decoration: none;
        margin:0px;
        padding: 0px;
        color: #fff;
    }
`;

export default GlobalStyles;
