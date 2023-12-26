import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;

  input {
    padding: 5px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  select {
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  button {
    background-color: #f44336; /* Красный цвет кнопки */
    color: #fff; /* Белый цвет текста */
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #d32f2f; /* Темно-красный цвет при наведении */
    }
  }
`;
