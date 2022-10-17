import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faStar} from "@fortawesome/free-solid-svg-icons"

import 'bootstrap/dist/css/bootstrap.min.css';

const Countrycard = (props) => {
    const countryflag = props.flag;
    const countryname = props.country;
    const countrypopulation = props.population;
    const countryregion = props.region;
    const countrycapital = props.capital;
  return (
    <Card style={{width: "300px", height:"350px", padding:"0", margin:"0", boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}} >
            <Card.Img variant='top' src={countryflag} className='card-img-top'/>
            <Card.Body className='cardtext'>
                <Card.Title style={{fontWeight:"800"}}>{countryname}</Card.Title>
                <Card.Text><strong>Population:</strong> {countrypopulation}<br></br>
                 <strong>Region:</strong> {countryregion} <br></br>
                 <strong>Capital:</strong>: {countrycapital}
                </Card.Text>
                <Link to="/details" className='stretched-link'></Link>
                <FontAwesomeIcon icon={faStar} className="d-block d-lg-none d-xl-none  align-self-end"/>
            </Card.Body>
        </Card>
  )
}

export default Countrycard