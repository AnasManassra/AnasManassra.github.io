import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import de from '../de.svg'
import us from '../us.svg'
import br from '../br.svg'
import ax from '../ax.svg'
import af from '../af.svg'
import al from '../al.svg'
import is from '../is.svg'
import dz from '../dz.svg'
const Cards = () => {
  return (
    <div>
        <Container fluid style={{height:"80vh"}}>
            <Row style={{paddingBottom:"1rem"}} xs={1} md={3} sm={2} lg={3} xl={4}>
                <Col style={{paddingBottom:"1rem"}}>
        <Card style={{width: "300px", height:"350px", pading:"0", margin:"0", boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px", gridRow:"1/2"}} >
            <Card.Img variant='top' src={de} className='card-img-top'/>
            <Card.Body className='cardtext'>
                <Card.Title style={{fontWeight:"800"}}>Germany</Card.Title>
                <Card.Text><strong>Population:</strong> 81,770,900<br></br>
                 <strong>Region:</strong> Europe <br></br>
                 <strong>Capital:</strong>: Berlin
                </Card.Text>
                <Link to="/details" className='stretched-link'></Link>
            </Card.Body>
        </Card>
        </Col>
        <Col style={{paddingBottom:"1rem"}}>
        <Card style={{width: "300px", height:"350px", padding:"0", margin:"0", boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px", gridRow:"2/3"}}>
            <Card.Img variant='top' src={us} className='card-img-top'/>
            <Card.Body className='cardtext'>
                <Card.Title style={{fontWeight:"800"}}>United States of America</Card.Title>
                <Card.Text><strong>Population:</strong> 323,947,000<br></br>
                  <strong>Region:</strong> Americas <br></br>
                 <strong>Capital:</strong>: Washington, D.C.
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col style={{paddingBottom:"1rem"}}>
        <Card style={{width: "300px", height:"350px", padding:"0", margin:"0", boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
            <Card.Img variant='top' src={br} className='card-img-top'/>
            <Card.Body className='cardtext'>
                <Card.Title style={{fontWeight:"800"}}>Brazil</Card.Title>
                <Card.Text><strong>Population:</strong> 206,135,893<br></br>
                 <strong>Region:</strong> Americas <br></br>
                 <strong>Capital:</strong>: Brasília
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col style={{paddingBottom:"1rem"}}>
        <Card style={{width: "300px", height:"350px", padding:"0", margin:"0", boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
            <Card.Img variant='top' src={is} className='card-img-top'/>
            <Card.Body className='cardtext'>
                <Card.Title style={{fontWeight:"800"}}>Iceland</Card.Title>
                <Card.Text><strong>Population:</strong> 334,300<br></br>
                 <strong>Region:</strong> Europe <br></br>
                 <strong>Capital:</strong>: Reykjavík
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        
            <Col style={{paddingBottom:"1rem"}}>
        <Card style={{width: "300px", height:"350px", padding:"0", margin:"0", boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
            <Card.Img variant='top' src={af} className='card-img-top'/>
            <Card.Body className='cardtext'>
                <Card.Title style={{fontWeight:"800"}}>Afghanistan</Card.Title>
                <Card.Text><strong>Population:</strong> 27,657,145<br></br>
                 <strong>Region:</strong> Asia <br></br>
                 <strong>Capital:</strong>: Kabul
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col style={{paddingBottom:"1rem"}}>
        <Card style={{width: "300px", height:"350px", padding:"0", margin:"0", boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
            <Card.Img variant='top' src={ax} className='card-img-top'/>
            <Card.Body className='cardtext'>
                <Card.Title style={{fontWeight:"800"}}>Åland Islands</Card.Title>
                <Card.Text><strong>Population:</strong> 28,875<br></br>
                 <strong>Region:</strong> Europe <br></br>
                 <strong>Capital:</strong>: Mariehamn
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col style={{paddingBottom:"1rem"}}>
        <Card style={{width: "300px", height:"350px", padding:"0", margin:"0", boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
            <Card.Img variant='top' src={al} className='card-img-top'/>
            <Card.Body className='cardtext'>
                <Card.Title style={{fontWeight:"800"}}>Albania</Card.Title>
                <Card.Text><strong>Population:</strong> 2,886,026<br></br>
                 <strong>Region:</strong> Europe <br></br>
                 <strong>Capital:</strong>: Tirana
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col style={{paddingBottom:"1rem"}}>
        <Card style={{width: "300px", height:"350px", padding:"0", margin:"0", boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
            <Card.Img variant='top' src={dz} className='card-img-top'/>
            <Card.Body className='cardtext'>
                <Card.Title style={{fontWeight:"800"}}>Algeria</Card.Title>
                <Card.Text><strong>Population:</strong> 40,400,000<br></br>
                 <strong>Region:</strong> Africa <br></br>
                 <strong>Capital:</strong>: Algiers
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Cards