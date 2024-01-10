import styled from 'styled-components';
import imgHero from '../img/hero/hero-3.jpg';
import { NavLink } from 'react-router-dom';

export const HeroCont = styled.div`
  display: flex;

  background-color: #151515;
  color: white;

  /* height: 80vh;  !!!!!*/
  height: 100vh;
  padding: 50px 0px 50px 50px;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #151515),
    url(${imgHero});
  /* background-size: cover; */
  background-position: center; 

  /* @media (max-width: 768px) {
    background-position: left; 
    // Сдвигаем влево при уменьшении ширины окна */
`;

export const Title = styled.p`
  width: 80%;
  margin-bottom: 20px;
  font-size: 56px;
  color: rgb(236, 50, 38);
  font-weight: 800;
  text-transform: uppercase;
  margin: 0;
`;

export const Text = styled.p`
  background-color: rgba(21, 21, 21, 0.4);
  border-radius: 20px;
  width: 80%;
  padding: 10px;
  margin: 0px;
  margin-bottom: 40px;
  font-size: 16px;
  font-weight: 500;
  color: lightgray;
  font-family: 'Roboto', sans-serif;
`;

export const Wraper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const ImgMovie = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
  transition: all 1s ease-in-out;
  width: 400px;
  height: 500px;
  object-fit: cover;
  border-radius: 20px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  background-color: #4dbf00;
  font-size: 18px;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-weight: bold;
`;

export const ListLink = styled.ul`
  display: flex;
  margin-bottom: 40px;
  gap: 30px;
`;

export const ItemLink = styled.li``;
