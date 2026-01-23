"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ExploreCampus() {
  const router = useRouter();

  const campuses = [
    {
      name: "Pallavaram Campus",
      helpline: "74016 51975",
      image: "/main/pallavaram-1.jpg",
      url: "/pallavaram",
    },

    {
      name: "Cantonment Campus",
      helpline: "99625 31941",
      image: "/main/thalambur-1.jpg",

      url: "#",
    },
    {
      name: "Thalambur Campus",
      helpline: "74016 51975",
      image: "/main/cantonment-1.jpg",
      url: "/thalambur",
    },
    {
      name: "Darga Road Campus",
      helpline: "99625 06539",
      image: "/main/dargaroad-1.jpg",
      url: "/dargaroad",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-primary-bold text-black tracking-wide">
          WISDOM IS STRENGTH
        </h2>

        <div className="w-36 h-[1px] bg-secondary mx-auto mt-2 mb-2"></div>

        <p className="text-black font-secondary font-secondary-semibold text-lg mt-5">
          Explore Campuses
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {campuses.map((campus, i) => (
            <Link
              key={i}
              href={campus.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden shadow-lg hover:scale-[1.03] transition-all"
            >
              <div className="relative w-full">
                <Image
                  src={campus.image}
                  alt={campus.name}
                  width={303} // put the real width of image
                  height={372} // put the real height of image
                  className="w-full h-auto object-contain"
                />

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-primary font-primary-semibold text-lg text-white text-left">
                    {campus.name}
                  </h3>
                  <div className="w-36 h-[1px] bg-secondary mt-2 mb-2"></div>
                  <p className="text-sm font-secondary font-secondary-regular">
                    Admission Helpline: {campus.helpline}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
