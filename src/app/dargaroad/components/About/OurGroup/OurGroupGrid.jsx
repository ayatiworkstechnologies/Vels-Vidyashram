// pages/our-group.js
import React from "react";
import Link from "next/link";

const colleges = [
  { id: 1, title: "Vels University, Pallavaram, Chennai", img: "/dargaroad/college-1.jpg", link: "https://vistas.ac.in/" },
  { id: 2, title: "Mahavir Institute of Medical Sciences, Vikarabad, Hyderabad – Telangana", img: "/dargaroad/college-2.jpg", link: "https://vistas.ac.in/" },
  { id: 3, title: "Mahavir Institute of Medical Sciences, Meghna Institute of Dental Sciences, Mallaram, Nizamabad, Telangana", img: "/dargaroad/college-3.jpg", link: "https://www.meghnadentalcollege.com/" },
  { id: 4, title: "Sri Venkateswara Dental College & Hospital,Thalambur, Chennai", img: "/dargaroad/college-4.jpg", link: "https://www.svdentalcollege.com/" },
  { id: 5, title: "Venkateswara Nursing College, Thalambur,Chennai Thalambur", img: "/dargaroad/college-5.jpg", link: "http://www.venkateswaranursing.ac.in/" },
  { id: 6, title: "Shri ISARI Velan Mission Hospital, Thalambur, Chennai", img: "/dargaroad/college-6.jpg", link: "https://www.velanhospital.com/" },
  { id: 7, title: "Vels Medical College & Hospital – Periyapalayam", img: "/dargaroad/college-7.jpg", link: "https://velsmedicalcollege.com/" },
  { id: 8, title: "Meghna Institute of Dental Sciences (MIDS) Nizamabad", img: "/dargaroad/college-8.jpg", link: "https://www.meghnadentalcollege.ac.in/" },
  { id: 9, title: "Vels Maritime Studies - Thalamburm", img: "/dargaroad/college-9.jpg", link: "https://vistas.ac.in/school-of-maritime-studies/" },
  { id: 10, title: "Venkateswara Dental College -Thalambur", img: "/dargaroad/college-10.jpg", link: "https://www.svdentalcollege.com/" },
  { id: 11, title: "Vels Nursing College - Periyapalayamvels Medical College & Hospital – Periyapalayam", img: "/dargaroad/college-11.jpg", link: "https://velnursingcollege.com/" },
  { id: 12, title: "Vels School Of Aviation - Pallavaram", img: "/dargaroad/college-12.jpg", link: "https://vistas.ac.in/" },
  { id: 13, title: "CTC - London", img: "/dargaroad/college-13.jpg", link: "https://ctc.ac.uk/end-of-term-assemblies/" },
  { id: 14, title: "Vistas - Pallavaram", img: "/dargaroad/college-14.jpg", link: "https://vistas.ac.in/" },
];

const schools = [
  { id: 1, title: "Vels Vidyashram (CBSE School), Darga Road Campus,Pallavaram, Chennai", img: "/dargaroad/school-1.jpg", link: "https://velsvidyashram.ac.in/dargaroad/" },
  { id: 2, title: "Vels Vidyashram (CBSE School), Thalambur, Chennai", img: "/dargaroad/school-2.jpg", link: "https://velsvidyashram.ac.in/" },
  { id: 3, title: "Vaels International School, Injambakkam, Chennai", img: "/dargaroad/school-3.jpg", link: "https://www.vaelsinternationalschool.com/" },
  { id: 4, title: "Vels International Pre School – Kindle Kids, Neelankarai, Chennai", img: "/dargaroad/school-4.jpg", link: "http://www.velsinternationalpreschool.com/" },
  { id: 5, title: "Vels Vidyashram (CBSE School),Pallavaram, Chennai", img: "/dargaroad/school-5.jpg", link: "http://www.velsvidyashram.com/" },
  { id: 6, title: "Vels Vidyashram Kindergarten, Cantonment – Pallavaram, Chennai", img: "/dargaroad/school-6.jpg", link: "http://www.velsvidyashram.com/Kindergarten/index.htm" },
  { id: 7, title: "Vels Kinder Kids, Mylapore, Chennai", img: "/dargaroad/school-7.jpg", link: "https://www.velskinderkids.com/" },
  { id: 8, title: "Bright Learners Dubai", img: "/dargaroad/school-8.jpg", link: "https://www.brightlearners.ae/" },
  { id: 9, title: "Kindle Kids International School, Hindoo Road, Singapore", img: "/dargaroad/school-9.jpg", link: "https://kindlekids.sg/" },
  { id: 10, title: "Kindle Kids International School, Thomson Road, Singapore", img: "/dargaroad/school-10.jpg", link: "https://kindlekids.sg/" },
  { id: 11, title: "Bright Learners Dubai", img: "/dargaroad/school-11.jpg", link: "https://velsfc.com/" },
  { id: 12, title: "Vels International School – Injambakkam &  Neelankarai", img: "/dargaroad/school-12.jpg", link: "https://www.vaelsinternationalschool.com/" },
  { id: 13, title: "Vels Vidyashram Schools-Cantonment", img: "/dargaroad/school-13.jpg", link: "https://velsvidyashram.ac.in/cantonment/" },
{ id: 14, title: "Vels Vidyashram Schools- Darga Road", img: "/dargaroad/school-14.jpg", link: "https://velsvidyashram.ac.in/dargaroad/" },
{ id: 15, title: "Vels Vidyashram Schools- Pallavaram", img: "/dargaroad/school-15.jpg", link: "https://velsvidyashram.ac.in/pallavaram/" },
{ id: 16, title: "Vels Vidyashram Schools- Thalambur", img: "/dargaroad/school-16.jpg", link: "https://velsvidyashram.ac.in/thalambur/" },
{ id: 17, title: "Vels Global School", img: "/dargaroad/school-17.jpg", link: "https://velsvidyashram.ac.in/dargaroad/vels-global-school/" },
];

export default function OurGroupPage() {
  const colWidth = 330; // same column width for consistency

  function RenderGrid({ items }) {
    return (
      <div
        className="grid gap-8 justify-center"
        style={{ gridTemplateColumns: `repeat(auto-fit, ${colWidth}px)` }}
      >
        {items.map((c) => (
          <Link key={c.id} href={c.link} className="block group">
            <div className="bg-white rounded-sm shadow-lg overflow-hidden transition-transform group-hover:-translate-y-1">
              <div className="overflow-hidden flex justify-center">
                <img src={c.img} alt={c.title} className="w-auto h-auto block" />
              </div>

              <div className="px-4 pt-4 min-h-[120px]">
                <h4 className="text-sm font-medium text-gray-800 whitespace-normal break-words leading-snug">{c.title}</h4>
                <div className="w-20 h-[1px] bg-secondary mt-3" />
              </div>

              <div className="px-4 pt-2 pb-4 mt-auto">
                <span className="text-orange-500 text-sm font-semibold flex items-center gap-1">Know More →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-primary font-primary-bold">Our Group</h2>
          <div className="w-30 h-[1px] mx-auto bg-secondary mt-3" />
          <p className="text-md text-black mt-2 font-secondary font-secondary-regular mb-4">Where strong values meet hands-on early learning.</p>
          <div className="text-left pl-14">
            <h3 className="text-lg font-primary font-primary-bold text-black mb-4">COLLEGES</h3>
            <div className="w-20 h-[1px] bg-secondary mt-2" />
          </div>
        </div>

        {/* COLLEGES GRID */}
        <div className="mb-12">
          <RenderGrid items={colleges} />
        </div>

        {/* SCHOOLS HEADING */}
        <div className="text-left pl-14 mb-6">
          <h3 className="text-lg font-primary font-primary-bold text-black mb-4">SCHOOLS</h3>
          <div className="w-20 h-[1px] bg-secondary mt-2" />
        </div>

        {/* SCHOOLS GRID (same design) */}
        <div className="mb-8">
          <RenderGrid items={schools} />
        </div>
      </div>
    </div>
  );
}
