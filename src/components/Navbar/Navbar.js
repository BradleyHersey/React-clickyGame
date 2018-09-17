import React from 'react';
import './Nav.css';




function Navbar(props) {
	return(
	<div className="navbar-fixed">
		<nav>
			<div className="nav-wrapper container">
			
				<a href="/" className='MainT'>Memory Game</a>
				<ul className='right'>
					<li style={{paddingRight: "20px"}}>Score: {props.score}</li>
					<li style={{paddingLeft: "20px"}}>Top Score: {props.topScore}</li>
				</ul>
			</div>
		</nav>
		<div className="row">
          <h5 className="center white-text footer-update">{props.text}</h5>
        </div>
	</div>
	)
}



export default Navbar;








