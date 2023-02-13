import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
}

body{
  background: #b8b8d1;
  color: #fff;
  -webkiy-font-smoothing: antialiased;
}

body, input, button{
    font-family: 'Poppins', serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}

ul,li{
    list-style: none;
}

input{
    border: none;
    background: none;
}
`;