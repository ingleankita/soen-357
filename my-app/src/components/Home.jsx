import React from 'react';
import Artwork from './Artwork';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';

const Home = () => {
	return (
		<div>
			<div
				id='carouselExampleCaptions'
				class='carousel slide'
				data-bs-ride='false'
			>
				<div class='carousel-indicators'>
					<button
						type='button'
						data-bs-target='#carouselExampleCaptions'
						data-bs-slide-to='0'
						class='active'
						aria-current='true'
						aria-label='Slide 1'
					></button>
					<button
						type='button'
						data-bs-target='#carouselExampleCaptions'
						data-bs-slide-to='1'
						aria-label='Slide 2'
					></button>
					<button
						type='button'
						data-bs-target='#carouselExampleCaptions'
						data-bs-slide-to='2'
						aria-label='Slide 3'
					></button>
				</div>
				<div class='carousel-inner'>
					<div class='carousel-item active'>
						<img
							src={img1}
							style={{ height: '500px' }}
							class='d-block w-100'
							alt='...'
						/>
						<div class='carousel-caption d-none d-md-block'>
							<h5>Image 1</h5>
							<p>Image description.</p>
						</div>
					</div>
					<div class='carousel-item'>
						<img
							src={img2}
							style={{ height: '500px' }}
							class='d-block w-100'
							alt='...'
						/>
						<div class='carousel-caption d-none d-md-block'>
							<h5>Image 2</h5>
							<p>Image description.</p>
						</div>
					</div>
					<div class='carousel-item'>
						<img
							src={img3}
							style={{ height: '500px' }}
							class='d-block w-100'
							alt='...'
						/>
						<div class='carousel-caption d-none d-md-block'>
							<h5>Image 3</h5>
							<p>Image description.</p>
						</div>
					</div>
				</div>
				<button
					class='carousel-control-prev'
					type='button'
					data-bs-target='#carouselExampleCaptions'
					data-bs-slide='prev'
				>
					<span class='carousel-control-prev-icon' aria-hidden='true'></span>
					<span class='visually-hidden'>Previous</span>
				</button>
				<button
					class='carousel-control-next'
					type='button'
					data-bs-target='#carouselExampleCaptions'
					data-bs-slide='next'
				>
					<span class='carousel-control-next-icon' aria-hidden='true'></span>
					<span class='visually-hidden'>Next</span>
				</button>
			</div>
			<div style={{ padding: '5%' }}>
				<div class='row row-cols-1 row-cols-md-2 g-4'>
					<Artwork />
					<Artwork />
					<Artwork />
					<Artwork />
					<Artwork />
					<Artwork />
					<Artwork />
					<Artwork />
					<Artwork />
					<Artwork />
					<Artwork />
					<Artwork />
				</div>
			</div>
		</div>
	);
};

export default Home;
