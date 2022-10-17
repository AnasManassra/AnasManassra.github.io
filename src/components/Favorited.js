import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCircleXmark} from "@fortawesome/free-regular-svg-icons"
const Favorited = (props) => {
    const countryname = props.name;
    const countryflag = props.flag;

  return (
    <div className="d-flex justify-content-between align-items-center" style={{paddingLeft:"0.5rem"}}>
        <div className='d-flex justify-content-start align-items-center'>
        <img height={30} width={30} src={countryflag}></img>
        <p style={{paddingLeft:"0.5rem", paddingTop:"0.8rem", whiteSpace:"nowrap"}}>{countryname}</p>
        </div>
        <FontAwesomeIcon icon={faCircleXmark}/>
    </div>
  )
}

export default Favorited