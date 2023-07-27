import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        min-width: 320px;
        min-height: 100vh;
        background-color: #fff;
        color:#2d2d2d;
        font-family: 'Roboto Slab', serif;
    }
    @media (max-width: 750px) {
        body{
            
        }
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Works for Firefox */
    input[type="number"] {
    -moz-appearance: textfield;
    }
   
`;

export default Global;