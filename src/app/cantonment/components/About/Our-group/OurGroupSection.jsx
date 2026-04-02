"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Added Link component

const SCHOOL_DATA = {
  chennai: [
    {
      id: 1,
      title: "Vels university",
      desc: "With excellent placement services and hands-on training to students, vistas is also a mentor university for institutional governance under naac criteria",
      image: "/thalambur/g1.jpg",
      buttonText: "Pallavaram campus",
      href: "https://vistas.ac.in/",
      borderColor: "border-primary",
    },
    {
      id: 2,
      title: "Sri venkateswara dental college & hospital",
      desc: "The institution is approved by government of india, dental council of india, new delhi and affiliated to the tamil nadu dr m.g.r. medical university",
      image: "/thalambur/g2.jpg",
      buttonText: "Thalambur campus",
      href: "https://www.svdentalcollege.com/",
      borderColor: "border-primary",
    },
    {
      id: 3,
      title: "Venkateswara nursing college",
      desc: "The institution is recognized by the government of tamil nadu, indian nursing council, tn nurses and midwives council",
      image: "/thalambur/g12.jpg",
      buttonText: "Thalambur campus",
      href: "http://www.venkateswaranursing.ac.in/",
      borderColor: "border-primary",
    },
    {
      id: 4,
      title: "Shri isari velan mission hospital",
      desc: "The 100 bedded palliative care hospital provides compassionate care for those individuals living with a life-limiting illness and their families, through quality medical.",
      image: "/thalambur/g11.jpg",
      buttonText: "Thalambur campus",
      href: "https://www.velanhospital.com/",
      borderColor: "border-primary",
    },
    {
      id: 5,
      title: "Vels vidyashram (cbse school)",
      desc: "The schools are ranked #1 for academic reputation. Individual attention to students, extra curricular activities and innovative teaching methods",
      image: "/thalambur/g13.jpg",
      buttonText: "Dharga road campus, pallavaram",
      href: "http://velsvidyashram.in/",
      borderColor: "border-primary",
    },
    {
      id: 6,
      title: "Vels vidyashram (cbse school)",
      desc: "The schools are ranked #1 for academic reputation. Individual attention to students, extra curricular activities and innovative teaching methods",
      image: "/thalambur/g8.jpg",
      buttonText: "Thalambur campus",
      href: "https://velsvidyashram.ac.in/thalambur/",
      borderColor: "border-primary",
    },
    {
      id: 7,
      title: "Vels vidyashram kindergarten",
      desc: "The school provides quality education where learning takes place through observation, reflection and exploration with emphasis on character development.",
      image: "/thalambur/g7.jpg",
      buttonText: "Cantonment campus, pallavaram",
      href: "https://velsvidyashram.ac.in/cantonment/",
      borderColor: "border-primary",
    },
    {
      id: 8,
      title: "Vels vidyashram (cbse school)",
      desc: "The schools are ranked #1 for academic reputation. Individual attention to students, extra curricular activities and innovative teaching methods",
      image: "/thalambur/campus-img.jpg",
      buttonText: "Pallavaram campus",
      href: "https://velsvidyashram.ac.in/pallavaram/",
      borderColor: "border-primary",
    },
    {
      id: 9,
      title: "Vaels international school",
      desc: "Ranked #1 international school in tamil nadu and recognized as the best international day school in chennai",
      image: "/thalambur/g10.jpg",
      buttonText: "Injambakkam campus",
      href: "https://www.vaelsinternationalschool.com/",
      borderColor: "border-primary",
    },
    {
      id: 10,
      title: "Vaels international school - nursery & primary",
      desc: "The school is also recognized as the best preschool in chennai owing to its high standards of academic delivery and customer satisfaction",
      image: "/thalambur/g9.jpg",
      buttonText: "Neelankarai campus",
      href: "https://www.vaelsinternationalschool.com/nursery-primary/",
      borderColor: "border-primary",
    },
    {
      id: 11,
      title: "Vels kinder kids",
      desc: "Situated in mylapore, chennai. The kindergarten school is set up in a homely atmosphere to provide high quality primary and preschool programmes to tiny tots",
      image: "/thalambur/g5.jpg",
      buttonText: "Mylapore",
      href: "https://www.velskinderkids.com/",
      borderColor: "border-primary",
    },
  ],

  telangana: [
    {
      id: 1,
      title: "Mahavir institute of medical sciences",
      desc: "The campus offers mbbs course in a sprawling 37 acres with more than 9 lakh sq. ft. of buildings of college, hospital, hostel and staff quarters",
      image: "/thalambur/g14.jpg",
      buttonText: "Vikarabad, hyderabad campus",
      href: "https://www.mahavirmedicalcollege.org/",
      borderColor: "border-primary",
    },
    {
      id: 2,
      title: "Meghna institute of dental sciences",
      desc: "Meghna institute of dental sciences (mids) is committed to improving health through excellence in dental education, educating members of the health professions",
      image: "/thalambur/g3.jpg",
      buttonText: "Mallaram, nizamabad campus",
      href: "https://www.meghnadentalcollege.com/",
      borderColor: "border-primary",
    },
  ],
};


export default function OurGroupSection() {
  const [activeTab, setActiveTab] = useState("chennai");

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-16">
          {["chennai", "telangana"].map((loc) => (
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
                <div className="bg-yellow-50 rounded-xl p-8 pt-32 shadow-sm text-center flex flex-col items-center min-h-[350px] mt-5 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold font-primary text-gray-800 mb-4 leading-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-secondary text-sm mb-6 max-w-sm">
                    {item.desc}
                  </p>
                  
                  {/* Button Link */}
                  <span className="mt-auto px-6 py-2 bg-primary text-white font-medium rounded-md hover:bg-tertiary font-secondary transition-colors inline-block">
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