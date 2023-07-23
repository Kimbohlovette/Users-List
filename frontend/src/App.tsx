import React, { Suspense, useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
const routes = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/auth',
		element: <Auth />,
	},
]);

function App() {
	return <RouterProvider router={routes} />;
}

export default App;
