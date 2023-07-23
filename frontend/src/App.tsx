import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Signin from './components/Signin';
import Signup from './components/Signup';
const routes = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/auth',
		element: <Auth />,
		children: [
			{
				path: 'signin',
				element: <Signin />,
			},
			{
				path: 'signup',
				element: <Signup />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={routes} />;
}

export default App;
