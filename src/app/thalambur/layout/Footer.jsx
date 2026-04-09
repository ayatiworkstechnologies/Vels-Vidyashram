import Link from 'next/link';

export default function ContactFooter() {
  return (
    <section className="w-full bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto bg-primary rounded-[22px] px-8 md:px-12 py-8 md:py-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start">
          {/* Contact Information */}
          <div>
            <h3 className="text-[26px] font-bold mb-5 text-white">Contact Us</h3>
            <p className="text-[15px] leading-[1.8] text-white/95">
              Vels Vidyashram,
              <br />
              Old Mahabalipuram Road (OMR),
              <br />
              IT Highway, Navalur, Thalambur,
              <br />
              Chennai - 600 130 Tamil Nadu, India
            </p>

            <div className="mt-6 space-y-3 text-[15px]">
              <p>
                <span className="font-bold">Phone:</span>{' '}
                <a href="tel:+917401657975" className="hover:underline">7401 65 7975</a>,{' '}
                <a href="tel:+917401651975" className="hover:underline">7401 65 1975</a>
              </p>
              <p>
                <span className="font-bold">Mail:</span>{' '}
                <a href="mailto:admissions@velsvidyashram.ac.in" className="hover:underline">
                  admissions@velsvidyashram.ac.in
                </a>
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="text-[26px] font-bold mb-5 text-white">Quick Navigation</h3>
            <ul className="space-y-1 text-[15px] list-disc pl-5 marker:text-white">
              <li><Link href="/thalambur" className="">Home</Link></li>
              <li><Link href="/thalambur/our-group" className="">Our Group</Link></li>
              <li><Link href="/thalambur/curriculum" className="">Academics</Link></li>
              <li><Link href="/thalambur/procedure" className="">Admissions</Link></li>
              <li><Link href="/thalambur/contact-us" className="">Contact us</Link></li>
              <li><Link href="/thalambur/recruitment" className="">Job Openings @ Vels</Link></li>
            </ul>
          </div>

          {/* Campus Location Image/Map Link */}
          <div>
          <h3 className="text-[26px] font-bold mb-5 text-white">Campus Location</h3>
          <div className="overflow-hidden rounded-[14px] shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d497913.0906513524!2d80.196079!3d12.846763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525a2dd2254f05%3A0xbe09b7d3e7f90c7c!2sVels%20Vidyashram%2C%20Thalambur!5e0!3m2!1sen!2sus!4v1775739141607!5m2!1sen!2sus"
              className="w-full h-[210px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vels Vidyashram Thalambur Campus Location"
            ></iframe>
          </div>
        </div>
        </div>

        {/* Social and External Links Bar */}
          <div className="mt-8 bg-white rounded-[18px] px-6 md:px-10 py-5">
          <h2 className="text-[22px] font-bold mb-6 text-center text-[#1f1f1f]">
            VSkill
          </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center text-[#1f1f1f] items-center">

          {/* YouTube */}
          <a
            href="https://www.youtube.com/channel/UChpA7vFTTHT3NBSaMhCGVyA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:scale-105 transition"
          >
            <img
              src="/cantonment/YouTube.png"
              alt="YouTube"
              className="w-6 h-6 object-contain"
            />
            <span className="text-[14px] font-medium">Youtube</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/people/Research-and-Development-VELS-Group-of-Schools/100066717971586/#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:scale-105 transition"
          >
            <img
              src="/cantonment/Facebook.png"
              alt="Facebook"
              className="w-6 h-6 object-contain"
            />
            <span className="text-[14px] font-medium">Facebook</span>
          </a>

          {/* Registration */}
          <a
            href="https://bit.ly/VSkill_ProfessionalCertificateforEducators"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:scale-105 transition"
          >
            <img
              src="/cantonment/reg.png"
              alt="Registration"
              className="w-6 h-6 object-contain"
            />
            <span className="text-[14px] font-medium">Registration Link</span>
          </a>

          {/* Phone */}
          <a
            href="tel:9500057620"
            className="flex flex-col items-center gap-2 hover:scale-105 transition"
          >
            <img
              src="/cantonment/phone.png"
              alt="Phone"
              className="w-6 h-6 object-contain"
            />
            <span className="text-[14px] font-medium">9500057620</span>
          </a>

          {/* Email */}
          <a
            href="mailto:vskill@velsuniv.ac.in"
            className="flex flex-col items-center gap-2 break-all hover:scale-105 transition"
          >
            <img
              src="/cantonment/mail.png"
              alt="Email"
              className="w-6 h-6 object-contain"
            />
            <span className="text-[12px] md:text-[13px] font-medium leading-snug">
              vskill@velsuniv.ac.in
            </span>
          </a>

        </div>
        </div>
      </div>
    </section>
  );
}