import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCircleXmark} from "@fortawesome/free-regular-svg-icons"
const Favorited = ({name, flag}) => {
    
    console.log()
  return (
    <div className="d-flex justify-content-between align-items-center" style={{paddingLeft:"0.5rem"}}>
        <div className='d-flex justify-content-start align-items-center'>
        <img height={30} width={30} src={flag}></img>
        <p style={{paddingLeft:"0.5rem", paddingTop:"0.8rem", whiteSpace:"nowrap"}}>{name}</p>
        </div>
        <FontAwesomeIcon icon={faCircleXmark}/>
    </div>
  )
}

export default Favorited