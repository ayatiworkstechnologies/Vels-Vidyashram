"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const activities = [
  {
    title: "Physical Education",
    description: "Well trained physical educator with a structured curriculum aimed to develop discipline and motor abilities like strength, speed, endurance, co-ordination, flexibility, agility and balance.",
    images: ["/cantonment/phy-1.jpg", "/cantonment/phy-2.jpg", "/cantonment/phy-3.jpg"],
    
  },
  {
    title: "Swimming",
    description: "A safe and well maintained baby pool which gives an exciting and fun filled experience for children.",
    images: ["/cantonment/swim-1.jpg", "/cantonment/swim-2.jpg", "/cantonment/swim-3.jpg"],
    color: "bg-white"
  },
  {
    title: "KREDA",
    description: "KREDA, the after school program which is dedicated in engaging the children in developing social, motor, cognitive skills in a child-friendly environment. Artistic program includesClass in western dance, storytelling, reading, handwriting, swimming, Arts & crafts,  organized games and free play.",
    images: ["/cantonment/kreda-1.jpg", "/cantonment/kreda-2.jpg", ],
    color: "bg-slate-50"
  },
  {
    title: "Art and Craft",
    description: "Art gives a fun filled experience to learn and improve skills. Subjects are blended with craft activities to give hands on experience. A special and  well-designed book for Art and Craft enthrall kids, fosters their creative thinking and makes children inventive.",
    images: ["/cantonment/art1.jpg", "/cantonment/art2.jpg", "/cantonment/art3.jpg"],
    color: "bg-slate-50"
  },
  
    {
    title: "Keyboard",
    description: "Keyboard classes conducted by expert professional who help child to focus and concentrate. One on one training and a well planned course curriculum is followed.",
    images: ["/cantonment/keyboad.jpg"],
    color: "bg-slate-50"
  },
     {
    title: "Music & Dance",
    description: "Music and Dance training are given by Expert Professionals in the respective field. A systematic curriculum is framed and followed to make it more to engaging and enthusiastic.",
    images: ["/cantonment/music1.jpg", "/cantonment/music2.jpg", "/cantonment/music3.jpg", "/cantonment/music4.jpg"],
    color: "bg-slate-50"
  },
    {
    title: "Skating",
    description: "Training given by experts to build muscle strength, improve flexibility and endurance. Safety is ensured through skating guard kits and skilful supervision.",
    images: ["/cantonment/skating-1.jpg", "/cantonment/skating-2.jpg"],
    color: "bg-slate-50"
  },
 
];

export default function BeyondAcademics() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <div className="h-[40vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">
          Beyond Academics
        </h1>
        <div className="mt-4 h-1.5 w-20 bg-secondary rounded-full"></div>
      </div>

      {/* Stacking Sections */}
      <div className="relative">
        {activities.map((activity, index) => (
          <section
            key={index}
            className={`sticky top-0 min-h-screen flex items-center justify-center p-6 md:p-12 ${activity.color} border-t border-slate-200 shadow-[0_-20px_50px_rgba(0,0,0,0.05)]`}
          >
            <div
              className={`max-w-7xl mx-auto flex flex-col lg:items-center gap-16 w-full ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Slider Side */}
              <div className="w-full lg:w-3/5 overflow-hidden">
                <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
                  <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    effect="fade"
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    className="h-[350px] md:h-[500px] w-full"
                  >
                    {activity.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <div className="relative h-full w-full">
                          <Image
                            src={img}
                            alt={`${activity.title} slide ${i + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Decorative Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-2/5 space-y-8">
                <span className="text-6xl font-outline-2 text-transparent opacity-20 font-black block leading-none">
                  0{index + 1}
                </span>
                <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                  {activity.title}
                </h2>
                <p className="text-md text-slate-600 leading-relaxed font-light">
                  {activity.description}
                </p>
                
              </div>
            </div>
          </section>
        ))}
      </div>

      
    </div>
  );
}