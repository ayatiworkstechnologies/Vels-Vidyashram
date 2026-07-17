"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const galleryData = {
  "Activities": [
    {
      title: "Computer Education",
      description: "It aims at making students use the computer both as a productive tool and as a means of creativity and self-expression. The curriculum encompasses technological skills based on themes that are current and meaningful. The program helps the students to build a solid foundation of fundamental learning skills and prepares them for the fast-changing technology of today and the future.",
      images: ["/thalambur/com-1.png", "/thalambur/com-2.png", "/thalambur/com-6.png", "/thalambur/com-4.png", "/thalambur/com-5.png"],
    },
    {
      title: "Art & Craft",
      description: (
        <>
          <p>The techniques of sketching, still-life drawing and watercolour painting, oil painting are taught. Creativity is emphasized in these activities.</p>
          <p className="font-bold mt-2">Objective</p>
          <ul className="list-decimal ml-4">
            <li>To nurture the artistic talents of students.</li>
            <li>To provide the students with an opportunity to exhibit their artistic talents.</li>
          </ul>
        </>
      ),
      images: ["/thalambur/art-6.png", "/thalambur/art-2.png", "/thalambur/art-3.png", "/thalambur/art-4.png", "/thalambur/art-5.png"],
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
      images: ["/thalambur/life-1.png", "/thalambur/life-2.png", "/thalambur/life-3.png", "/thalambur/life-4.png", "/thalambur/life-5.png"],
    },
    {
      title: "Project",
      description: "Project work is an integral part of the school curriculum which is held class wise to bring out the aesthetic and latent potential of every student. Projects build team spirit, leadership qualities, conflict resolving skills and creativity among the students.",
      images: ["/thalambur/project-6.png", "/thalambur/pro-1.png", "/thalambur/pro-2.png", "/thalambur/project-4.png", "/thalambur/pro-3.png"],
      reverse: true,
    },
    {
      title: "Western Music & Dance",
      description: "Students learn notation, sight reading, chords, and lead playing in Western Classical and light music while developing rhythm and performance skills. Western Dance training enhances coordination, flexibility, stage confidence, and creative expression through contemporary and modern dance forms.",
      images: ["/thalambur/western-7.png", "/thalambur/western-2.png", "/thalambur/western-3.png", "/thalambur/western-6.png", "/thalambur/western-5.png"],
    },
    {
      title: "Sports & Games",
      description: "A sound mind in a sound body is a guiding principle of holistic education. To promote physical fitness, discipline, and teamwork, games and sports activities are compulsory for all students. Professionally qualified physical education teachers guide the sports activities. The school students and staff are divided into four houses - Jade, Garnet, Sapphire and Topaz. Inter-house activities are conducted regularly. Students declared medically unable to participate by a registered physician shall be exempted from sports activities upon submission of a valid medical certificate.The Annual Sports Meet is an important co-curricular activity of the school.",
      images: ["/thalambur/sp-1.png", "/thalambur/sp-2.png", "/thalambur/sp-3.png", "/thalambur/sp-4.png", "/thalambur/sp-5.png"],
      reverse: true,
    },
    {
      title: "Yoga",
      description: "Yoga promotes physical, mental, and spiritual well-being and has its origins in ancient India. It enhances stamina, fine and gross motor skills, and dexterity among students. Regular practice of yoga develops self-awareness, self-control, balance, and coordination. It also improves focus, concentration, self-esteem, and confidence while strengthening the mind–body connection. Various asanas and postures are taught under the guidance of trained and certified yoga instructors.",
      images: ["/thalambur/yoga-1.png", "/thalambur/yoga-2.png", "/thalambur/yoga-3.png", "/thalambur/yoga-4.png", "/thalambur/yoga-5.png"],
    },
    {
      title: "Robotics",
      description: "The school gives the learners to enhance their AI and tech expertise through practical implementation, advanced system building, and real-world innovation challenges.",
      images: ["/thalambur/robo-4.png", "/thalambur/ro-2.png", "/thalambur/robo-3.png", "/thalambur/ro-1.png", "/thalambur/robo-5.png"],
      reverse: true,
    },
  ],

  "Special Features": [
    {
      title: "Maths Lab",
      description: "Learning by doing forms the basis for all activities in the lab. The Maths Lab enhances conceptual understanding through laboratory activities.",
      images: ["/thalambur/math-1.png", "/thalambur/math-2.png", "/thalambur/math-3.png", "/thalambur/math-4.png", "/thalambur/math-5.png"],
    },
   {
  title: "Smart Class",
  description: [
  <>
    <ul className="list-disc ml-4">
      <li>Smart Class facilities are available for students of all grades. </li>
      <li> Every classroom is equipped with an interactive digital board to support technology-enabled learning.</li>
      <li>Teachers use videos, animations, simulations, and multimedia resources to simplify complex concepts.</li>
      <li>Digital content is aligned with the curriculum to make lessons engaging and interactive. </li>
      <li>Technology-enhanced teaching improves conceptual understanding, participation, and digital literacy.</li>
      <li>Every classroom provides an audio-visual learning environment that enriches the overall learning experience.</li>

    
        </ul>
      </>

  ],
  images: [
    "/thalambur/sm-1.png",
    "/thalambur/sm-2.png",
    "/thalambur/sm-3.png",
    "/thalambur/sm-4.png",
    "/thalambur/sm-5.png"
  ],
  reverse: true,
},
    {
      title: "Clean Class Award",
      description: "A clean class promotes positivity in the learning atmosphere. To instill this sense of cleanliness, the Clean Class Award has been instituted for Classes I to VII. The classes are judged on various parameters of cleanliness and the award is given once a term.",
      images: ["/thalambur/clean-1.png", "/thalambur/clean-2.png", "/thalambur/clean-3.png", "/thalambur/clean-4.png", "/thalambur/clean-6.png"],
    },
    {
      title: "Innovation Lab",
      description: <>
                <ul className="list-disc ml-4">
                  <li>Dedicated Innovation Lab for students across all grades to explore creativity and innovation.</li>
                  <li> Hands-on learning in Robotics, Artificial Intelligence , and emerging technologies.</li>
                  <li>Well-equipped with modern tools, kits, and learning resources for practical exploration.</li>
                  <li>Encourages design thinking, problem-solving, coding, and experimentation.</li>
                  <li>Develops critical thinking, collaboration, and real-world application skills.</li>
                  <li>Provides opportunities to participate in innovation projects, competitions, and STEM activities.</li>
                </ul>

      </>,
      images: ["/thalambur/invo-1.png", "/thalambur/invo-2.png", "/thalambur/invo-3.png", "/thalambur/invo-4.png", "/thalambur/invo-5.png"],
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
      images: ["/thalambur/li-6.jpg", "/thalambur/li-7.jpeg", "/thalambur/li-8.jpeg", "/thalambur/li-8.jpeg", "/thalambur/li-6.jpg"],
    },
    {
      title: "Reading Club",
      description: "The objective is to inculcate the habit of reading.",
      images: ["/thalambur/R-6.jpg", "/thalambur/R-7.jpg", "/thalambur/R-8.jpg", "/thalambur/R-9.jpg", "/thalambur/R-8.jpg"],
      reverse: true,
    },
    {
      title: "Tamil Club",
      description: "Aims to promote and foster the Tamil language and culture.",
      images: ["/thalambur/tamil-11.png", "/thalambur/tamil-21.png", "/thalambur/tamil-31.png", "/thalambur/tamil-41.png", "/thalambur/t-5.jpg"],
    },
    {
      title: "Hindi Club",
      description: "Main aim of the Hindi club is to create interest among the students for language, to make them creative in speech and writing. Important activities are celebrations of important days and programmes for enrichment of Hindi language like poetry recitation, speech, essay writing, skits, quiz, debates etc.",
      images: ["/thalambur/h-6.jpeg", "/thalambur/h-9.jpeg", "/thalambur/h-8.jpeg", "/thalambur/h-9.jpeg", "/thalambur/h-6.jpeg"],
      reverse: true,
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
            <li>To highlight that "service to man is service to God."</li>
            <li>To make them aware of the harsh realities of life by taking them on a visit to orphanages and old age homes.</li>
          </ul>
        </>
      ),
      images: ["/thalambur/social-1.png", "/thalambur/social-2.png", "/thalambur/social-3.png", "/thalambur/social-4.png", "/thalambur/social-5.png"],
      reverse: true,
    },
    {
      title: "Yuva and Heritage Club",
      description: "Aims to cultivate interest and responsibility in India's natural and cultural heritage among children and youth.",
      images: ["/thalambur/y-6.jpg", "/thalambur/y-7.jpg", "/thalambur/y-3.jpg", "/thalambur/y-5.jpg", "/thalambur/y-6.jpg"],
    },
    {
      title: "TECH IT OUT Club",
      description: "A tech it out club (also known as a tech club, IT club, or technical club) is a student-led organization that focuses on technology, engineering, and innovation. These clubs provide a platform for students to learn, share knowledge, collaborate on projects, and develop their technical skills.",
      images: ["/thalambur/th-1.jpg", "/thalambur/th-2.jpg", "/thalambur/th-3.jpg", "/thalambur/th-4.jpg", "/thalambur/th-5.jpg"],
      reverse: true,
    },
    {
      title: "ECO Club",
      description: "Aim to educate students about environmental issues, encourage sustainable practices, and promote positive changes within their school and community.",
      images: ["/thalambur/eco-1.png", "/thalambur/eco-2.png", "/thalambur/eco-3.png", "/thalambur/eco-4.png", "/thalambur/eco-5.png"],
    },
    {
      title: "Numerix Club",
      description: "The core activities would revolve around engaging the students with numbers, mathematics, and potentially related topics like statistics or data analysis and Mathematical Games and Puzzles.",
      images: ["/thalambur/num-1.png", "/thalambur/num-2.png", "/thalambur/num-3.png", "/thalambur/num-4.png", "/thalambur/maths-5.jpg"],
      reverse: true,
    },
    {
      title: "Cyber Security Club",
      description: "Aim to educate the students about emerging technologies in Cyber Security trends and regularly updating security measures for students to effectively ease cyber risks and safeguard digital assets.",
      images: ["/thalambur/computer-6.jpg", "/thalambur/computer-7.jpg", "/thalambur/computer-6.jpg", "/thalambur/computer-7.jpg", "/thalambur/computer.png"],
    },
  ],

  "STEP Activity": [
    {
      title: "Classical Dance",
      description: "Classical dance is a blend of expressions, melody and rhythm. Classical dance is a perfect example of mind-body-soul connection. The advantages of dance are flexibility, strength, endurance and stamina. Well-trained professionals teach classical dance at the school.",
      images: ["/thalambur/dance-1.png", "/thalambur/dance-2.png", "/thalambur/dance-3.png", "/thalambur/dance-4.png", "/thalambur/dance-5.png"],
    },
    {
      title: "Football",
      description: "Participating in Football, like any other sport, provides many health benefits for children. It's a physically demanding game that provides an opportunity for players to improve their speed, agility, focus, strength, hand-eye co-ordination, team spirit and overall cardiovascular endurance.",
      images: ["/thalambur/foot-1.png", "/thalambur/foot-2.png", "/thalambur/foot-3.png", "/thalambur/foot-4.png", "/thalambur/foot-5.png"],
      reverse: true,
    },
    {
      title: "Boxing",
      description: "Boxing sharpens students' problem-solving skills and promotes health and fitness. Skills such as hooks, uppercuts, and jabs help students learn self-defence techniques. Boxing requires intense concentration and improves focus and attention. It also helps enhance students' confidence and academic performance.",
      images: ["/thalambur/box-1.png", "/thalambur/box-2.png", "/thalambur/box-3.png", "/thalambur/box-4.jpg", "/thalambur/box-5.jpg"],
    },
    {
      title: "Silambam",
      description: "The practice of Silambam will contribute to the following elements of general motor ability: Hand-eye co-ordiantion, agility, body balance, speed, muscular endurance, muscular strength.",
      images: ["/thalambur/sila-1.png", "/thalambur/sila-2.png", "/thalambur/sila-3.png", "/thalambur/sila-4.png", "/thalambur/sila-5.png"],
      reverse: true,
    },
    {
      title: "Skating",
      description: "Roller skating helps to improve balance and coordination. Roller skating provides a great way to have fun while at the same time be physically active for hours.",
      images: ["/thalambur/ska-1.png", "/thalambur/ska-2.png", "/thalambur/ska-3.png", "/thalambur/ska-4.png", "/thalambur/ska-5.png"],
    },
    {
      title: "Instrumental Music (Keyboard, Guitar, Violin)",
      description: "The aims of teaching music are to promote enjoyment in music, promote self-expression, promote participation and performance in singing and instrumental activities, develop confidence and skills in composing, communicating and recording.",
      images: ["/thalambur/ins-1.png", "/thalambur/ins-2.png", "/thalambur/ins-3.png", "/thalambur/ins-4.png", "/thalambur/ins-5.png"],
      reverse: true,
    },
  ],
};

// ── Portal-based Lightbox ─────────────────────────────────────────────────────
function Lightbox({ modal, onClose, onPrev, onNext }) {
  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center p-4 backdrop-blur-sm bg-black/95"
      style={{ zIndex: 99999 }}
      onClick={onClose} // click backdrop to close
    >
      {/* Stop propagation so clicking inside doesn't close */}
      <div
        className="relative w-full max-w-5xl h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={modal.images[modal.index]}
          alt="Zoomed"
          fill
          className="object-contain"
        />

        {/* Prev */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/20 p-4 rounded-full hover:bg-white/40 transition"
          onClick={onPrev}
          aria-label="Previous image"
        >
          <FaArrowLeft />
        </button>

        {/* Next */}
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/20 p-4 rounded-full hover:bg-white/40 transition"
          onClick={onNext}
          aria-label="Next image"
        >
          <FaArrowRight />
        </button>

        {/* Close */}
        <button
          className="absolute top-[-48px] right-0 text-white text-4xl hover:text-orange-400 transition-colors"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <FaTimes />
        </button>

        {/* Image counter */}
        <div className="absolute bottom-[-36px] left-1/2 -translate-x-1/2 text-white/70 text-sm">
          {modal.index + 1} / {modal.images.length}
        </div>
      </div>
    </div>,
    document.body // ← renders directly on <body>, escapes all stacking contexts
  );
}

// ── Main Gallery Component ────────────────────────────────────────────────────
export default function Gallery() {
  const [activeTab, setActiveTab] = useState("Activities");
  const [modal, setModal] = useState({ isOpen: false, images: [], index: 0 });
  const [animate, setAnimate] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Wait for client mount before rendering portal
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 600);
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = modal.isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [modal.isOpen]);

  const tabs = ["Activities", "Special Features", "Club Activities", "STEP Activity"];

  const openModal = (images, index) => setModal({ isOpen: true, images, index });
  const closeModal = () => setModal({ ...modal, isOpen: false });
  const prevImage = () => setModal((m) => ({ ...m, index: (m.index - 1 + m.images.length) % m.images.length }));
  const nextImage = () => setModal((m) => ({ ...m, index: (m.index + 1) % m.images.length }));

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
                ? "bg-primary border-primary font-primary text-white shadow-lg scale-105"
                : "bg-white border-primary text-primary hover:border-secondary"}`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Gallery Sections */}
      <div className={`max-w-6xl mx-auto space-y-24 px-4 transition-all duration-500 ${animate ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"}`}>
        {galleryData[activeTab]?.map((section, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${section.reverse ? "md:flex-row-reverse" : ""}`}>

            <div className="w-full md:w-1/3">
              <h2 className="text-3xl font-bold text-primary mb-4 font-primary">{section.title}</h2>
              <div className="text-gray-600 leading-relaxed text-sm md:text-base font-secondary">
                {section.description}
              </div>
            </div>

            {/* Photo Grid */}
            <div className="w-full md:w-2/3 grid grid-cols-4 grid-rows-3 gap-3 h-[500px]">
              {[
                "col-span-2 row-span-2",
                "col-span-2 row-span-1",
                "col-span-2 row-span-1",
                "col-span-2 row-span-1",
                "col-span-2 row-span-1",
              ].map((cls, i) => (
                <div
                  key={i}
                  className={`${cls} relative group cursor-pointer overflow-hidden rounded-xl shadow-md`}
                  onClick={() => openModal(section.images, i)}
                >
                  <Image
                    src={section.images[i]}
                    alt={`${section.title} image ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
              ))}
            </div>

          </div>
        ))}

        {(!galleryData[activeTab] || galleryData[activeTab].length === 0) && (
          <div className="text-center py-20 text-gray-400">
            No content available for {activeTab} yet.
          </div>
        )}
      </div>

      {/* Lightbox — rendered via Portal on document.body */}
      {mounted && modal.isOpen && (
        <Lightbox
          modal={modal}
          onClose={closeModal}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
}