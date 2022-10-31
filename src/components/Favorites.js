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
const Favorites = ({drop, favorites}) => {
  return (
    <div className='Favorites'  droppable onDrop={(e) => drop()} onDragOver={(e) => (e.preventDefault())}>
        <h1>Favorites</h1>
        <div className='Favorite-items'>
         {favorites.map((favorite)=> (
          <Favorited name={favorite[0]} flag={favorite[1]} />
         ))}
        </div>
    </div>
  )
}

export default Favorites