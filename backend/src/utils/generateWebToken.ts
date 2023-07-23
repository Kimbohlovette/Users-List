const jwt = require('jsonwebtoken');
const generateWebToken = (
	secret: string,
	payload: { username: string; id: string }
) => {
	return jwt.sign(
		{
			...payload,
			iat: new Date(Date.now()),
			exp: new Date(Date.now() + 1000 * 60 * 60),
		},
		secret,
		{ algorithm: 'HS256' }
	);
};
