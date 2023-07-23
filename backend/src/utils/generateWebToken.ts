const jwt = require('jsonwebtoken');
export const generateWebToken = (
	secret: string,
	payload: { username: string; id: string }
) => {
	return jwt.sign(
		{
			...payload,
			iat: Date.now(),
			exp: Date.now() + 1000 * 60 * 60,
		},
		secret,
		{ algorithm: 'HS256' }
	);
};
