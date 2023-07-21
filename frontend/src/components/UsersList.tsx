import React from 'react';
import ShortUser from './ShortUser';

function UsersList() {
	return (
		<div className="flex flex-col gap-y-2">
			<ShortUser />
			<ShortUser />
			<ShortUser />
			<ShortUser />
			<ShortUser />
			<ShortUser />
		</div>
	);
}

export default UsersList;
