import React from 'react';
import './Header.css'

function Header({header, subHeader}) {
	return (
			<div>
			<h1 className="big-header">{header}</h1>
            <h5 className="sub-header">{subHeader}</h5>
			</div>
	);
}

export default Header;
