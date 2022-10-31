import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import Countrycard from './Countrycard';
import Favorites from './Favorites';
const Cardgrid = ({countries}) => {

    const [dragItem, setdragItem] = useState();
    const [favorites, setFavorites] = useState([]);
    const drag = (country, flag) => {
        console.log(country);
        setdragItem([country, flag]);
        console.log(dragItem);
    }

    const drop = () => {
        setFavorites(current => [...current, dragItem])
        console.log(favorites);
    }
  return (
    <div>
        <Container fluid style={{height:"80vh", overflowY:"hidden"}}>
            <Row style={{paddingBottom:"1rem", paddingLeft:"3rem", overflow:"hidden"}} >
                <Col  xl={2} className="d-none d-xl-inline-block" style={{height:"75vh", paddingTop:"1rem"}}>
                    <Favorites drop={drop} favorites={favorites}/>
                </Col>
                <Col sm={10} md={10} lg={10} xs={10} style={{overflowY:"scroll", height:"75vh", paddingTop:"1rem", scrollbarWidth:"none", paddingRight:"1.5rem"}} className="d-sm-inline-block scrolling">
                    <Row xs={1} md={2} sm={1} lg={2} xl={3} className="CountryRow">

                        {countries.map((country) => (
                            <Col  style={{paddingBottom:"1rem"}} className="justify-content-lg-end justify-content-sm-center">
                            <Countrycard key={country.name} country={country.name.common} flag={country.flags.svg} population={country.population} region={country.region} capital={country.capital} state={country} drag={drag}/>
                        </Col>
                        ))}
                       

                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Cardgrid