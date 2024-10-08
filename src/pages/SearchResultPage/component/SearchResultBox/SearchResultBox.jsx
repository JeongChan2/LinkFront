import React from 'react'
import './SearchResultBox.style.css'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowPointer, faStar } from '@fortawesome/free-solid-svg-icons'
import { faBookmark, faThumbsUp, faCopy } from '@fortawesome/free-regular-svg-icons'

const SearchResultBox = ({ link }) => {
  return (
    <div className='searchResultBox-container'>
      <Row className='searchResultBox-utils'>
        <Col auto></Col>
        <Col lg={2} className='searchResultBox-util'><span><FontAwesomeIcon icon={faThumbsUp} /></span> <span>{link?.likeCount}</span></Col>
        <Col lg={2} className='searchResultBox-util'><span><FontAwesomeIcon icon={faStar} /></span> <span>{link?.rating}</span></Col>
        <Col lg={2} className='searchResultBox-util'><span><FontAwesomeIcon icon={faBookmark} /></span> <span>{link?.bookmarkCount}</span></Col>
      </Row>
      <Row className='searchResultBox-box'>
        <div className='searchResultBox-sectionA'>
          <div className='searchResultBox-hashTag'>
            <span>#{link?.categoryTag}</span>
            {link?.tags?.map((tag,index) => {
              return (
                <span key={index}>#{tag.name}</span>
              );
            })}
            <div className='searchResultBox-title'>{link?.description}</div>
          </div>
          <div className='searchResultBox-click'><div><FontAwesomeIcon icon={faArrowPointer}/></div> <div>{link?.clickCount}</div></div>
        </div>

        <hr/>

        <div className='searchResultBox-sectionB'>
          <div className='searchResultBox-content'>{link?.url}</div>
          <div className='searchResultBox-copy'><FontAwesomeIcon icon={faCopy} /></div>
        </div>

        <Row className='searchResultBox-info'>
          <Col lg={1}>{link?.member?.profileImgUrl}</Col>
          <Col lg={7}>{link?.member?.nickname}</Col>
          <Col lg={4} className='searchResultBox-date'>{link?.updatedAt?.replace('T', ' ')}</Col>
        </Row>

      </Row>
    </div>
  )
}

export default SearchResultBox
