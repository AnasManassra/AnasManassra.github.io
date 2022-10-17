import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';
const ButtonWithIcon = (props) => {
    const buttontype = props.type;
    const buttontext = props.text;
    const buttonlink = props.path;
    const buttonicon = props.bicon;
  return (
    <div>
         <div class={buttontype}>
          <FontAwesomeIcon icon={buttonicon} style={{paddingLeft:"1rem"}}></FontAwesomeIcon>
          <h1>{buttontext}</h1>
          <Link to={buttonlink}className='stretched-link'></Link>
        </div>
    </div>
  )
}

export default ButtonWithIcon