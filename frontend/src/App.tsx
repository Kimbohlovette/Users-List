import React from 'react';
import ShortUser from './components/ShortUser';
import UsersList from './components/UsersList';
import CreateUserModal from './components/CreateUserModal';

function App() {
	return (
		<div className="bg-slate-100 min-h-screen py-8">
			<UsersList />
		</div>
	);
}

export default App;
