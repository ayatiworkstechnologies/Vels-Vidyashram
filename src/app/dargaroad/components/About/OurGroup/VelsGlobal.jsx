"use client";
import Image from "next/image";
import Link from "next/link";

const SCHOOLS = [
  {
    id: 1,
    title: "Vels Global School – ARAKERE",
    image: "/dargaroad/vels-1.jpg",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 2,
    title: "Vels Global School – DELHI WORLD PUBLIC SCHOOL – PUNJAB",
    image: "/dargaroad/vels-2.jpg",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 3,
    title: "Vels Global School – ARAKERE ",
    image: "/dargaroad/vels-3.jpg",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 4,
    title: "Vels Global School – HORAMAVU",
    image: "/dargaroad/vels-4.jpg",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 5,
    title: "Vels Global School – HOWRAH",
    image: "/dargaroad/vels-5.png",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 6,
    title: "Vels Global School -HSR LAYOUT ",
    image: "/dargaroad/vels-6.jpg",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 7,
    title: "Vels Global School – KEELKATTALAI",
    image: "/dargaroad/vels-7.jpg",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 8,
    title: "Vels Global School – MARTHAHALLI",
    image: "/dargaroad/vels-8.jpg",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 9,
    title: "Vels Global School -MEDAVAKKAM",
    image: "/dargaroad/vels-9.jpg",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 10,
    title: "Vels Global School – MOGAPPAIR",
    image: "/dargaroad/vels-10.jpg",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 11,
    title: "Vels Global School – NANDAMBAKKAM",
    image: "/dargaroad/vels-11.jpg",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 12,
    title: "Vels Global School – NERKUNDRAM",
    image: "/dargaroad/vels-12.jpg",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 13,
    title: "Vels Global School – NEW TOWN",
    image: "/dargaroad/vels-13.jpg",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 14,
    title: "Vels Global School – TAMBARAM",
    image: "/dargaroad/vels-14.jpg",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
  {
    id: 15,
    title: "Vels Global School – PARIPOORNA PRAGNYA",
    image: "/dargaroad/vels-15.jpg",
    href: "https://velsglobalschool.ac.in/",
    borderColor: "border-primary",
  },
];

export default function VelsGlobal() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-8">
          {SCHOOLS.map((item) => (
            <div key={item.id} className="relative pt-24 group">
              <Link href={item.href} className="block cursor-pointer">

                {/* Image */}
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 w-[55%] h-48 z-10 rounded-xl overflow-hidden border-2 ${item.borderColor} shadow-lg transition-transform group-hover:scale-105`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Card */}
                <div className="bg-yellow-50 rounded-xl p-8 pt-32 shadow-sm text-center flex flex-col items-center mt-5 hover:shadow-md transition-shadow">
                  <h3 className="text-md font-semibold font-primary text-gray-800 mb-4 leading-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <span className="px-6 py-2 bg-primary text-white font-medium rounded-md hover:bg-tertiary font-secondary transition-colors inline-block">
                    {item.buttonText || "Learn More"}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}