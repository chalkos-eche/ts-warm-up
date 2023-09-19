import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<hr />
			<button>
				<Link to="/">HOME</Link>
			</button>
		</div>
	);
};

export default Home;
