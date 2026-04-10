"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Added Link component

const SCHOOL_DATA = {
  colleges: [
    {
      id: 1,
      title: "Vels University, Pallavaram, Chennai",
      image: "/dargaroad/college-1.jpg",
      href: "https://vistas.ac.in/",
      borderColor: "border-primary",
    },
    {
      id: 2,
      title: "Mahavir Institute of Medical Sciences, Vikarabad, Hyderabad – Telangana",
      image: "/dargaroad/mi.jpg",   
      href: "https://vistas.ac.in/",
     
    },
    {
      id: 3,
      title: "Mahavir Institute of Medical Sciences, Meghna Institute of Dental Sciences, Mallaram, Nizamabad, Telangana",
      image: "/dargaroad/college-3.jpg",
      href: "http://www.meghnadentalcollege.com/",
      borderColor: "border-primary",
    },
    {
      id: 4,
      title: "Sri Venkateswara Dental College & Hospital,Thalambur, Chennai",
      image: "/dargaroad/college-4.jpg",
      href: "https://www.svdentalcollege.com/",
      borderColor: "border-primary",
    },
    {
      id: 5,
      title: "Venkateswara Nursing College, Thalambur,Chennai Thalambur",
      image: "/dargaroad/college-5.jpg",
      href: "http://www.venkateswaranursing.ac.in/",
      borderColor: "border-primary",
    },
    {
      id: 6,
      title: "Shri ISARI Velan Mission Hospital, Thalambur, Chennai",
      image: "/dargaroad/college-6.jpg",
      href: "https://www.velanhospital.com/",
      borderColor: "border-primary",
    },
    {
      id: 7,
      title: "VELS MEDICAL COLLEGE & HOSPITAL – PERIYAPALAYAM",
      image: "/dargaroad/college-7.jpg",
      href: "https://velsmedicalcollege.com/",
      borderColor: "border-primary",
    },
    {
      id: 8,
      title: "MEGHNA INSTITUTE OF DENTAL SCIENCES (MIDS) NIZAMABADV",
      image: "/dargaroad/college-8.jpg",
      href: "https://www.meghnadentalcollege.ac.in/",
      borderColor: "border-primary",
    },
    {
      id: 9,
      title: "VELS MARITIME STUDIES-THALAMBURM",
      image: "/dargaroad/college-9.jpg",
      href: "https://www.vaelsinternationalschool.com/",
      borderColor: "border-primary",
    },
    {
      id: 10,
      title: "VENKATESWARA DENTAL COLLEGE-THALAMBUR",
      image: "/dargaroad/college-10.jpg",
      href: "https://www.svdentalcollege.com/",
      borderColor: "border-primary",
    },
    {
      id: 11,
      title: "VELS NURSING COLLEGE-PERIYAPALAYAMVELS MEDICAL COLLEGE & HOSPITAL – PERIYAPALAYAM",
      image: "/dargaroad/college-11.jpg",
      href: "https://velnursingcollege.com/",
      borderColor: "border-primary",
    },
     {
      id: 12,
      title: "VELS SCHOOL OF AVIATION-PALLAVARAM",
      image: "/dargaroad/college-12.jpg",
      href: "https://vistas.ac.in/",
      borderColor: "border-primary",
    },
      {
      id: 13,
      title: "CTC-LONDON",
      image: "/dargaroad/college-13.jpg",
      href: "https://ctc.ac.uk/end-of-term-assemblies/",
      borderColor: "border-primary",
    },
      {
      id: 14,
      title: "VISTAS-PALLAVARAM",
      image: "/dargaroad/college-14.jpg",
      href: "https://vistas.ac.in/",
      borderColor: "border-primary",
    },
  ],

  schools: [
    {
      id: 1,
      title: "Vels Vidyashram (CBSE School), Darga Road Campus,Pallavaram, Chennai",
      image: "/dargaroad/school-1.jpg",
      href: "http://www.velsvidyashram.com/home.htm",
      borderColor: "border-primary",
    },
    {
      id: 2,
      title: "Vels Vidyashram (CBSE School), Thalambur, Chennai",
      image: "/dargaroad/school-2.jpg",
      href: "https://velsvidyashram.ac.in/",
      borderColor: "border-primary",
    },
    {
      id: 3,
      title: "Vaels International School, Injambakkam, Chennai",
      image: "/dargaroad/school-3.jpg",
      href: "https://www.vaelsinternationalschool.com/",
      borderColor: "border-primary",
    },
    {
      id: 4,
      title: "Vels International Pre School – Kindle Kids, Neelankarai, Chennai",
      image: "/dargaroad/school-4.jpg",
      href: "http://www.velsinternationalpreschool.com/",
      borderColor: "border-primary",
    },
    {
      id: 5,
      title: "Vels Vidyashram (CBSE School),Pallavaram, Chennai",
      image: "/dargaroad/school-5.jpg",
      href: "http://www.velsvidyashram.com/home.htm",
      borderColor: "border-primary",
    },
    {
      id: 6,
      title: "Vels Vidyashram Kindergarten, Cantonment – Pallavaram, Chennai",
      image: "/dargaroad/school-6.jpg",
      href: "http://www.velsvidyashram.com/Kindergarten/index.htm",
      borderColor: "border-primary",
    },
    {
      id: 7,
      title: "Vels Kinder Kids, Mylapore, Chennai",
      image: "/dargaroad/school-7.jpg",
      href: "https://www.velskinderkids.com/index.asp",
      borderColor: "border-primary",
    },
    {
      id: 8,
      title: "BRIGHT LEARNERS DUBAI",
      image: "/dargaroad/school-8.jpg",
      href: "https://www.brightlearners.ae/",
      borderColor: "border-primary",
    },
    {
      id: 9,
      title: "KINDLE KIDS INTERNATIONAL SCHOOL, HINDOO ROAD, SINGAPORE",
      image: "/dargaroad/school-9.jpg",
      href: "https://kindlekids.sg/",
      borderColor: "border-primary",
    },
    {
      id: 10,
      title: "KINDLE KIDS INTERNATIONAL SCHOOL, THOMSON ROAD, SINGAPORE",
      image: "/dargaroad/school-10.jpg",
      href: "https://kindlekids.sg/",
      borderColor: "border-primary",
    },
    {
      id: 11,
      title: "BRIGHT LEARNERS DUBAI",
      image: "/dargaroad/school-11.jpg",
      href: "https://velsfc.com/",
      borderColor: "border-primary",
    },
    {
      id: 12,
      title: "Vels INTERNATIONAL SCHOOL – INJAMBAKKAM &  NEELANKARAI",
      image: "/dargaroad/school-12.jpg",
      href: "https://www.vaelsinternationalschool.com/",
      borderColor: "border-primary",
    },
    {
      id: 13,
      title: "Vels Vidyashram Schools-CANTONMENT",
      image: "/dargaroad/school-13.jpg",
      href: "https://velsvidyashram.ac.in/cantonment/",
      borderColor: "border-primary",
    },
    {
      id: 14,
      title: "Vels Vidyashram Schools-DARGA ROAD",
      image: "/dargaroad/school-14.jpg",
      href: "https://velsvidyashram.ac.in/dargaroad/",
      borderColor: "border-primary",
    },
    {
      id: 15,
      title: "Vels Vidyashram Schools-PALLAVARAM",
      image: "/dargaroad/school-15.jpg",
      href: "https://velsvidyashram.ac.in/pallavaram/",
      borderColor: "border-primary",
    },
    {
      id: 16,
      title: "Vels Vidyashram Schools-THALAMBUR",
      image: "/dargaroad/school-16.jpg",
      href: "https://velsvidyashram.ac.in/thalambur/",
      borderColor: "border-primary",
    },
    {
      id: 17,
      title: "VELS GLOBAL SCHOOL",
      image: "/dargaroad/school-17.jpg",
      href: "/dargaroad/vels-global-school",
      buttonText: "Visit Vels Global School",
      borderColor: "border-primary",
    },
  ],
};


export default function OurGroupSection() {
  const [activeTab, setActiveTab] = useState("colleges");

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-16">
          {["colleges", "schools"].map((loc) => (
            <button
              key={loc}
              onClick={() => setActiveTab(loc)}
              className={`px-8 py-2 rounded-full border transition-all capitalize font-medium ${
                activeTab === loc
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-8">
          {SCHOOL_DATA[activeTab].map((item) => (
            <div key={item.id} className="relative pt-24 group">
              {/* Entire Card wrapped in Link for accessibility/SEO, 
                  but we use a div for layout and Link for the action */}
              <Link href={item.href} className="block cursor-pointer">
                {/* Overlapping Image Container */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[55%] h-48 z-10 rounded-xl overflow-hidden border-2 ${item.borderColor} shadow-lg transition-transform group-hover:scale-105`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className=""
                  />
                </div>

                {/* Card Body */}
                <div className="bg-yellow-50 rounded-xl p-8 pt-32 shadow-sm text-center flex flex-col items-center mt-5 hover:shadow-md transition-shadow">
                  <h3 className="text-md font-semibold font-primary text-gray-800 mb-4 leading-tight group-hover:text-primary transition-colors uppercase">
                    {item.title}
                  </h3>
                 
                  
                  {/* Button Link */}
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