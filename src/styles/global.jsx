import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=REM:wght@300;500&family=Roboto&display=swap');

    *{
        margin: 0;
        padding: 0;
    }
    body {
        min-width: 320px;
        min-height: 100vh;
        background-color: #242424;
        color:#2d2d2d;
        font-family: 'Roboto', sans-serif;
    }
`;

export default Global;