import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { Provider } from 'react-redux';
import { store } from './store/store';
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
	return (
		<Provider store={store}>
			<RouterProvider router={routes} />
		</Provider>
	);
}

export default App;
