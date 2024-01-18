import React, { useState } from 'react';
import {usePersonContext} from '../context/Context'

const Information = () => {
  const { personList } = usePersonContext();
  const[searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchByNum = () => {
    const results = personList.filter((person, i) =>
      person[i].name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(results);
    setSearchText('');
  }

  return (
    <div className="information">
      <h3>Retrieve Information</h3>
      <input 
        type="text" 
        placeholder='search by name'
        value = {searchText}
        onChange={e=>setSearchText(e.target.value)}
      />
      <button
        onClick={searchByNum}
      >Search</button>
      {
        searchResults.length ? 
        (searchResults.map((item, i) =>{
          return(
            <div className="cards">
              <p>Name: {item[i].name}</p>
              <p>DOB: {item[i].dob}</p>
              <p>Adhaar No.: {item[i].aadharNumber}</p>
              <p>Phone No.:{item[i].phoneNumber}</p>
              <p>Age: {item[i].age}</p>
            </div>
          );
        })):(
          <div className="no-result">No Data Found!</div>
        )
      }
    </div>
  )
}

export default Information;