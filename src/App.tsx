import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Home from './components/Home';
function App() {
	const location = useLocation();
	return (
		<div className="App">
			<div>
				<button>
					<Link to="0919">0919</Link>
				</button>
				<button>
					<Link to="0920">0920</Link>
				</button>
				<button>
					<Link to="0921">0921</Link>
				</button>
				<hr />
			</div>
			<Outlet />
			{location.pathname !== '/' ? <Home /> : null}
		</div>
	);
}

export default App;
