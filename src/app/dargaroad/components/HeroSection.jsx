"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSection() {
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
    if (swiperRef.current?.slideTo) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <>
      {/* ================= HERO SLIDER ================= */}
      <div className="relative w-full h-[450px] md:h-[550px] overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={false}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${
                    isMobile ? slide.mobileImage : slide.image
                  })`,
                }}
              >
                {/* TEXT OVERLAY */}
                <div className="absolute left-4 right-4 md:left-10 bottom-20 md:bottom-24 text-white space-y-4 max-w-full md:max-w-xl">
                  <h2 className="font-primary font-primary-semibold text-black text-sm sm:text-base md:text-xl bg-white/90 px-3 py-2 w-fit">
                    {slide.heading}
                  </h2>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() =>
                        window.open(
                          "https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp",
                          "_blank"
                        )
                      }
                      className="w-fit bg-tertiary text-white py-2 px-5 font-primary font-primary-semibold shadow-md hover:bg-[#2b2070]"
                    >
                      Admission
                    </button>

                    <button
                      onClick={() =>
                        window.open(
                          "https://erp.vistas.ac.in/velsonline/online/velsfeepayment.jsp",
                          "_blank"
                        )
                      }
                      className="w-fit border border-tertiary text-white py-2 px-5 font-primary font-primary-bold shadow-md hover:bg-[#2b2070]"
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
              className="text-sm tracking-[0.3em] text-white/80 hover:text-white"
            >
              {activeIndex === idx ? String(idx + 1).padStart(2, "0") : "_"}
            </button>
          ))}
        </div>

        {/* ================= DESKTOP STICKY CTA ================= */}
        {/* <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 items-center gap-3">
          <button
            onClick={() =>
              window.open(
                "https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp",
                "_blank"
              )
            }
            className="bg-white text-black text-sm px-3 py-1 font-primary font-primary-semibold shadow hover:bg-gray-100"
          >
            Admissions Open | Apply Now
          </button>

          <button
            onClick={() =>
              window.open(
                "https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp",
                "_blank"
              )
            }
            className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-gray-100"
          >
            <Image
              src="/dargaroad/icon-1.png"
              alt="Admissions"
              width={42}
              height={42}
            />
          </button>
        </div> */}
      </div>

      {/* ================= INFO BAR ================= */}
      <div className="w-full bg-primary text-white py-3">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm md:text-lg font-primary">
          <div className="flex items-center gap-2">
            <span>Admission Helpline :</span>
            <Image src="/main/phone.svg" alt="phone" width={18} height={18} />
            <span>99625 06639 , 99625 06349</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Email :</span>
            <Image src="/main/mail-01.svg" alt="mail" width={18} height={18} />
            <span>apply@velsvidyashram.ac.in</span>
          </div>
        </div>
      </div>

      {/* ================= MOBILE STICKY CTA ================= */}
      {/* <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t shadow-lg">
        <div className="flex divide-x">
   
          <button
            onClick={() =>
              window.open(
                "https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp",
                "_blank"
              )
            }
            className="flex-1 py-3 flex items-center justify-center gap-2 bg-tertiary text-white text-sm font-primary font-primary-semibold"
          >
            <Image src="/main/mail-01.svg" alt="enquiry" width={18} height={18} />
            Enquiry Now
          </button>

       
          <a
            href="tel:9962506639"
            className="flex-1 py-3 flex items-center justify-center gap-2 bg-primary text-white text-sm font-primary font-primary-semibold"
          >
            <Image src="/main/phone.svg" alt="call" width={18} height={18} />
            Call Now
          </a>
        </div>
      </div> */}
    </>
  );
}
