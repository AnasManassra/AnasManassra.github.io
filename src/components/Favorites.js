import React from 'react'
import Favorited from './Favorited'
import de from '../de.svg'
import us from '../us.svg'
import br from '../br.svg'
import ax from '../ax.svg'
import af from '../af.svg'
import al from '../al.svg'
import is from '../is.svg'
import dz from '../dz.svg'
const Favorites = () => {
  return (
    <div className='Favorites'>
        <h1>Favorites</h1>
        <div className='Favorite-items'>
          <Favorited name="Germany" flag={de}/>
          <Favorited name="United States of America" flag={us}/>
        </div>
    </div>
  )
}

export default Favorites