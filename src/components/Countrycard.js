import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faStar} from "@fortawesome/free-solid-svg-icons"

import 'bootstrap/dist/css/bootstrap.min.css';

const Countrycard = ({country, name, flag, population, capital, region, state, drag}) => {
    population = population.toLocaleString();
  return (
    <Card style={{width: "300px", height:"350px", padding:"0", margin:"0", boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}} draggable onDragStart={(e) => (drag(country, flag))} onDrag={(e) => (drag(country, flag))} onDragEnd={(e) => (drag(country, flag))}>
            <Card.Img variant='top' src={flag} className='card-img-top'/>
            <Card.Body className='cardtext'>
                <Card.Title style={{fontWeight:"800"}}>{country}</Card.Title>
                <Card.Text><strong>Population:</strong> {population}<br></br>
                 <strong>Region:</strong> {region} <br></br>
                 <strong>Capital:</strong>: {capital}
                </Card.Text>
                <Link to="/details" className='stretched-link' state={state}></Link>
                <FontAwesomeIcon icon={faStar} className="d-block d-lg-none d-xl-none  align-self-end"/>
            </Card.Body>
        </Card>
  )
}

export default Countrycard