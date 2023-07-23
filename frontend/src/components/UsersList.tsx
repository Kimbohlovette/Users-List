import React from 'react';
import ShortUser from './ShortUser';
import useSWR from 'swr';
import { fetchAllUsers } from '../utils/fetchAPI';

function UsersList() {
	const { data } = useSWR(
		'/api/v1/users/fetch',
		() => {
			return fetchAllUsers();
		},
		{ revalidateOnFocus: true, suspense: true }
	);
	return (
		<div>
			<div className="flex flex-col gap-y-2">
				{data.map((item: any, key: any) => (
					<ShortUser key={key} user={item} />
				))}
			</div>
			{data.length > 15 && (
				<div className="flex flex-row justify-center my-5 items-center gap-x-4">
					<button className="py-2 px-4 rounded-lg bg-blue-50 focus:bg-blue-100 text-sm">
						Prev
					</button>
					<button className="py-2 px-4 rounded-lg bg-blue-50 focus:bg-blue-100 text-sm">
						Next
					</button>
				</div>
			)}
		</div>
	);
}

export default UsersList;
