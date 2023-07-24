import React, { useState } from 'react';
import { MdOutlineMail, MdOutlineModeEditOutline } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { User } from '../types';
import CreateUserModal from './CreateUserModal';
import ConfirmDeleteModal from './ConfirmDeleteModal';

function ShortUser({ user }: { user: User }) {
	function handleEdit() {
		setShowEditModal(true);
	}

	const [showEditModal, setShowEditModal] = useState<boolean>(false);
	const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

	return (
		<>
			{showEditModal && (
				<CreateUserModal
					mode="edit"
					data={user}
					setShow={setShowEditModal}
				/>
			)}
			{showDeleteModal && (
				<ConfirmDeleteModal
					id={user.id}
					name={user.name}
					setShow={setShowDeleteModal}
				/>
			)}
			<div className="relative card border border-slate-100 bg-white w-full rounded-md py-4 px-8 cursor-pointer hover:shadow">
				{/* The delete and edit button <Floating top right> */}
				<div className="absolute top-2 right-2 flex flex-row gap-4 items-center p-2 text-slate-500">
					<button
						onClick={() => {
							setShowDeleteModal(true);
						}}
						className="p-2 rounded-full hover:bg-orange-50 "
					>
						<RiDeleteBin6Line />
					</button>
					<button
						onClick={handleEdit}
						className="p-2 rounded-full hover:bg-blue-50"
					>
						<MdOutlineModeEditOutline />
					</button>
				</div>
				<div className="flex items-center gap-x-5 xs:items-start">
					<div>
						<div className="object-cover object-center aspect-square rounded-full h-12 bg-blue-600 flex items-center justify-center font-bold text-white">
							<h1>{user.name[0].toUpperCase()}</h1>
						</div>
					</div>
					<div>
						<h1 className="font-semibold text-slate-800">
							{user.name}
						</h1>
						<span className="text-sm text-blue-300">
							{user.profession}
						</span>
					</div>
				</div>
				<div className="pt-5 flex flex-col gap-y-3 text-sm font-light">
					<div className="text-slate-500 flex flex-row items-center gap-x-2">
						<MdOutlineMail />
						<p>{user.email}</p>
					</div>
					<div className="text-slate-500 flex flex-row items-center gap-x-2">
						<BsTelephone />
						<p>{user.phoneNumber}</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default ShortUser;
