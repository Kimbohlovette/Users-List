import React from 'react';
import { MdOutlineMail, MdOutlineModeEditOutline } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';

function ShortUser() {
	return (
		<div className="relative card border border-slate-100 bg-white w-full rounded-md py-4 px-8 cursor-pointer hover:shadow">
			{/* The delete and edit button <Floating top right> */}
			<div className="absolute top-2 right-2 flex flex-row gap-4 items-center p-2 text-slate-500">
				<button className="p-2 rounded-full hover:bg-orange-50 ">
					<RiDeleteBin6Line />
				</button>
				<button className="p-2 rounded-full hover:bg-blue-50">
					<MdOutlineModeEditOutline />
				</button>
			</div>
			<div className="flex items-center gap-x-5 xs:items-start">
				<div>
					<img
						className="object-cover object-center aspect-square rounded-full max-h-12"
						src="https://lyricstranslate.com/files/styles/artist/public/oip_1_0.jpg"
						alt=""
					/>
				</div>
				<div>
					<h1 className="font-semibold text-slate-800">
						Kimboh Lovette
					</h1>
					<span className="text-sm text-blue-300">
						Software Engineer
					</span>
				</div>
			</div>
			<div className="pt-5 flex flex-col gap-y-3 text-sm font-light">
				<div className="text-slate-500 flex flex-row items-center gap-x-2">
					<MdOutlineMail />
					<p>kimbohlovette@gmail.com</p>
				</div>
				<div className="text-slate-500 flex flex-row items-center gap-x-2">
					<BsTelephone />
					<p>+237 654-11-59-22</p>
				</div>
			</div>
		</div>
	);
}

export default ShortUser;
