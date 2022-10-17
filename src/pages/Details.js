import React from 'react'
import { Link } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import de from '../de.svg'
import ButtonWithIcon from '../components/ButtonWithIcon';
const Details = () => {
  return (
    <div>
      <Container fluid style={{height:"90vh"}}>
        <Row style={{paddingTop:"3%", paddingLeft:"3%"}}>
            <ButtonWithIcon type="backButton" bicon={faArrowLeft} text="Back" path='/'/>
        </Row>
        <Row style={{paddingTop:"3%"}} lg={3} md={1} sm={1} xs={1}>
          <Col style={{height:"50%"}} className="justify-content-sm-center">
            <img src={de} className="details-flag"></img>
            </Col>
        <Col style={{height:"50%", alignItems:"center", paddingLeft:"2rem"}} className="justify-content-lg-start justify-content-sm-center">
        <div className='Details'>
          <h1>Germany</h1><br></br>
          <p><strong>Native Name: </strong>Deutsche</p>
          <p><strong>Population: </strong>81,770,900</p>
          <p><strong>Region: </strong>Europe</p>
          <p><strong>Sub Region: </strong> Central Europe</p>
          <p><strong>Capital: </strong>Berlin</p>
        </div>
        </Col>
        <Col style={{height:"50%", alignItems:"center"}} className="justify-content-lg-start justify-content-sm-center">
        <div className='Details'>
        <p><strong>Top Level Domain: </strong>.de</p>
          <p><strong>Currencies: </strong>Euro</p>
          <p><strong>Languages: </strong>German, Dutch</p> 
        </div>
        </Col>
        <Col></Col>
        <Col style={{height:"50%", paddingLeft:"1.4rem"}} className=" align-content-lg-center align-items-lg-start">
          <div className='Details'><strong>Border Countries: </strong>
          <div className='Border-countries'>
          <button>Denmark</button>
          <button>Netherlands</button>
          <button>Belgium</button>
          <button>Luxembourg</button>
          <button>France</button>
          </div>
          </div>
        </Col>
        <Col></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Details