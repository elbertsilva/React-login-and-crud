import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const Header = styled.div`
  background-color: #000;
  border: 3px solid #000;
  display: flex;
  grid-column: 1/-1;
  justify-content: flex-end;
  margin-bottom: 40px;
  padding: 10px;
  width: 100%;
  @media (max-width: 1024px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const ButtonLogout = styled.button`
  background-color: #ff0000;
  border-color: #000;
  border-radius: 10px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  font-size: 1.8rem;
  padding: 5px;
`;

export const Content = styled.div`
  align-items: center;
  background-color: #0066ff;
  border-radius: 10px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-items: stretch;
  padding: 30px;
`;

export const Title = styled.h1`
  grid-column: 1/-1;
  text-align: center;
`;

export const Button = styled.button`
  background-color: ${({ color }) => color};
  border-color: #000;
  border-radius: 10px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  color: #000;
  font-size: 1rem;
  margin: 10px;
  padding: 10px 25px;
`;

export const Table = styled.table`
  background-color: #0066ff;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  font-size: 1.8rem;
  @media (max-width: 1024px) {
    margin: 0 10px;
  }
`;

export const Input = styled.input`
  padding: 10px;
`;
