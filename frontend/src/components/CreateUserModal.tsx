import React, { useEffect, useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import { User } from '../types';
import { useForm } from 'react-hook-form';
import { createUser, updateUser } from '../utils/fetchAPI';
function CreateUserModal({
	mode,
	setShow,
	data,
}: {
	mode: 'create' | 'edit';
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	data?: User;
}) {
	const [error, setError] = useState<string>('');
	useEffect(() => {
		if (mode === 'edit') {
			if (data) {
				reset(data);
			}
		}
	}, []);

	const { register, handleSubmit, reset } = useForm({
		defaultValues: data,
	});

	const onSubmit = async (formData: any) => {
		// clear errors
		setError('');

		// Check if mode is 'edit'
		if (mode === 'edit' && data) {
			const updateRes = await updateUser(data.id, formData);
			if (!updateRes.ok) {
				const resData = await updateRes.json();
				console.log(resData.error);
				setError(resData.message);
				return;
			}
			console.log('All good!');
			setShow(false);
			return;
		}

		// Else create a new user
		const res = await createUser(formData);
		if (!res) {
			setError(
				`An error occured while ${
					mode === 'edit' ? 'editing' : 'creating'
				}.`
			);
		} else {
			if (!res.ok) {
				const resData = await res.json();
				console.log(resData.error);
				setError(resData.message);
				return;
			}
			console.log('created!');
			setShow(false);
		}
	};

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
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col gap-y-8"
				>
					<div>
						<label
							htmlFor="name"
							className="relative block text-slate-600 max-w-fit"
						>
							<span className="absolute -top-1 -right-4 text-red-500">
								*
							</span>
							Full Name
						</label>
						<input
							{...register('name')}
							type="text"
							name="name"
							required
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
							{...register('email')}
							type="email"
							name="email"
							required
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
								{...register('phoneNumber')}
								type="tel"
								name="phoneNumber"
								required
								placeholder="+(237) 654-11-59-22"
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
								{...register('profession')}
								type="text"
								id="profession"
								name="profession"
								placeholder="Software Developer"
								className="flex-1 py-3 px-4 focus:outline-none border rounded-md min-w-0 w-full focus:border-blue-400 focus:ring-1"
							/>
						</div>
					</div>
					{!!error && (
						<span className="text-red-500 font-light text-sm py-2">
							{error}
						</span>
					)}
					<div className="flex flex-row justify-end">
						<button className="w-full max-w-[50%] py-3 px-4 focus:outline-none border rounded-md min-w-0 focus:border-blue-400 hover:bg-blue-500 focus:ring-1 bg-blue-400 text-white text-semibold font-semibold">
							Create user
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CreateUserModal;
