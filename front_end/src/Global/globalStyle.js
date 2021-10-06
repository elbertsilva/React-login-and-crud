import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
 *{margin: 0;
 padding: 0;
 box-sizing: border-box;
 }
 body{
    background: linear-gradient(to right, rgba(0, 0, 150, 8), transparent);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
 }


`;
