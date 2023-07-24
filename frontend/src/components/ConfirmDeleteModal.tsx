import React from 'react';
import { deleteUser } from '../utils/fetchAPI';
import { useSWRConfig } from 'swr';

function ConfirmDeleteModal({
	id,
	name,
	setShow,
}: {
	id: string;
	name: string;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const { mutate } = useSWRConfig();
	const handleDelete = () => {
		deleteUser(id).then((id) => {
			mutate('/api/v1/users/fetch');
			setShow(false);
		});
	};
	return (
		<div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black/10 z-[100]">
			<div className=" max-2xl rounded-md shadow-lg bg-white p-8">
				<p className="text-slate-600 mb-5">
					Do you want to perminently delete <strong>{name}</strong>?
				</p>
				<div className="flex flex-row justify-center gap-x-8">
					<button
						onClick={() => setShow(false)}
						className="bg-slate-100 rounded-md px-4 py-2 text-slate-600 text-sm font-light"
					>
						Cancel
					</button>
					<button
						className="bg-red-500 text-white rounded-md px-4 py-2 text-sm"
						onClick={handleDelete}
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}

export default ConfirmDeleteModal;
