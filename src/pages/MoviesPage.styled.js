import styled from 'styled-components';
import imgHero from '../img/hero/hero-2.jpg';

export const HeroCont = styled.div`
  background-color: #151515;
  color: white;

  height: 50vh;
  padding: 50px;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #151515),
    url(${imgHero});
`;

export const Title = styled.p`
  font-size: 56px;
  color: rgb(236, 50, 38);
  font-weight: 800;
  text-transform: uppercase;
  margin: 0;
`;

export const Text = styled.p`
  font-size: 16px;
  max-width: 500px;
  font-weight: 500;
  color: lightgray;
  margin: 30px 0;
  font-family: 'Roboto', sans-serif;
`;

export const WarningMsg = styled.p`
  margin-left: 50px;
  font-size: 20px;
  font-weight: 500;
  color: lightgray;
  font-family: 'Roboto', sans-serif;
`;



export const InputWraper = styled.div`
  display: flex;
  font-size: 20px;
`;

  export const BtnSearch = styled.button`
    background-color: #4dbf00;
    font-size: 20px;
    color: white;
    padding: 10px 20px;
    border: solid 3px lightgray;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-left: none;
    outline: none;
    font-weight: bold;
  `;

  export const InputSearch = styled.input`
    background-color: inherit;
    font-size: 20px;
    color: white;
    padding: 10px 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    border: solid 3px lightgray;
    border-right: none;
    /* outline: none; */
    font-weight: bold;

    &:focus-visible {
      /* Добавьте стили для активированного состояния, если нужно */
      outline: none; /* Убираем внутреннюю обводку в Chrome и Firefox */
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Пример тени вокруг инпута */
    }
  `;