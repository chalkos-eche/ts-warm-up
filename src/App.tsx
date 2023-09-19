import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Back from './components/Back';
function App() {
	const location = useLocation();
	return (
		<div className="App">
			<button>
				<Link to="0919">0919</Link>
			</button>
			<button>
				<Link to="0920">0920</Link>
			</button>
			<button>
				<Link to="0921">0921</Link>
			</button>
			<Outlet />
			{location.pathname !== '/' ? <Back /> : null}
		</div>
	);
}

export default App;
