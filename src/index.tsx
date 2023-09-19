import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { TS0919 } from './components/ts0919';
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

// 중첩라우터를 추가 할 수있는 6.4 신규기능
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/0919',
		element: <TS0919 />,
	},
]);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
