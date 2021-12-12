import React from 'react';
import './SearchResult.css'

function SearchResult({name}) {

return (
<div className="result-card dropdown-item">
    {name}
</div>
   
);
}

export default SearchResult;