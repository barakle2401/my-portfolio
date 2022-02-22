import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
 
    scroll-behavior: smooth;
    
    ${({ theme }) => theme.utils.scrollbar};
  }

  #root {
    height: inherit;
  }

  *, *:before, *:after {
  box-sizing: inherit;
  }
  
  body {
    margin: 0;

    height: 100%;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    transition: all 0.2s;
    &:hover {
      opacity: 0.6
    }
    &:visited {
      color: inherit;
    }
  }

  ul {
    list-style: none;
  }

  li {
    padding: 0;
    margin: 0;
  }
  .d-flex{
    display: flex;
  }
  .flex-column{
    flex-direction: column;
  }
  .border{
    border:1px solid red;
  }
  .h-100{
    height:100%;
  }
  .align-center{
    align-items: center;
  }
  .container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  }
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
  `;

export default GlobalStyle;
