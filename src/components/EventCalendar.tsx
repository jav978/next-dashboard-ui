'use client';

import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

//Temporary
const events = [
	{
		id: 1,
		title: 'Event 1',
		time: '10:00 AM- 11:00 AM',
		description: 'This is the description of the event 1',
	},
	{
		id: 2,
		title: 'Event 2',
		time: '10:00 AM- 11:00 AM',
		description: 'This is the description of the event 2',
	},
	{
		id: 3,
		title: 'Event 3',
		time: '10:00 AM- 11:00 AM',
		description: 'This is the description of the event 3',
	},
];

type Value = ValuePiece | [ValuePiece, ValuePiece];
const EventCalendar = () => {
	const [value, onChange] = useState<Value>(new Date());

	return (
		<div className="bg-white p-4 rounded-xl w-full  gap-4">
			<Calendar onChange={onChange} value={value} />
			<div className="flex items-center justify-between">
				<h1 className="font-semibold text-lg">Events</h1>
				<Image src="/moreDark.png" alt="/" width={20} height={20} />
			</div>
			<div className="flex flex-col gap-4">
				{events.map((event) => (
					<div
						key={event.id}
						className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSkyLight even:border-t-lamaPurple"
					>
						<div className="flex items-center justify-between">
							<h1 className="font-semibold text-gray-600">{event.title}</h1>
							<span className="text-xs text-gray-300">{event.time}</span>
						</div>
						<p className="mt-2 text-sm text-gray-500">{event.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default EventCalendar;
