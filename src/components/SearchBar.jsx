import React from 'react'
import {FaSearch} from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = () => {

 const [input, setInput]=useState("");
 const fetchData=(value)=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((json)=>{
        const result=json.filter((user)=>{return})
    })
 }

 const handleChange=(value)=>{
    setInput(value);
    fetchData(value);
 }

  return (
    <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input placeholder="Type to search..." value={input} onChange={(e)=>handleChange(e.target.value)} />
      
    </div>
  )
}

export default SearchBar
