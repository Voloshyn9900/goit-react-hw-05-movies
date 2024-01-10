import styled from 'styled-components';

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
  text-align: center;
  width: 150px;
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
  display: flex;
  justify-content: center;
  overflow-y: auto;

  height: 1000px;
  width: 550px;

  border-radius: 15px;
  border: 3px solid rgb(189, 190, 192);
  /* padding: 10px; */

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

export const CastList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 26px;
`;

export const CastItem = styled.li`
  
`;

export const ImgMovie = styled.img`
  transition: all 1s ease-in-out;
  width: 150px;
  height: 200px;
  border-radius: 20px;
`;

export const WraperImg = styled.div`
  width: 150px;
  height: 200px;
 
`;
