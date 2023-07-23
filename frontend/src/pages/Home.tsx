import React, { Suspense, useEffect, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { useSWRConfig } from 'swr';
import CreateUserModal from '../components/CreateUserModal';
import UsersList from '../components/UsersList';

function Home() {
	const [showModal, setShowModal] = useState<boolean>(false);

	const { mutate } = useSWRConfig();

	useEffect(() => {
		mutate('/api/v1/users/fetch');
	}, [showModal]);
	return (
		<>
			{showModal && (
				<CreateUserModal setShow={setShowModal} mode="create" />
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
					<Suspense fallback={<span>Loading...</span>}>
						<UsersList />
					</Suspense>
				</div>
			</div>
		</>
	);
}

export default Home;
