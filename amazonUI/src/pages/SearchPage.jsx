import React from 'react';
import '../styles/search.css'

const SearchPage = () => {
  return (
    <div>
      <h1>SearchPage</h1>
      <div>
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </div>
  );
}

export default SearchPage;
