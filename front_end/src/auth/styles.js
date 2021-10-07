import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(to right, rgba(0, 0, 150, 8), transparent);
`;

export const Content = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  display: grid;
  justify-items: center;
  padding: 30px;
  width: 30%;
  min-height: 40%;
  /* gap: 10px; */
`;

export const Title = styled.label`
  text-align: center;
  font-size: 1.8rem;
`;
