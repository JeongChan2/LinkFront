import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import "./AppLayout.style.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../redux/reducers/authenticateSlice";

const AppLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.id);
  const authenticate = useSelector((state) => state.auth.authenticate);

  const handleNavigation = (event, path) => {
    event.preventDefault();
    navigate(path);
  };

  const handleLogout = () => {
    // setUser(null);
    dispatch(authActions.LogoutSuccess());
    navigate("/");
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand
            href="/"
            onClick={(e) => handleNavigation(e, "/")}
            className=""
          >
            Logo
            <img alt="" src="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" onClick={(e) => handleNavigation(e, "/")}>
                Home
              </Nav.Link>
              <Nav.Link
                href="/searchResult"
                onClick={(e) => handleNavigation(e, "/searchResult")}
              >
                SearchResult
              </Nav.Link>
            </Nav>
            {authenticate ? (
              <>
                <span
                  className="appLayout-login-id"
                  onClick={() => handleLogout()}
                >
                  {id}
                </span>
                <span
                  className="appLayout-login-button"
                  onClick={() => handleLogout()}
                >
                  Logout
                </span>
              </>
            ) : (
              <span
                className="appLayout-login-button"
                onClick={(e) => handleNavigation(e, "/login")}
              >
                Login
              </span>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet /> {/* 자식 라우트의 컴포넌트가 여기에 렌더링됩니다. */}
    </div>
  );
};

export default AppLayout;
