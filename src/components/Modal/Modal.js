import React from 'react';
import './Modal.css';



function Modal() {
	return (
		<div className="instructionsModal">
			<div className="modal-content">
				<h4 className="center">Game Instructions</h4>
				<ol>
					<li>Click on an image to begin.</li>
					<li>Every time you click on image ,all images change positions.  .</li>
					<li> Pick the same image twice...Sorry!</li>
					<li>Click all 12 images without repeating...You Win!</li>
					<li>Click on the title to pull the instructions up again</li>
				</ol>
			</div>
			<br />
			<div className="modal-footer white-text center">
				<a className="waves-effect waves-light btn" onClick={() => {
					document.getElementsByClassName('instructionsModal')[0].classList.add('hide');
				}}>Let's GO.</a>
			</div>	
		</div>
	)
}





export default Modal;