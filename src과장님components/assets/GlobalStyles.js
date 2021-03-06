import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    .app{
        width:100%; max-width:600px;
        padding:20px;
    }
    .app h1{
        font-size:24px;
        border-bottom:1px solid #000;
    }
`;

export default GlobalStyled;