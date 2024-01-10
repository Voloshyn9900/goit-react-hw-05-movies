import styled from 'styled-components';

export const Text = styled.p`
  /* text-align: center; */
  /* width: 150px; */
  background-color: rgba(21, 21, 21, 0.4);
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
  color: lightgray;
  font-family: 'Roboto', sans-serif;
`;

export const Wraper = styled.div`
  border-radius: 15px;
  border: 3px solid rgb(189, 190, 192);
  padding: 15px;
  /* overflow-y: hidden; */
  overflow-y: auto;
  height: 1000px; /* Установите желаемую высоту */
  width: 500px;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

export const ReviewsList = styled.ul`
  gap: 25px;
`;

export const ReviewsItem = styled.li``;


export const ReviewsWraper = styled.div`

`;
