import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(189, 190, 192);
}

body::-webkit-scrollbar {
  width: 0.5em; /* Ширина скроллбара, если нужно отображение на некоторых браузерах */
}

body::-webkit-scrollbar-thumb {
  background-color: transparent; /* Цвет ползунка */
}

body::-webkit-scrollbar-track {
  background-color: transparent; /* Цвет фона скроллбара */
}

/* Добавьте стили для контента */
.scrollable-content {
  overflow-y: scroll; /* Включить скроллинг для контента */
  height: 100vh; /* Например, задайте высоту 100% видимой области (viewport) */
  padding-right: 17px; /* Компенсировать ширину скроллбара */
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    text-decoration: none;
}


li {
  list-style-type: none;
}

ul {
  margin-left: 0;
  padding-left: 0;
}

input{
  display: block;
}

button{
  display: block;
}
`;
