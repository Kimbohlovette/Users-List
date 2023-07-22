import React, { useState } from 'react';
import UsersList from './components/UsersList';
import CreateUserModal from './components/CreateUserModal';
import { BiPlus } from 'react-icons/bi';

function App() {
	function handleCreateUser() {
		// implement add user
	}
	const [showModal, setShowModal] = useState<boolean>(false);
	return (
		<>
			{showModal && (
				<CreateUserModal
					show={false}
					setShow={setShowModal}
					mode="create"
				/>
			)}
			<div className="bg-slate-100 flex justify-center items-center">
				<div className="min-h-screen py-8 w-full max-w-2xl">
					<header className="mb-4">
						<div className="flex flex-row justify-between">
							<div className="border max-w-fit rounded-md overflow-hidden text-sm flex-1">
								<input
									type="search"
									className="focus:outline-none px-2 py-2 bg-slate-50 focus:bg-white"
								/>
								<button className="h-full focus:outline-none py-2 px-2 bg-blue-400 text-white focus:bg-blue-600">
									Search
								</button>
							</div>
							<button
								onClick={() => {
									setShowModal(true);
								}}
								className="text-slate-600 flex flex-row items-center font-medium gap-x-2 bg-blue-50 hover:bg-blue-100 text-sm py-2 px-4 rounded-md"
							>
								<BiPlus />
								Add User
							</button>
						</div>
					</header>
					<UsersList />
				</div>
			</div>
		</>
	);
}

export default App;
