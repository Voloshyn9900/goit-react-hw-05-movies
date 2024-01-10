import styled from 'styled-components';
import imgHero from '../img/hero/hero-1.jpg';

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

export const BtnHero = styled.button`
  background-color: #4dbf00;
  font-size: 18px;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-weight: bold;
`;

