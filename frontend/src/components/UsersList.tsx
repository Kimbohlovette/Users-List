import React from 'react';
import ShortUser from './ShortUser';
import { User } from '../types';

function UsersList() {
	const user: User = {
		name: 'Kimboh Lovette',
		email: 'kimbohlovette@gmail.com',
		phoneNumber: '+237 656-11-59-22',
		profession: 'Software Developer',
	};
	return (
		<div>
			<div className="flex flex-col gap-y-2">
				<ShortUser user={user} />
				<ShortUser user={user} />
				<ShortUser user={user} />
				<ShortUser user={user} />
				<ShortUser user={user} />
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
