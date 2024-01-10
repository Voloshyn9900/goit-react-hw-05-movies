import { styled } from 'styled-components';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';


export const MovieListCont = styled.div`
  padding: 0 35px;
`;

export const MovieListWraper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const MovieListStyle = styled.div`
  display: flex;
  align-items: center;
  height: 300px;
  transform: translateX(0);
  transition: all 1s ease-in-out;
`;

export const SvgArrow = styled(MdOutlineKeyboardArrowRight)`
  font-size: 120px;
  position: absolute;
  top: 90px;
  right: 0;
  color: lightgray;
  opacity: 0.9;
  cursor: pointer;
`;
