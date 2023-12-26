import styled from 'styled-components';
import imgHero from '../hero.jpg';

import { NavLink } from 'react-router-dom';

export const SectionHeader = styled.section`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;

  position: fixed;
  border-bottom: solid 3px rgb(189, 190, 192);

  /* background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.7) 100%,
    transparent
  ); */

  background: rgb(15, 15, 16);
`;

export const SectionFooter = styled.section`
  width: 100%;
  height: 100px;
  padding-top: 8px;
  padding-bottom: 8px;

  border-top: solid 3px rgb(189, 190, 192);

  background: rgb(15, 15, 16);
`;

export const SectionMain = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
  height: 900px;

  background: linear-gradient(rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)),
    url(${imgHero});

  /* Задаем цвет фона в случае, если изображение не загрузится или будет прозрачным */
  background-color: #f0f0f0;
  /* Позволяет управлять положением фона */
  background-position: center center;
  /* Масштабирует изображение так, чтобы оно занимало всю доступную область */
  background-size: cover;
  /* Повторяет изображение по горизонтали и вертикали */
  background-repeat: no-repeat;
`;

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Container = styled.div`
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
`;

export const MainWraper = styled.div`
  min-height: 900px;
  margin-top: 80px;
`;

export const ContainerQuiz = styled.div`
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  /* display: flex;
  flex-direction: row;
  justify-content: center; */
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
  color: ${props => props.theme.colors.lightGrayHover};
  text-decoration: none;
  background-color: transparent;
  border-radius: 4px;
  border: 3px solid ${props => props.theme.colors.lightGrayHover};

  &:hover {
    border: 3px solid ${props => props.theme.colors.lightBlueHover};
    color: ${props => props.theme.colors.lightBlueHover};
  }

  &.active {
    border: 3px solid ${props => props.theme.colors.lightBlueHover};
    /* background-color: rgba(33, 150, 243, 0.3); */
    color: ${props => props.theme.colors.lightBlueHover};
  }
`;

export const ListLink = styled.ul`
  display: flex;
  gap: 30px;
`;

export const ItemLink = styled.li``;
