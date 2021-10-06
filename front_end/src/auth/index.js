import React from "react";
import server from "../server/server";
import { useHistory } from "react-router-dom";
import { Container, Content, Title } from "./styles";
import { useDispatch } from "react-redux";
import { fetchError, fetchStarted, fetchSuccess } from "../store/login";

export const isAutenticated = () => localStorage.getItem("token");
const initialState = {
  name: "",
  password: "",
};
function Auth() {
  const [login, setLogin] = React.useState(initialState);
  const [error, setError] = React.useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  async function handleLogin() {
    dispatch(fetchStarted());

    try {
      const data = await server.post("/login", login);
      setError("");
      console.log(data.data);
      localStorage.setItem("token", data.data);
      dispatch(fetchSuccess(data.data));
      history.push("/view");
    } catch (error) {
      dispatch(fetchError(error.message));
      setError("Dados invalidos");
    }
  }

  return (
    <Container>
      <Content>
        <Title>Login</Title>
        <input
          type="text"
          onChange={(e) => setLogin({ ...login, name: e.target.value })}
          value={login.name}
        ></input>
        <Title>Password</Title>
        <input
          type="password"
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
          value={login.password}
        ></input>
        {error}
        <button
          onClick={handleLogin}
          style={{ background: "#0066ff", fontSize: "1.8rem" }}
        >
          Enter
        </button>
      </Content>
    </Container>
  );
}

export default Auth;
