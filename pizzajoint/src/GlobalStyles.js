import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
  font-family: 'Quicksand';
  src: url('/Quicksand-Light.woff2') format('woff2'),
    url('/Quicksand-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}

/* reset & common styles */
body,
ul,
h1,
h2,
h3,
p,
button,
a,
div {
  margin: 0;
  padding: 0;
  color: white;
  font-family: 'Quicksand';
  letter-spacing: 2px;
  list-style-type: none;
  text-decoration: none;
}
body {
  background: rgb(100, 0, 123);
  background: radial-gradient(
    circle,
    rgba(100, 0, 123, 1) 0%,
    rgba(62, 20, 86, 1) 100%
  );
  
}
`;

export default GlobalStyles;