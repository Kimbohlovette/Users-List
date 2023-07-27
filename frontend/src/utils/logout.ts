import { redirect } from 'react-router-dom';

export const logout = () => {
	localStorage.removeItem('@token');
	redirect('http://localhost:3000/');
};
