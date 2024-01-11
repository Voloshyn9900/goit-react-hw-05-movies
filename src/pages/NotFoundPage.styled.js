import styled from 'styled-components';
import imgHero from '../img/hero/hero-1.jpg';
import { Link } from 'react-router-dom';

export const HeroCont = styled.div`
display: flex;
  background-color: #151515;
  color: white;
  align-items: center;
  justify-content: center;
   
  height: 100vh;
  /* padding: auto; */

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #151515),
    url(${imgHero});
`;

export const Title = styled.p`
/* margin: auto; */
  font-size: 40px;
  color: white;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0;
`;

export const LinkStyle = styled(Link)`
  color: white;
  font-size: 40px;
  color: white;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0;
`;


