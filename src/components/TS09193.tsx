import React from 'react';
import { Link } from 'react-router-dom';

const TS09193 = () => {
	return (
		<div>
			<p>TS09193.tsx</p>
			<h2>Test2</h2>
			{location.pathname === '/0919/3' && (
				<button>
					<Link to="/0919/4">Next</Link>
				</button>
			)}
		</div>
	);
};

export default TS09193;
