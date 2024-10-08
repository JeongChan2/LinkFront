import React, { useState } from "react";
import "./RegisterPage.style.css";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useSignUpMutation } from "../../hooks/useSignUp";

const RegisterPage = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data, isError, error, mutate: signUp } = useSignUpMutation();
  // console.log(data);

  // if (isError) {
  //   console.log("error", error.response.data.code);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp({ username, email, password }); // 회원가입 요청
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
        {error?.response?.data?.code === 1010 ? (
          <Alert key="warning" variant="warning">
            {error?.response?.data?.message}
          </Alert>
        ) : (
          ""
        )}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

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
        {error?.response?.data?.code === 1111 ? (
          <Alert key="warning" variant="warning">
            {error?.response?.data?.message}
          </Alert>
        ) : (
          ""
        )}

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterPage;
