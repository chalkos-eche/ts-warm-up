import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TS0919 from './components/TS0919';
import TS0920 from './components/TS0920';
import TS0921 from './components/TS0921';
import Main from './components/Main';
import TS09192 from './components/TS09192';
import TS09193 from './components/TS09193';
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

// 중첩라우터를 추가 할 수있는 6.4 신규기능
// client side browser 를 제공함
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '', element: <Main /> },
			{
				path: '0919',
				element: <TS0919 />,
				children: [
					{ path: '2', element: <TS09192 /> },
					{ path: '3', element: <TS09193 /> },
				],
			},
			{
				path: '0920',
				element: <TS0920 />,
			},
			{
				path: '0921',
				element: <TS0921 />,
			},
		],
	},
]);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
