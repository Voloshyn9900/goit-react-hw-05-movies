import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NameMov = styled.span`
  background-color: #333;
  min-width: 230px;
  color: white;
  padding: 0 10px;
  font-size: 26px;
  font-weight: bold;
  position: absolute;
  top: 10%;
  left: 40px;
  opacity: 0;
  transition: 1s all ease-in-out;
`;

export const DescriptionMov = styled.p`
  background-color: #333;
  color: white;
  padding: 10px;
  font-size: 14px;
  position: absolute;
  top: 60%;
  left: 40px;
  width: 230px;
  opacity: 0;
  transition: 1s all ease-in-out;
`;

export const MovieItemStyle = styled.div`
  margin-right: 30px;
  position: relative;
  transition: all 1s ease-in-out;
  
  &:hover {
    ${NameMov}, ${DescriptionMov} {
      opacity: 1;
    }
  }

  &:hover {
    transform: scale(1.2);
    margin: 0 30px;
    opacity: 0.5;
    margin-right: 55px;
  }
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
`;

