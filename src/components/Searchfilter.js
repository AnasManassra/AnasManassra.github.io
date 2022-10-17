import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
const Searchfilter = () => {
  return (
    <div className='search-and-filter'>
      <div className='search-bar-and-icon'>
      <FontAwesomeIcon icon={ faMagnifyingGlass}></FontAwesomeIcon>
      <input className='search-bar' placeholder=' Search for a country...'></input>
      </div>
      <div className='dropdown'>
      <div className="dropbtn">
          <span>Filter by Region</span>
          <FontAwesomeIcon icon={ faChevronDown}></FontAwesomeIcon>
        </div>
        <div className='dropdown-content'>
          <a>All</a>
          <a>Africa</a>
          <a>Americas</a>
          <a>Asia</a>
          <a>Europe</a>
          <a>Oceania</a>
          <a>Favorites</a>
        </div>
      </div>
      </div>
  )
}

export default Searchfilter