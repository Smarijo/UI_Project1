import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  const params = useParams();

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
    if (searchQuery) {
      params.query = searchQuery.replace('%20', ' ');
      navigate(`/results/${params.query}`, { state: searchQuery, replace: true });
    }
  }


  return (

    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        onChange={handleSearchInputChange}
        placeholder="Search for recipes"
      />
      <br></br>
      <br></br>
      <button type="submit">Search</button>
    </form>

  );
}

export default SearchBar;