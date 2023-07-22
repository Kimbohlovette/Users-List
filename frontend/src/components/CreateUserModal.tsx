import React, { useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import { User } from '../types';
function CreateUserModal({
	show,
	mode,
	data,
	setShow,
}: {
	show: boolean;
	mode: 'create' | 'edit';
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	data?: User;
}) {
	return (
		<div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-slate-600/60 backdrop-blur-sm z-50">
			<div className="relative p-16 bg-white shadow-xl rounded-md w-full max-w-xl">
				{/* Close button */}
				<button
					onClick={() => {
						setShow(false);
					}}
					className="absolute top-5 right-5 p-2 hover:bg-blue-50 rounded-xl"
				>
					<TfiClose />
				</button>
				<h1 className="mb-5 text-slate-600 text-2xl font-bold">
					Create new user
				</h1>
				<div className="flex flex-col gap-y-8">
					<div>
						<label
							htmlFor="profession"
							className="relative block text-slate-600 max-w-fit"
						>
							<span className="absolute -top-1 -right-4 text-red-500">
								*
							</span>
							Full Name
						</label>
						<input
							type="text"
							name="userName"
							placeholder="John Doe"
							className="py-3 px-4 focus:outline-none border rounded-md min-w-0 w-full focus:border-blue-400 focus:ring-1"
						/>
					</div>

					<div>
						<label
							htmlFor="email"
							className="relative block text-slate-600 max-w-fit"
						>
							<span className="absolute -top-1 -right-4 text-red-500">
								*
							</span>
							Email
						</label>
						<input
							type="email"
							name="email"
							placeholder="john-doe@someone.com"
							className="py-3 px-4 focus:outline-none border rounded-md min-w-0 w-full focus:border-blue-400 focus:ring-1"
						/>
					</div>

					<div className="flex flex-row gap-2 text-sm">
						<div>
							<label
								htmlFor="phoneNumber"
								className="relative block text-slate-600 max-w-fit"
							>
								<span className="absolute -top-1 -right-4 text-red-500">
									*
								</span>
								Phone number
							</label>
							<input
								type="phone"
								name="phoneNumber"
								placeholder="+237 654-11-59-22"
								className="flex-1 py-3 px-4 focus:outline-none border rounded-md min-w-0 focus:border-blue-400 focus:ring-1"
							/>
						</div>

						<div>
							<label
								htmlFor="profession"
								className="block text-slate-600"
							>
								Profession
							</label>
							<input
								type="text"
								id="profession"
								name="profession"
								placeholder="Software Developer"
								className="flex-1 py-3 px-4 focus:outline-none border rounded-md min-w-0 w-full focus:border-blue-400 focus:ring-1"
							/>
						</div>
					</div>
					<div className="flex flex-row justify-end">
						<button
							onClick={() => {
								// add create functionality here
								setShow(false);
							}}
							className="w-full max-w-[50%] py-3 px-4 focus:outline-none border rounded-md min-w-0 focus:border-blue-400 hover:bg-blue-500 focus:ring-1 bg-blue-400 text-white text-semibold font-semibold"
						>
							Create user
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreateUserModal;
