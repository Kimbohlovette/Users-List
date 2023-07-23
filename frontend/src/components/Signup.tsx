import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

export default function Signup() {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<div>
			<div className="w-full h-screen flex items-center justify-center bg-slate-300/60 z-50">
				<div className="relative p-16 bg-white shadow-xl rounded-md w-full max-w-xl">
					<h1 className="text-slate-700 text-xl font-bold mb-5">
						Sign up for an account
					</h1>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col gap-y-8"
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
