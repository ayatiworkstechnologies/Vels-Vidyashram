// components/ContactSection.jsx
"use client";

import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* LEFT - Contact content */}
          <div className="pr-4 md:pr-12">
            <h3 className="text-2xl md:text-3xl font-primary font-primary-bold mb-10">
              Contact Us
            </h3>

            <ul className="space-y-2">
              {/* ADDRESS */}
              <li className="flex items-start">
                <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center">
                  {/* Replace with your icon file at /public/icons/location.svg */}
                  <Image
                    src="/dargaroad/location.svg"
                    alt="location"
                    width={22}
                    height={22}
                  />
                </div>

                <a
                  href="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d992296.6888522805!2d79.22788607330527!3d13.708821753083729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d14.456871099999999!2d79.99759089999999!4m5!1s0x3a525e14c9f29399%3A0x69242092914fd50f!2sVels%20Vidyashram%2C%20Pallavaram%2C%20Dharga%20Rd%2C%20Rajiv%20Gandhi%20Nagar%2C%20Pallavaram%2C%20Chennai%2C%20Tamil%20Nadu%20600043!3m2!1d12.9651526!2d80.1684329!5e0!3m2!1sen!2sin!4v1764826891479!5m2!1sen!2sin"
                  className="text-sm md:text-base text-slate-800 leading-relaxed font-secondary font-secondary-regular cursor-pointer"
                >
                  <div>Vels Vidyashram, Darga Road, Pallavaram,</div>
                  <div>Chennai - 600 117, Tamil Nadu.</div>
                </a>
              </li>

              {/* PHONE */}
              <li className="flex items-center">
                <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center">
                  {/* Replace with your icon file at /public/icons/phone.svg */}
                  <Image
                    src="/dargaroad/phone.svg"
                    alt="phone"
                    width={20}
                    height={20}
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-1 md:gap-4 text-sm md:text-base text-slate-800 font-secondary font-secondary-semibold">
                  <a href="tel:+919962506639">99625 06639</a>
                  <span>,</span>
                  <a href="tel:+919962506349">99625 06349</a>
                </div>
              </li>

              {/* EMAIL */}
              <li className="flex items-center">
                <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center">
                  {/* Replace with your icon file at /public/icons/mail.svg */}
                  <Image
                    src="/dargaroad/mail.svg"
                    alt="mail"
                    width={20}
                    height={20}
                  />
                </div>

                <a
                  href="mailto:register@velsvidyashram.ac.in"
                  className="text-sm md:text-base text-slate-800 font-secondary font-secondary-semibold"
                >
                  apply@velsvidyashram.ac.in{" "}
                </a>
              </li>
            </ul>
          </div>

          {/* RIGHT - Map card */}
          <div className="flex justify-end">
            <div className="w-full  rounded-2xl overflow-hidden shadow-[0_35px_60px_rgba(15,23,42,0.08)]">
              {/* Rounded map card — use your place embed or an image */}
              <iframe
                title="Vels Vidyashram Map"
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d992296.6888522805!2d79.22788607330527!3d13.708821753083729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d14.456871099999999!2d79.99759089999999!4m5!1s0x3a525e14c9f29399%3A0x69242092914fd50f!2sVels%20Vidyashram%2C%20Pallavaram%2C%20Dharga%20Rd%2C%20Rajiv%20Gandhi%20Nagar%2C%20Pallavaram%2C%20Chennai%2C%20Tamil%20Nadu%20600043!3m2!1d12.9651526!2d80.1684329!5e0!3m2!1sen!2sin!4v1764826891479!5m2!1sen!2sin"
                width="640"
                height="350"
                className="border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
