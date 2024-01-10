import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NameMov = styled.span`
  margin-top: 10px;
  text-align: center;
  max-width: 270px;
  color: white;
  font-size: 22px;
  font-weight: bold;


  left: 40px;
  opacity: 0.7;
  
`;

export const DescriptionMov = styled.p`
  color: white;
  font-size: 14px;
  max-width: 270px;
  opacity: 0.7;
  transition: 1s all ease-in-out;
  margin-bottom: auto;
`;

export const MovieItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-width: 270px;
  border: 2px solid grey;
  border-radius: 30px;
  height: 350px;
  transition: all 1s ease-in-out;

 
`;

export const ImgMovie = styled.img`
  transition: all 1s ease-in-out;
  width: 270px;
  height: 200px;
  object-fit: cover;
  border-radius: 20px;
`;

export const LinkStyle = styled(Link)`
  text-transform: none;
  text-decoration: none;
`;
