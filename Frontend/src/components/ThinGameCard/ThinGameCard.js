import React from 'react';
import './ThinGameCard.css'

function ThinGameCard({name,image, id}) {

return (
<div className="result-card dropdown-item">
<div className="row">
    <div className="col-1">
        <a role="button" className="thumb-box" href={`/games/${id}`}>
            <span role="button" className="mini-thumbs" style={{backgroundImage:`url(${image})`}}/>
        </a> 
    </div>
    <div className="col-3">
        {name}
    </div>
    <div className="col">
        Platforms
    </div>
</div>
</div>
);
}

export default ThinGameCard;