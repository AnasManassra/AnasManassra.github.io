import React from 'react'
import { Link } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import de from '../de.svg'
const Details = () => {
  return (
    <div>
      <Container fluid style={{height:"90vh"}}>
        <Row style={{paddingTop:"3%", paddingLeft:"3%"}}>
        <div class="backButton">
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          <h1>Back</h1>
          <Link to='/' className='stretched-link'></Link>
        </div>
        </Row>
        <Row style={{paddingTop:"3%"}} lg={3} md={1} sm={1} xs={1}>
          <Col style={{height:"50%", alignItems:"center"}}>
            <img src={de} height={400} width={450}></img>
            </Col>
        <Col style={{height:"50%", alignItems:"center"}}>
        <div className='Details'>
          <h1>Germany</h1><br></br>
          <p><strong>Native Name: </strong>Deutsche</p>
          <p><strong>Population: </strong>81,770,900</p>
          <p><strong>Region: </strong>Europe</p>
          <p><strong>Sub Region: </strong> Central Europe</p>
          <p><strong>Capital: </strong>Berlin</p>
        </div>
        </Col>
        <Col style={{height:"50%", alignItems:"center"}}>
        <div className='Details'>
        <p><strong>Top Level Domain: </strong>.de</p>
          <p><strong>Currencies: </strong>Euro</p>
          <p><strong>Languages: </strong>German, Dutch</p> 
        </div>
        </Col>
        <Col></Col>
        <Col style={{height:"50%", alignItems:"center", alignSelf:"center"}}>
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