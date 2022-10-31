import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
const Searchfilter = ({search, searchInput, filter}) => {
  return (
    <div className='search-and-filter'>
      <div className='search-bar-and-icon'>
      <FontAwesomeIcon icon={ faMagnifyingGlass}></FontAwesomeIcon>
      <input className='search-bar' placeholder=' Search for a country...' value={searchInput} onChange={(e) =>search(e.target.value)}></input>
      </div>
      <div className='dropdown'>
        <select className='dropbtn' onChange={(e) => filter(e.currentTarget.value)}>
          <option>All</option>
          <option>Africa</option>
          <option>Americas</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>
      </div>
  )
}

export default Searchfilter