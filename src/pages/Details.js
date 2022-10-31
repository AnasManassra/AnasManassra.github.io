import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import ButtonWithIcon from '../components/ButtonWithIcon';
import { useLocation } from 'react-router-dom';
const Details = () => {

      const location = useLocation();
    const data = location.state;
    const population = data.population.toLocaleString();
    const name = data.name.nativeName;
    var nameNative;
    nameNative = Object.entries(name)[0][1].common;
    var currency = Object.entries(data.currencies)[0][1].name;
    var languages = Object.entries(data.languages);
    var borders = data.borders;
    if(typeof borders === 'undefined')
     borders = ['none'];
  return (
    <div>
      <Container fluid style={{height:"90vh"}}>
        <Row style={{paddingTop:"3%", paddingLeft:"3%"}}>
            <ButtonWithIcon type="backButton" bicon={faArrowLeft} text="Back" path='/'/>
        </Row>
        <Row style={{paddingTop:"3%"}} lg={3} md={1} sm={1} xs={1}>
          <Col style={{height:"50%"}} className="justify-content-sm-center">
            <img src={data.flags.svg} className="details-flag"></img>
            </Col>
        <Col style={{height:"50%", alignItems:"center", paddingLeft:"2rem"}} className="justify-content-lg-start justify-content-sm-center">
        <div className='Details'>
          <h1>{data.name.official}</h1><br></br>
          <p><strong>Native Name: </strong> {nameNative} </p>
          <p><strong>Population: </strong>{population}</p>
          <p><strong>Region: </strong>{data.region}</p>
          <p><strong>Sub Region: </strong> {data.subregion}</p>
          <p><strong>Capital: </strong>{data.capital}</p>
        </div>
        </Col>
        <Col style={{height:"50%", alignItems:"center"}} className="justify-content-lg-start justify-content-sm-center">
        <div className='Details'>
        <p><strong>Top Level Domain: </strong> {data.tld}</p>
          <p><strong>Currencies: </strong> {currency}</p>
          <p><strong>Languages: </strong> {languages.map((language) =>(
              <span>{Object.entries(language)[1][1]} </span>
          ))}</p> 
        </div>
        </Col>
        <Col></Col>
        <Col style={{height:"50%", paddingLeft:"1.4rem"}} className=" align-content-lg-center align-items-lg-start">
          <div className='Details'><strong>Border Countries: </strong>
          <div className='Border-countries'>{borders.map((border)=> (
                <button>{border}</button>
            ))}
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