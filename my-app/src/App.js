import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Individual from './components/Individual';
import Navbar from './components/Navbar';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<div className='App'>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/individual' element={<Individual />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
