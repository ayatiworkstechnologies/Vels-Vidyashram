"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const galleryData = {
  "Activities": [
    {
      title: "Computer Education",
      description: "It aims at making students use the computer both as a productive tool and as a means of creativity and self-expression. The curriculum encompasses technological skills based on themes that are current and meaningful. The program helps the students to build a solid foundation of fundamental learning skills and prepares them for the fast-changing technology of today and the future.",
      images: ["/thalambur/computer-1.jpg", "/thalambur/computer-2.jpg", "/thalambur/computer-3.jpg", "/thalambur/computer-4.jpg", "/thalambur/computer-5.jpg"],
    },
    {
      title: "Art & Craft",
      description: (
        <>
          <p>The techniques of sketching, still-life watercolour, painting and oil painting are taught. Creativity is emphasized in these activities.</p>
          <p className="font-bold mt-2">Objective</p>
          <ul className="list-decimal ml-4">
            <li>To nurture the artistic talents of students.</li>
            <li>To provide the students with an opportunity to exhibit their artistic talents.</li>
          </ul>
        </>
      ),
      images: ["/thalambur/art-1.jpg", "/thalambur/art-2.jpg", "/thalambur/art-3.jpg", "/thalambur/art-4.jpg", "/thalambur/art-5.jpg"],
      reverse: true,
    },
     {
      title: "Life Skills",
      description: (
        <>
          <p>As the children grow, their roles, responsibilities, aspirations and environmental context changes. This brings about the need for developing new insights in life skills.</p>
          <p className="font-bold mt-2">Objective</p>
          <ul className="list-decimal ml-4">
            <li>To help the child understand that joy of living is a result of holistic development of personality.</li>
            <li>To encourage the child to initiate steps that will help him become healthy at the physical, mental and spiritual level.</li>
          </ul>
        </>
      ),
      images: ["/thalambur/life-1.jpg", "/thalambur/life-2.jpg", "/thalambur/life-3.jpg", "/thalambur/life-4.jpg", "/thalambur/life-5.jpg"],
      
    },
     {
      title: "Project",
      description: "Project work is an integral part of the school curriculum which is held class wise to bring out the aesthetic and latent potential of every student. Projects build team spirit, leadership qualities, conflict resolving skills and creativity among the students.",
      images: ["/thalambur/project-1.jpg", "/thalambur/project-2.jpg", "/thalambur/project-3.jpg", "/thalambur/project-4.jpg", "/thalambur/project-5.jpg"],
      reverse: true,

    },
     {
      title: "Western Music",
      description: "Notation, sight reading, chords and lead playing in Western Classical light music as well as familiar tunes are focused on.",
      images: ["/thalambur/western-1.jpg", "/thalambur/western-2.jpg", "/thalambur/western-3.jpg", "/thalambur/western-4.jpg", "/thalambur/western-5.jpg"],
    },
     {
      title: "Sports & Games",
      description: "A sound mind in a sound body.’ This is ensured by making games compulsory for all students. Professionally qualified Physical Education Teachers take care of the sports activities of the school. The school is divided into four houses and inter-house activities are conducted regularly. Students who are declared physically unfit by a physician are given exemption from taking part in sports activities. The Annual Sports Meet is a regular feature and an important co-curricular activity of the school.",
      images: ["/thalambur/sport-1.jpg", "/thalambur/sport-2.jpg", "/thalambur/sport-3.jpg", "/thalambur/sport-4.jpg", "/thalambur/sport-5.jpg"],
      reverse: true,

    },
     {
      title: "Yoga",
      description: "Yoga is the exercise of the physical, mental and spiritual well-being of the individual that was coined in ancient India. Yoga will improve stamina, fine and gross motor skills and dexterities, self-awareness and control, and coordination in team games. Yoga refines balance and coordination, develops focus and concentration, boosts self-esteem and confidence and strengthens the mind-body connection. Various asanas and postures are being taught by certified Yoga teachers.",
      images: ["/thalambur/yoga-1.jpg", "/thalambur/yoga-2.jpg", "/thalambur/yoga-3.jpg", "/thalambur/yoga-4.jpg", "/thalambur/yoga-5.jpg"],
    },
  ],
  "Special Features": [
    {
      title: "Maths Lab",
      description: "Learning by doing” forms the basis for all activities in the lab. The Maths Lab enhances concept stabilization using laboratory activities.",
      images: ["/thalambur/maths-1.jpg", "/thalambur/maths-2.jpg", "/thalambur/maths-4.jpg", "/thalambur/maths-4.jpg", "/thalambur/maths-5.jpg"],
    },
    {
      title: "Smart Class",
      description: "The technology enabled programme ensures effective and enriching learning experiences. The regularly updated inputs and a wide range of video clippings are accessed from the knowledge centre. Difficult and abstract concepts too become clear to the students when viewed on the digital boards provided in the classrooms. The facility is also useful for other purposes like Guest lectures, Electronic voting and General Assembly programmes. In essence, each class room is an audio visual room.",
      images: ["/thalambur/smart-1.jpg", "/thalambur/smart-2.jpg", "/thalambur/smart-3.jpg", "/thalambur/smart-4.jpg", "/thalambur/smart-5.jpg"],
      reverse: true,
    },
     {
      title: "Clean Class Award",
      description: "A clean class promotes positivity in the learning atmosphere. To instill this sense of cleanliness, the Clean Class Award has been instituted for Classes I to VII. The classes are judged on various parameters of cleanliness and the award is given once a term.",
      images: ["/thalambur/award-1.jpg", "/thalambur/award-2.jpg", "/thalambur/award-3.jpg", "/thalambur/award-4.jpg", "/thalambur/award-5.jpg"],
    },
    {
      title: "Innovation Lab",
      description: "Innovation labs dedicated to robotics aim to foster creativity, hands-on learning, and innovation in robotics and related fields like AI and machine learning. These labs provide students with tools, resources, and structured programs to explore and experiment with robotics, potentially leading to real-world applications and problem-solving skills.",
      images: ["/thalambur/ino-1.jpg", "/thalambur/ino-2.jpg", "/thalambur/ino-3.jpg", "/thalambur/ino-4.jpg", "/thalambur/ino-5.jpg"],
      reverse: true,
    },
     {
      title: "English Lab",
      description: "Language lab sessions give students the chance to take their conversational skills to the next level in a semi-natural environment. Language labs are also great for stepping away from traditional drills and worksheets and getting the students more engaged in grammar.",
      images: ["/thalambur/eng-1.jpg", "/thalambur/eng-2.jpg", "/thalambur/eng-3.jpg", "/thalambur/eng-4.jpg", "/thalambur/eng-5.jpg"],
    },
    {
      title: "Composite lab",
      description: "A science lab that combines equipment and activities for multiple subjects like chemistry, physics, and biology, or a skill lab that provides hands-on training in various skills for students.",
      images: ["/thalambur/com-1.jpg", "/thalambur/com-2.jpg", "/thalambur/com-3.jpg", "/thalambur/com-4.jpg", "/thalambur/com-5.jpg"],
      reverse: true,
    },

  ],

  "Club Activities": [
    {
      title: "Literary Club",
      description: "The objectives are to enhance the following skills: Oratory, Writing, Debating, Reading.",
      images: ["/thalambur/li-1.jpg", "/thalambur/li-2.jpg", "/thalambur/li-3.jpg", "/thalambur/li-4.jpg", "/thalambur/li-5.jpg"],
    },
      {
      title: "Reading Club",
      description: "The objective is to inculcate the habit of reading.",
      images: ["/thalambur/R-1.jpg", "/thalambur/R-2.jpg", "/thalambur/R-3.jpg", "/thalambur/R-4.jpg", "/thalambur/R-5.jpg"],
      reverse : true,
    },
     {
      title: "Tamil Club",
      description: "Aims to promote and foster the Tamil language and culture.",
      images: ["/thalambur/t-1.jpg", "/thalambur/t-2.jpg", "/thalambur/t-3.jpg", "/thalambur/t-4.jpg", "/thalambur/t-5.jpg"],
    },
     {
      title: "Hindi Club",
      description: "Main aim of the Hindi club is to create interest among the students for language, to make them creative in speech and writing. Important activities are celebrations of important days and programmes for enrichment of Hindi language like poetry recitation, speech, essay writing, skits, quiz, debates etc.",
      images: ["/thalambur/h-1.jpg", "/thalambur/h-2.jpg", "/thalambur/h-3.jpg", "/thalambur/h-4.jpg", "/thalambur/h-5.jpg"],
      reverse : true,
    },
    {
      title: "Health and Wellness Club",
      description: (
        <>
          
          <p className="font-bold mt-2">Objective</p>
          <ul className="list-decimal ml-4">
            <li>To highlight the importance of first aid.</li>
            <li>To teach students simple first aid techniques.</li>
          </ul>
        </>
      ),
      images: ["/thalambur/hw-1.jpg", "/thalambur/hw-2.jpg", "/thalambur/hw-3.jpg", "/thalambur/hw-4.jpg", "/thalambur/hw-5.jpg"],
    
    },
    {
      title: "Social Service Club",
      description: (
        <>
          
          <p className="font-bold mt-2">Objective</p>
          <ul className="list-decimal ml-4">
            <li>To highlight that “service to man is service to God."</li>
            <li>To make them aware of the harsh realities of life by taking them on a visit to orphanages and old age homes.</li>
          </ul>
        </>
      ),
      images: ["/thalambur/s-1.jpg", "/thalambur/s-2.jpg", "/thalambur/s-3.jpg", "/thalambur/s-4.jpg", "/thalambur/s-5.jpg"],
      reverse: true,
    },
      {
      title: "Yuva and Heritage Club",
      description: "Aims to cultivate interest and responsibility in India’s natural and cultural heritage among children and youth.",
      images: ["/thalambur/y-1.jpg", "/thalambur/y-2.jpg", "/thalambur/y-3.jpg", "/thalambur/y-4.jpg", "/thalambur/y-5.jpg"],
      
    },
    {
      title: "TECH IT OUT Club",
      description: "A “tech it out club” (also known as a tech club, IT club, or technical club) is a student-led organization that focuses on technology, engineering, and innovation. These clubs provide a platform for students to learn, share knowledge, collaborate on projects, and develop their technical skills.",
      images: ["/thalambur/th-1.jpg", "/thalambur/th-2.jpg", "/thalambur/th-3.jpg", "/thalambur/th-4.jpg", "/thalambur/th-5.jpg"],
      reverse : true,
    },
      {
      title: "ECO Club",
      description: "aim to educate students about environmental issues, encourage sustainable practices, and promote positive changes within their school and community.",
      images: ["/thalambur/e-1.jpg", "/thalambur/e-2.jpg", "/thalambur/e-3.jpg", "/thalambur/e-4.jpg", "/thalambur/e-5.jpg"],
    
    },
     {
      title: "Numerix Club",
      description: "The core activities would revolve around engaging the students with numbers, mathematics, and potentially related topics like statistics or data analysis and Mathematical Games and Puzzles.",
       images: ["/thalambur/maths-1.jpg", "/thalambur/maths-2.jpg", "/thalambur/maths-4.jpg", "/thalambur/maths-4.jpg", "/thalambur/maths-5.jpg"],
      reverse : true,
    },
    {
      title: "Cyber Security Club",
      description: "Aim to educate the students about emerging technologies in Cyber Security trends and regularly updating security measures for students to effectively ease cyber risks and safeguard digital assets.",
           images: ["/thalambur/computer-1.jpg", "/thalambur/computer-2.jpg", "/thalambur/computer-3.jpg", "/thalambur/computer-4.jpg", "/thalambur/computer-5.jpg"],
      reverse : true,
    },
  ],

  "STEP Activity": [
    {
      title: "Classical Dance",
      description: "Classical dance is a blend of expressions, melody and rhythm. Classical dance is a perfect example of mind-body-soul connection. The advantages of dance are flexibility, strength, endurance and stamina. Well-trained professionals teach classical dance in the school.",
      images: ["/thalambur/dance-1.jpg", "/thalambur/dance-2.jpg", "/thalambur/dance-3.jpg", "/thalambur/dance-4.jpg", "/thalambur/dance-5.jpg"],
      
    },
      {
      title: "Football",
      description: "Participating in Football, like any other sport, provides many health benefits for children. It’s a physically demanding game that provides an opportunity for players to improve their speed, agility, focus, strength, hand-eye co-ordination, team spirit and overall cardiovascular endurance.",
      images: ["/thalambur/foot-1.jpg", "/thalambur/foot-2.jpg", "/thalambur/foot-3.jpg", "/thalambur/foot-4.jpg", "/thalambur/foot-5.jpg"],
      reverse: true,
    },
     {
      title: "Boxing",
      description: "Boxing sharpens students’ problem-solving skills and teaches them about health and fitness. Fighting skills like hooks, uppercuts, and jabs can help students to defend themselves. Boxing requires intense concentration which can improve your kids’ attention in the classroom and improve academic success.",
      images: ["/thalambur/box-1.jpg", "/thalambur/box-2.jpg", "/thalambur/box-3.jpg", "/thalambur/box-4.jpg", "/thalambur/box-5.jpg"],
    
    },
      {
      title: "Silambam",
      description: "The practice of Silambam will contribute to the following elements of general motor ability: Hand-eye co-ordiantion, agility, body balance, speed, muscular endurance, muscular strength.",
      images: ["/thalambur/sila-1.jpg", "/thalambur/sila-2.jpg", "/thalambur/sila-3.jpg", "/thalambur/sila-4.jpg", "/thalambur/sila-5.jpg"],
      reverse : true,
    
    },
      {
      title: "Skating",
      description: "Roller skating helps to improve balance and coordination. Roller skating provides a great way to have fun while at the same time be physically active for hours.",
      images: ["/thalambur/ska-1.jpg", "/thalambur/ska-2.jpg", "/thalambur/ska-3.jpg", "/thalambur/ska-4.jpg", "/thalambur/ska-5.jpg"],
    
    },
     {
      title: "Instrumental Music (Keyboard, Guitar, Violin)",
      description: "The aims of teaching music are to promote enjoyment in music, promote self-expression, promote participation and performance in singing and instrumental activities, develop confidence and skills in composing, communicating and recording.",
      images: ["/thalambur/in-1.jpg", "/thalambur/in-2.jpg", "/thalambur/western-4.jpg", "/thalambur/western-5.jpg", "/thalambur/western-1.jpg"],
    
    },
  ]
};

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("Activities");
  const [modal, setModal] = useState({ isOpen: false, images: [], index: 0 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 600);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const tabs = ["Activities", "Special Features", "Club Activities", "STEP Activity"];
  const openModal = (images, index) => setModal({ isOpen: true, images, index });

  return (
    <div className="bg-white min-h-screen py-10 overflow-x-hidden">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-md font-bold text-sm transition-all duration-300 border-2 
              ${activeTab === tab 
                ? "bg-primary border-primary text-white shadow-lg scale-105" 
                : "bg-white border-primary text-primary hover:border-secondary"}`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Gallery Sections */}
      <div className={`max-w-6xl mx-auto space-y-24 px-4 transition-all duration-500 ${animate ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
        {galleryData[activeTab].map((section, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${section.reverse ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Text Content */}
            <div className="w-full md:w-1/3">
              <h2 className="text-3xl font-bold text-primary mb-4">{section.title}</h2>
              <div className="text-gray-600 leading-relaxed text-sm md:text-base">
                {section.description}
              </div>
            </div>

            {/* Photo Grid - Exactly matching the image provided */}
            <div className="w-full md:w-2/3 grid grid-cols-4 grid-rows-3 gap-3 h-[500px]">
              {/* Image 1: Large Vertical/Square Left */}
              <div className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden rounded-xl shadow-md" onClick={() => openModal(section.images, 0)}>
                <Image src={section.images[0]} alt="img" fill className="object-cover group-hover:scale-110 transition duration-700" />
              </div>
              {/* Image 2: Wide Top Right */}
              <div className="col-span-2 row-span-1 relative group cursor-pointer overflow-hidden rounded-xl shadow-md" onClick={() => openModal(section.images, 1)}>
                <Image src={section.images[1]} alt="img" fill className="object-cover group-hover:scale-110 transition duration-700" />
              </div>
              {/* Image 3: Wide Middle Right */}
              <div className="col-span-2 row-span-1 relative group cursor-pointer overflow-hidden rounded-xl shadow-md" onClick={() => openModal(section.images, 2)}>
                <Image src={section.images[2]} alt="img" fill className="object-cover group-hover:scale-110 transition duration-700" />
              </div>
              {/* Image 4: Wide Bottom Left */}
              <div className="col-span-2 row-span-1 relative group cursor-pointer overflow-hidden rounded-xl shadow-md" onClick={() => openModal(section.images, 3)}>
                <Image src={section.images[3]} alt="img" fill className="object-cover group-hover:scale-110 transition duration-700" />
              </div>
              {/* Image 5: Wide Bottom Right */}
              <div className="col-span-2 row-span-1 relative group cursor-pointer overflow-hidden rounded-xl shadow-md" onClick={() => openModal(section.images, 4)}>
                <Image src={section.images[4]} alt="img" fill className="object-cover group-hover:scale-110 transition duration-700" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {modal.isOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm">
          <button onClick={() => setModal({ ...modal, isOpen: false })} className="absolute top-5 right-5 text-white text-4xl hover:text-primary transition-colors"><FaTimes /></button>
          <div className="relative w-full max-w-5xl h-[80vh]">
             <Image src={modal.images[modal.index]} alt="Zoomed" fill className="object-contain" />
             <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/20 p-4 rounded-full hover:bg-white/40 transition" onClick={() => setModal({...modal, index: (modal.index - 1 + modal.images.length) % modal.images.length})}><FaArrowLeft /></button>
             <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/20 p-4 rounded-full hover:bg-white/40 transition" onClick={() => setModal({...modal, index: (modal.index + 1) % modal.images.length})}><FaArrowRight /></button>
          </div>
        </div>
      )}
    </div>
  );
}