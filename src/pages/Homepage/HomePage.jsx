import React, { useState } from "react";
// import Banner from './component/Banner/Banner'
import { useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Row,
} from "react-bootstrap";
import "./HomePage.style.css";
import Tag from "./component/Tag/Tag";

const HomePage = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    event.preventDefault();
    if (keyword === "") {
      navigate(``);
    } else {
      navigate(``);
    }

    setKeyword("");
  };

  return (
    <div className="top-home-container">
      {/* <Banner/> */}
      <Container className="home-container">
        <div className="home-text">검색할 키워드를</div>
        <div className="home-text">입력해 주세요.</div>
        <div className="home-dropdown-button">
          <DropdownButton id="dropdown-basic-button" title="종류">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="home-searchBox">
          <Form className="d-flex" onSubmit={searchByKeyword}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
            />
            <Button type="submit" variant="primary" className="">
              Search
            </Button>
          </Form>
        </div>
        <div className="home-tagBox">
          <Row>
            {[1, 2, 3, 4, 5, 6].map(() => (
              <Col lg="2">
                <Tag />
              </Col>
            ))}
          </Row>
          <Row>
            {[1, 2, 3, 4, 5, 6].map(() => (
              <Col lg="2">
                <Tag />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
