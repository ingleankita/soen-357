import React from 'react';
import img4 from './images/placeholder-image.png';

const Artwork = () => {
	return (
		<div class='col'>
			<div class='card'>
				<a href='/individual'>
					<img
						src={img4}
						style={{ height: '500px' }}
						class='card-img-top'
						alt='...'
					/>
				</a>
				<div class='card-body'>
					<h3 class='card-title'>Name of Artwork</h3>
					<h5 class='card-title'>Name of Artist</h5>
					<p class='card-text'>
						This is where we will add description about the art.
					</p>
					<h5 class='card-title'>Price: $$$</h5>
					<button type='button' class='btn btn-danger'>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default Artwork;
