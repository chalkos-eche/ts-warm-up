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
import TS09202 from './components/TS09202';
import TS0922 from './components/TS0922';
import TS09222 from './components/TS09222';
import TS0924 from './components/TS0924';
import TS09242 from './components/TS09242';
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
				children: [{ path: '2', element: <TS09202 /> }],
			},
			{
				path: '0921',
				element: <TS0921 />,
			},
			{
				path: '0922',
				element: <TS0922 />,
				children: [{ path: '2', element: <TS09222 /> }],
			},
			{
				path: '0924',
				element: <TS0924 />,
				children: [{ path: '2', element: <TS09242 /> }],
			},
		],
	},
]);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
