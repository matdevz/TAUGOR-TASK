import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system,  'Segoe UI', Roboto, sans-serif
    }
    :root {
        --color-primary: #2981C4
        --color-secondary: #FFFFFF
    }
`;

export default GlobalStyles;
