import React from 'react';
import img4 from './images/placeholder-image.png';

const Individual = () => {
	return (
		<div style={{ padding: '5%' }}>
			<h1 style={{ color: 'white' }}>Name of Artwork</h1>
			<div class='card mb-3'>
				<img src={img4} class='card-img-top' alt='...' />
				<div class='card-body'>
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

export default Individual;
