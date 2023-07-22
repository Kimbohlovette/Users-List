import React from 'react';
import ShortUser from './ShortUser';

function UsersList() {
	return (
		<div>
			<div className="flex flex-col gap-y-2">
				<ShortUser />
				<ShortUser />
				<ShortUser />
				<ShortUser />
				<ShortUser />
				<ShortUser />
			</div>
			<div className="flex flex-row justify-center my-5 items-center gap-x-4">
				<button className="py-2 px-4 rounded-lg bg-blue-50 focus:bg-blue-100 text-sm">
					Prev
				</button>
				<button className="py-2 px-4 rounded-lg bg-blue-50 focus:bg-blue-100 text-sm">
					Next
				</button>
			</div>
		</div>
	);
}

export default UsersList;
