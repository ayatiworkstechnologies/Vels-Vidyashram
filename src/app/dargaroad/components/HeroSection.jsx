"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSection() {
  const router = useRouter();
  const slides = [
    {
      id: 1,
      image: "/dargaroad/darga-web1.jpg",
      mobileImage: "/dargaroad/darga-mob1.jpg",
      heading: "Inspiring Young Minds for a Brighter Tomorrow",
    },
    {
      id: 2,
      image: "/dargaroad/darga-web2.jpg",
      mobileImage: "/dargaroad/darga-mob2.jpg",
      heading: "Inspiring Young Minds for a Brighter Tomorrow",
    },
    {
      id: 3,
      image: "/dargaroad/darga-web3.jpg",
      mobileImage: "/dargaroad/darga-mob3.jpg",
      heading: "Inspiring Young Minds for a Brighter Tomorrow",
    },
    {
      id: 4,
      image: "/dargaroad/darga-web4.jpg",
      mobileImage: "/dargaroad/darga-mob4.jpg",
      heading: "Inspiring Young Minds for a Brighter Tomorrow",
    },
      {
      id: 5,
      image: "/dargaroad/darga-web5.jpg",
      mobileImage: "/dargaroad/darga-mob5.jpg",
      heading: "Inspiring Young Minds for a Brighter Tomorrow",
    },
        {
      id: 6,
      image: "/dargaroad/darga-web6.jpg",
      mobileImage: "/dargaroad/darga-mob6.jpg",
      heading: "Inspiring Young Minds for a Brighter Tomorrow",
    },
        {
      id: 7,
      image: "/dargaroad/darga-web7.jpg",
      mobileImage: "/dargaroad/darga-mob7.jpg",
      heading: "Inspiring Young Minds for a Brighter Tomorrow",
    },
  ];

  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToSlide = (index) => {
    if (swiperRef.current && typeof swiperRef.current.slideTo === "function") {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <>
      <div className="relative w-full h-[450px] md:h-[550px] overflow-hidden">
        {/* SWIPER */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={false}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          className="h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="w-full h-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(${
                    isMobile ? slide.mobileImage : slide.image
                  })`,
                }}
              >
                {/* TEXT + BUTTONS */}
                <div
                  className="absolute left-4 right-4 md:left-10 bottom-20 md:bottom-24 
                  text-white space-y-4 max-w-full md:max-w-xl drop-shadow-lg"
                >
                  <h2 className="font-primary font-primary-semibold text-black text-sm sm:text-base md:text-xl bg-white/90 px-3 py-2 w-fit">
                    {slide.heading}
                  </h2>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() =>
                        window.open("https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp", "_blank")
                      }
                      className="w-fit bg-tertiary text-white py-2 px-5 font-primary font-primary-semibold shadow-md hover:bg-[#2b2070] cursor-pointer"
                    >
                      Admission
                    </button>

                    <button
                      onClick={() =>
                        window.open("https://erp.vistas.ac.in/velsonline/online/velsfeepayment.jsp", "_blank")
                      }
                      className="w-fit border border-tertiary text-white py-2 px-5 font-primary font-primary-bold shadow-md hover:bg-[#2b2070] cursor-pointer"
                    >
                      Online Fees Payment
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* LEFT PAGINATION */}
        <div className="absolute bottom-6 left-6 md:left-10 z-40 flex items-center gap-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className="cursor-pointer text-sm tracking-[0.3em] text-white/80 hover:text-white transition-colors"
            >
              {activeIndex === idx ? String(idx + 1).padStart(2, "0") : "_"}
            </button>
          ))}
        </div>

        {/* RIGHT-SIDE ICON BUTTONS (YOU CAN CHANGE ICONS) */}
        <div className="absolute right-6 top-[77%] -translate-y-1/2 z-50 flex flex-col gap-4">
          {/* ICON 1 */}
          <button
            onClick={() =>
              window.open(
                "https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp",
                "_blank"
              )
            }
            className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-lg cursor-pointer"
          >
            <Image
              src="/dargaroad/icon-1.png"
              alt="Menu"
              width={42}
              height={42}
            />
          </button>

          {/* ICON 2 */}
          {/* <button className="h-12 w-12 rounded-full flex items-center justify-center">
            <Image
              src="/dargaroad/icon-2.png"  
              alt="Download"
              width={42}
              height={42}
            />
          </button> */}
        </div>
      </div>
    </>
  );
}
