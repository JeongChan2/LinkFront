import React, { useState } from "react";
import "./LoginPage.style.css";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSignInMutation } from "../../hooks/useSignIn";

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data, isError, error, mutate: signIn } = useSignInMutation();
  const navigate = useNavigate();

  const handleNavigation = (event, path) => {
    event.preventDefault();
    navigate(path);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn({ username, email, password }); // 로그인 요청
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter ID"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        {/** id 중복 에러 발생 시 */}
        {/* {error?.response?.data?.code === 1010 ? (
          <Alert key="warning" variant="warning">
            {error?.response?.data?.message}
          </Alert>
        ) : (
          ""
        )} */}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="5~30"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {/** 비밀번호 에러 발생 시 */}
        {error?.response?.data?.code === 1000 ? (
          <Alert key="warning" variant="warning">
            {error?.response?.data?.message}
          </Alert>
        ) : (
          ""
        )}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Button
          variant="primary"
          onClick={(e) => handleNavigation(e, "/register")}
        >
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
