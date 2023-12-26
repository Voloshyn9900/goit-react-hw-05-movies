import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Container = styled.div`
  max-width: 1400px;
  min-height: 700px;
  margin-left: auto;
  margin-right: auto;

  border: 3px solid ${props => props.theme.colors.lightBlue};
  border-radius: ${props => props.theme.radii.md};
`;

export const ContainerQuiz = styled.div`
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  /* display: flex;
  flex-direction: row;
  justify-content: center; */
`;

export const PhoneBook = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-top: 16px;
  margin-bottom: 26px;
  text-align: center;
`;

export const StyledLink = styled(NavLink)`
  padding: 3px 6px;

  font-size: 20px;
  font-weight: 700;
  line-height: 1.71;
  color: black;
  text-decoration: none;
  background-color: transparent;
  border-radius: 4px;
  border: 3px solid ${props => props.theme.colors.lightGrayHover};

  &:hover {
    border: 3px solid ${props => props.theme.colors.lightBlueHover};
  }

  &.active {
    border: 3px solid ${props => props.theme.colors.lightBlueHover};
    background-color: rgba(33, 150, 243, 0.3);
  }
`;

export const ListLink = styled.ul`
  display: flex;
  gap: 30px;
`;

export const ItemLink = styled.li`
`;