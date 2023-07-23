import { User } from '../types';

const token = 'somefaketoken';
export const fetchAllUsers = async (page?: number, limit?: number) => {
	try {
		const response = await fetch(
			`http://localhost:5000/users${page ? '?page=' + page : ''}${
				limit ? '&limit=' + limit : ''
			}`
		);
		const resData = await response.json();
		return resData.users;
	} catch (error) {
		console.log(error);
	}
};

export const createUser = async (payload: User) => {
	try {
		const response = await fetch('http://localhost:5000/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			body: JSON.stringify(payload),
		});

		//const responseData = await response.json();
		return response;
	} catch (error) {
		console.log(error);
	}
};

export const updateUser = async (userId: string, payload: any) => {
	const response = await fetch(`http://localhost:5000/users/${userId}`, {
		body: JSON.stringify(payload),
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`,
		},
	});
	return response;
};

export const deleteUser = async (userId: string) => {
	const response = await fetch(`http://localhost:5000/users/${userId}`, {
		method: 'DELETE',
	});

	return (await response.json()).deletedId;
};

export const signup = async (payload: {
	username: string;
	email: string;
	password: string;
}) => {
	try {
		const response = await fetch('http://localhost:5000/auth/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};
export const signin = async (payload: { email: string; password: string }) => {
	try {
		const response = await fetch('http://localhost:5000/auth/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};
