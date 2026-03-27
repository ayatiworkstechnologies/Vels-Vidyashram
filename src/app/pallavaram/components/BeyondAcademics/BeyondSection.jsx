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
    title: "Physical Education (P.ET)",
    description: "Physical Education (PE) curriculum contributes to the physical fitness aspect and all-round development of students. The subject is unique in the sense that it seeks to promote basic body management developing into the mastery of coordinated and skillful movements. Physical Education will be a compulsory element of the curriculum for every class, from I to XII. This element of the curriculum will not be formally examined at the end of the year but will be graded for students of classes III – X across the year based on student’s participation and teacher’s observations.",
    images: ["/pallavaram/physical.jpg"],
    
  },
  {
    title: "Western Music",
    description: "To foster love and appreciation of music and nurture the artistic qualities of our learners, the school provides training to the budding artist through Music. Our school develops the creative ability to perform and to enjoy music. The learners gain musical knowledge and experience that would truly enable them to achieve their aspirations in western music. This will be graded across the year based on student participation and teacher’s observations.",
    images: ["/pallavaram/Music-1.jpg"],
    color: "bg-white"
  },
  {
    title: "Dance",
    description: "The school gives the learners a chance to immerse in the style of western dance. The learners are taught basic dance steps as well as sophisticated western moves. They also participate in various school events which further nurtures their dance aesthetics. This element of curriculum will not be formally examined at the end of the year but will be graded across the year based on student participation and teacher’s observations.",
    images: ["/pallavaram/dance-1.jpg", "/pallavaram/Dance-2.jpg"],
    color: "bg-slate-50"
  },
  {
    title: "Life Skills & SEWA",
    description: "At the heart of the curriculum brings in innovative programs called Life Skills and SEWA (Social Empowerment through Work and Action). The Life Skill and SEWA will help students lead balanced, happy and successful lives. The program covers Creative Thinking Skills, Interpersonal Skills, Effective Communication Skills, Collaboration and Leadership Skill, Problem-Solving and Decision Making Skills, Conflict Resolution Skills and Adolescent Education. This will be graded across the year based on student participation and teacher’s observations.",
    images: ["/pallavaram/Life-Skills-1.jpg", "/pallavaram/Life-Skills-2.jpg"],
    color: "bg-slate-50"
  },
  
    {
    title: "Information and Communication Technology (ICT)",
    description: "Information and Communication Technology is a compulsory component of the curriculum which will help students assess the impact of new technologies on society and train them to use these productively. The focus of the program is to help the students to understand the use of common software applications and use technology to enhance their ability to access, evaluate and research information",
    images: ["/pallavaram/ICT.jpg", "/pallavaram/ict-1.jpg"],
    color: "bg-slate-50"
  },
     {
    title: "Visual Arts",
    description: "The Visual Arts curriculum is aimed at promoting intellectual, aesthetic and emotional growth that meet the eye and evoke an emotion through an expression of skill and imagination. Though beauty is in the eye of the beholder- students realize the joy of expression through various mediums with multiple creative techniques. The learners learn to appreciate art from different cultures as well as the native arts of the country. This will be graded across the year based on student participation and teacher’s observations.",
    images: ["/pallavaram/va1.jpg"],
    color: "bg-slate-50"
  },
    {
    title: "Yoga",
    description: "Yoga is the exercise of the physical, mental and spiritual well-being of the individual that was coined in ancient India. Yoga will improve stamina, fine and gross motor skills and dexterities, self-awareness and control, and coordination in team games. Yoga refines balance and coordination develops focus and concentration, boosts self-esteem and confidence and strengthens the mind-body connection. Various asanas and postures are being taught by certified Yoga teachers.",
    images: ["/pallavaram/yoga-1.jpg", "/pallavaram/yoga-2.jpg"],
    color: "bg-slate-50"
  },
    {
    title: "Vels Talent Zone",
    description: "Vels talent zone an exclusive skill classes without any additional fees during school hours. It includes Classical Dance, Zumba, Karate, Silambam, Skating.",
    images: ["/pallavaram/classical.jpg", "/pallavaram/zumba.jpg","/pallavaram/karate.jpg", "/pallavaram/Silambam.jpg", "/pallavaram/Skating.jpg"],
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