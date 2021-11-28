import React from 'react';
import './SearchResult.css'

function SearchResult({rawgData}) {

return (
<div className="result-card row">
    {rawgData.name}
</div>
   
);
}

export default SearchResult;