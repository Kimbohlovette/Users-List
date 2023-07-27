import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { signup } from '../utils/fetchAPI';
import { TfiClose } from 'react-icons/tfi';
import { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { updateAuthStatus } from '../store/slices/userSlice';

export default function Signup() {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const [error, setError] = useState<string>('');
	const dispatch = useAppDispatch();

	const onSubmit = async (data: any) => {
		const res = await signup(data);
		if (!res) {
			setError('Oops! Something went wrong. Try again later.');
		} else {
			if (!res.ok) {
				const error = await res.json();
				setError(error.message);
				return;
			}
			localStorage.setItem('@token', (await res.json()).token);
			dispatch(updateAuthStatus(false));
			navigate('/');
		}
	};

	return (
		<div>
			<div className="w-full h-screen flex items-center justify-center bg-slate-300/60 z-50">
				<div className="relative px-8 sm:p-x-16 py-12 bg-white shadow-xl rounded-md w-full max-w-xl">
					<button
						onClick={() => {
							navigate('/');
						}}
						className="absolute top-5 right-5 p-2 hover:bg-blue-50 rounded-xl"
					>
						<TfiClose />
					</button>
					<h1 className="text-slate-700 text-xl font-bold mb-2">
						Sign up for an account
					</h1>

					<p
						className={
							!!error
								? 'text-sm font-light text-red-500 my-2 text-center'
								: 'invisible my-2'
						}
					>
						{error}
					</p>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col gap-y-5"
					>
						<div>
							<label
								htmlFor="username"
								className="relative block text-slate-600 max-w-fit"
							>
								<span className="absolute -top-1 -right-4 text-red-500">
									*
								</span>
								User Name
							</label>
							<input
								{...register('username')}
								type="text"
								name="username"
								required
								placeholder="johndoe"
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

						<div>
							<label
								htmlFor="password"
								className="relative block text-slate-600 max-w-fit"
							>
								<span className="absolute -top-1 -right-4 text-red-500">
									*
								</span>
								Password
							</label>
							<input
								{...register('password')}
								type="password"
								name="password"
								required
								placeholder="Enter password"
								className="flex-1 py-3 px-4 focus:outline-none border rounded-md min-w-0 w-full focus:border-blue-400 focus:ring-1"
							/>
						</div>
						<div className="flex flex-row justify-end">
							<button className="w-full max-w-[50%] py-3 px-4 focus:outline-none border rounded-md min-w-0 focus:border-blue-400 hover:bg-blue-500 focus:ring-1 bg-blue-400 text-white text-semibold font-semibold">
								Signup
							</button>
						</div>
						<p className="text-sm text-slate-600">
							Already have an account?{' '}
							<NavLink
								className="text-blue-500 font-medium"
								to={'http://localhost:3000/auth/signin'}
							>
								Sign in here
							</NavLink>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}
