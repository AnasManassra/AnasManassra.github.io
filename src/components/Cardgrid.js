import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import de from '../de.svg'
import us from '../us.svg'
import br from '../br.svg'
import ax from '../ax.svg'
import af from '../af.svg'
import al from '../al.svg'
import is from '../is.svg'
import dz from '../dz.svg'
import Countrycard from './Countrycard';
import Favorites from './Favorites';
const Cardgrid = () => {
  return (
    <div>
        <Container fluid style={{height:"80vh", overflowY:"hidden"}}>
            <Row style={{paddingBottom:"1rem", paddingLeft:"3rem", overflow:"hidden"}} >
                <Col  xl={2} className="d-none d-xl-inline-block" style={{height:"75vh", paddingTop:"1rem"}}>
                    <Favorites/>
                </Col>
                <Col sm={10} md={10} lg={10} xs={10} style={{overflowY:"scroll", height:"75vh", paddingTop:"1rem", scrollbarWidth:"none", paddingRight:"1.5rem"}} className="d-sm-inline-block scrolling">
                    <Row xs={1} md={2} sm={1} lg={2} xl={3} className="CountryRow">

                        <Col style={{paddingBottom:"1rem"}} className="justify-content-lg-end justify-content-sm-center">
                            <Countrycard country="Germany" flag={de} population="81,770,900" region="Europe" capital="Berlin"/>
                        </Col>

                        <Col style={{paddingBottom:"1rem"}} className="justify-content-lg-end justify-content-sm-center">
                            <Countrycard country="United States of America" flag={us} population="323,947,000" region="Americas" capital="Washington, D.C."/>
                        </Col>

                        <Col style={{paddingBottom:"1rem"}} className="justify-content-lg-end justify-content-sm-center">
                            <Countrycard country="Brazil" flag={br} population="206,135,893" region="Americas" capital="Brasília"/>
                        </Col>

                        <Col style={{paddingBottom:"1rem"}} className="justify-content-lg-end justify-content-sm-center">
                            <Countrycard country="Iceland" flag={is} population="334,300" region="Europe" capital="Reykjavík"/>
                        </Col>
                
                        <Col style={{paddingBottom:"1rem"}} className="justify-content-lg-end justify-content-sm-center">
                            <Countrycard country="Afghanistan" flag={af} population="27,657,145" region="Asia" capital="Kabul"/>
                        </Col>

                        <Col style={{paddingBottom:"1rem"}} className="justify-content-lg-end justify-content-sm-center">
                            <Countrycard country="Åland Islands" flag={ax} population="28,875" region="Europe" capital="Mariehamn"/>
                        </Col>

                        <Col style={{paddingBottom:"1rem"}} className="justify-content-lg-end justify-content-sm-center">
                            <Countrycard country="Albania" flag={al} population="2,886,026" region="Europe" capital="Tirana"/>
                        </Col>

                        <Col style={{paddingBottom:"1rem"}} className="justify-content-lg-end justify-content-sm-center">
                            <Countrycard country="Algeria" flag={dz} population="40,400,000" region="Africa" capital="Algiers"/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Cardgrid