import React, { useState } from "react";
import "./SearchResultPage.style.css";
import { Alert, Button, Col, Container, Dropdown, DropdownButton, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Tag from "../Homepage/component/Tag/Tag";
import SearchResultBox from "./component/SearchResultBox/SearchResultBox";
import ReactPaginate from 'react-paginate';
import { useLinkSearchQuery } from "../../hooks/useLinkSearchResult";

const SearchResultPage = () => {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const {
    data: links,
    isLoading,
    isError,
    error,
  } = useLinkSearchQuery({ page });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  console.log(links);

  const searchByKeyword = (event) => {
    event.preventDefault();
    if (keyword === "") {
      navigate(``);
    } else {
      navigate(``);
    }

    setKeyword("");
  };

  const handlePageClick = ({selected}) => {
    setPage(selected);
  }

  return (
    <>
      <div className="searchResult-top-container">
        <Container className="searchResult-container">
          <div className="searchResult-searchBox">
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
          <div className="searchResult-tagBox">
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
        
        <Container>
          <Row className="searchResult-dropdown">
            <Col>
              <div className='searchResult-dropdown-button1'>
                <DropdownButton id="dropdown-basic-button" title="종류">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
              </div>
            </Col>
            <Col>
            <div className='searchResult-dropdown-button2'>
                <DropdownButton id="dropdown-basic-button" title="최근순">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
              </div>
            </Col>
          </Row>

          {links?.links?.map((link,index) => {
            return (
              <SearchResultBox link={link} key={index}/>
            );
          })}
          
          <Row>
            <Col className="searchResult-pagination">
              <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={links?.totalPages} // 전체 페이지가 몇개 ?
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
                forcePage={page}
              />
            </Col>
          </Row>

        </Container>
      </div>
    </>
  );
};

export default SearchResultPage;
