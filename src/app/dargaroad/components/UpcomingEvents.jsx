"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function UpcomingEvents() {
  const exam = {
    day: "03",
    month: "December",
    year: "2025",
    note: "PT3 ends for Std I - VIII",
  };

  const upcomingEvents = [
    { day: "06", month: "November", year: "2025", note: "Club Activities" },
    { day: "13", month: "November", year: "2025", note: "General Assembly" },
    { day: "20", month: "November", year: "2025", note: "Club Activities" },
    { day: "27", month: "November", year: "2025", note: "General Assembly" },
  ];

  return (
 <section className="w-full py-12">
<div className="max-w-4xl mx-auto px-4">


{/* Title */}
<h2 className="text-lg md:text-2xl font-primary font-primary-bold text-black text-center">
Upcoming Events–November
</h2>
<div className="w-28 h-[1px] bg-secondary mx-auto mt-2 mb-6" />


{/* TABLE FORMAT */}
<div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
<table className="w-full table-auto text-left text-sm">
<thead className="bg-[#231834] text-white">
<tr>
<th className="px-4 py-3 font-primary text-center font-primary-semibold">Date</th>
<th className="px-4 py-3 font-primary text-center font-primary-semibold">Event</th>
</tr>
</thead>


<tbody>
{upcomingEvents.map((event, idx) => (
<tr
key={idx}
className="border-b border-gray-200 hover:bg-gray-50 transition"
>
<td className="px-4 py-3 flex items-center justify-center gap-3 text-center">
<Image
src="/dargaroad/calendar.svg"
alt="calendar"
width={20}
height={20}
/>
<span className="font-primary text-center font-primary-semibold">
{event.day} | {event.month} | {event.year}
</span>
</td>


<td className="px-4 py-3 text-center font-secondary font-secondary-bold">
{event.note}
</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
</section>
  );
}
