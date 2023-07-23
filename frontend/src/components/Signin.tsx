import { useForm } from 'react-hook-form';
import { TfiClose } from 'react-icons/tfi';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Signin() {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<div>
			<div className="w-full h-screen flex items-center justify-center bg-slate-300/60 z-50">
				<div className="relative p-16 bg-white shadow-xl rounded-md w-full max-w-xl">
					<button
						onClick={() => {
							navigate('/');
						}}
						className="absolute top-5 right-5 p-2 hover:bg-blue-50 rounded-xl"
					>
						<TfiClose />
					</button>
					<h1 className="text-slate-700 text-xl font-bold mb-5">
						Sign in to your account{' '}
					</h1>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col gap-y-8"
					>
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
								{...register('phoneNumber')}
								type="password"
								name="password"
								required
								placeholder="Enter password"
								className="flex-1 py-3 px-4 focus:outline-none border rounded-md min-w-0 w-full focus:border-blue-400 focus:ring-1"
							/>
						</div>
						<div className="flex flex-row justify-end">
							<button className="w-full max-w-[50%] py-3 px-4 focus:outline-none border rounded-md min-w-0 focus:border-blue-400 hover:bg-blue-500 focus:ring-1 bg-blue-400 text-white text-semibold font-semibold">
								Signin
							</button>
						</div>
						<p className="text-sm text-slate-600">
							Don't have an account yet?{' '}
							<NavLink
								className="text-blue-500 font-medium"
								to={'http://localhost:3000/auth/signup'}
							>
								Create account
							</NavLink>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}
