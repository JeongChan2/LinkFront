import React from 'react'
import './SearchResultBox.style.css'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowPointer, faStar } from '@fortawesome/free-solid-svg-icons'
import { faBookmark, faThumbsUp, faCopy } from '@fortawesome/free-regular-svg-icons'

const SearchResultBox = () => {
  return (
    <div className='searchResultBox-container'>
      <Row className='searchResultBox-utils'>
        <Col auto></Col>
        <Col lg={2} className='searchResultBox-util'><span><FontAwesomeIcon icon={faThumbsUp} /></span> <span>162</span></Col>
        <Col lg={2} className='searchResultBox-util'><span><FontAwesomeIcon icon={faStar} /></span> <span>8/10</span></Col>
        <Col lg={2} className='searchResultBox-util'><span><FontAwesomeIcon icon={faBookmark} /></span> <span>8</span></Col>
      </Row>
      <Row className='searchResultBox-box'>
        <div className='searchResultBox-sectionA'>
          <div className='searchResultBox-hashTag'>
            <span>#이론/개념</span><span>#spring</span><span>#spring</span>
            <div className='searchResultBox-title'>spring에 대한 기초 지식을 얻을 수 있습니다.</div>
          </div>
          <div className='searchResultBox-click'><div><FontAwesomeIcon icon={faArrowPointer}/></div> <div>138</div></div>
        </div>

        <hr/>

        <div className='searchResultBox-sectionB'>
          <div className='searchResultBox-content'>https://www.figma.com/design/vfsdjfSDFIJEWOfDSNfdfnSOdfn/%ER%EREREwoIRFJDS$#%E%EEW%RWE%-0</div>
          <div className='searchResultBox-copy'><FontAwesomeIcon icon={faCopy} /></div>
        </div>

        <Row className='searchResultBox-info'>
          <Col lg={1}>프로필</Col>
          <Col lg={9}>닉네임</Col>
          <Col lg={2} className='searchResultBox-date'>2027.12.28</Col>
        </Row>

      </Row>
    </div>
  )
}

export default SearchResultBox
