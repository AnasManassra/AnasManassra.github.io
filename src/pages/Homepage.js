import React from 'react'
import Searchfilter from '../components/Searchfilter';
import Cardgrid from '../components/Cardgrid';
import {useState, useEffect} from 'react'
const Homepage = () => {

  const [countries, setCountries] = useState([]);

  const [searchInput, setsearchInput] = useState("");

  const [filterCountries, setfilterCountries] = useState("");

  const [regionRef, setregionRef] = useState("All");

  const getCountries = async () =>{
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
  }

   useEffect(() => {
    getCountries();
   }, []);
 

  const search = (searchValue) =>{
    setsearchInput(searchValue)
    if (searchInput) {
      const filteredCountries = countries.filter((country) => (
        Object.values(country).join("").toLowerCase().includes(searchValue.toLowerCase())
      ))
      setfilterCountries(filteredCountries);
    } else {
      setfilterCountries(countries)
    }
  }

  const filter = async ( filterValue) => {
      setregionRef(filterValue)
      if(filterValue === 'All'){
        getCountries();
      }
      else if(filterValue){
        const filterResponse = await fetch(`https://restcountries.com/v3.1/region/${filterValue}`);
    const filterData = await filterResponse.json();
    setCountries(filterData);
      } else {
        getCountries();
      }
  }


  return (
    <div>
    <Searchfilter search={search} searchInput={searchInput} filter={filter}/> 
    {searchInput.length > 0 ? <Cardgrid countries={filterCountries} /> : <Cardgrid countries={countries} />}
    </div>
  )
}

export default Homepage