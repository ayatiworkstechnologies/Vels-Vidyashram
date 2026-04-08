export default function ContactFooter() {
  return (
    <section className="w-full bg-[#e9e9e9] py-10 px-4">
      <div className="max-w-6xl mx-auto bg-[#252c9c] rounded-[22px] px-8 md:px-12 py-8 md:py-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start">
          <div>
            <h3 className="text-[26px] font-bold mb-5">Contact Us</h3>
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
                <span className="font-bold">Phone:</span> 7401 65 7975, 7401 65 1975
              </p>
              <p>
                <span className="font-bold">Mail:</span> admissions@velsvidyashram.ac.in
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[26px] font-bold mb-5">Quick Navigation</h3>
            <ul className="space-y-1 text-[15px] list-disc pl-5 marker:text-white">
              <li>Home</li>
              <li>Profile</li>
              <li>Academics</li>
              <li>Admissions</li>
              <li>Our Group</li>
              <li>Contact us</li>
              <li>Job Openings @ Vels</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[26px] font-bold mb-5">Campus Location</h3>
            <div className="overflow-hidden rounded-[14px] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                alt="Campus Location Map"
                className="w-full h-[210px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-[18px] px-6 md:px-10 py-5">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center text-[#1f1f1f] items-center">
            <a href="#" className="flex flex-col items-center justify-center gap-2">
              <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">▶</div>
              <span className="text-[14px] font-medium">Youtube</span>
            </a>

            <a href="#" className="flex flex-col items-center justify-center gap-2">
              <div className="w-8 h-8 rounded bg-[#1877F2] text-white flex items-center justify-center text-sm font-bold">f</div>
              <span className="text-[14px] font-medium">Facebook</span>
            </a>

            <a href="#" className="flex flex-col items-center justify-center gap-2">
              <div className="w-8 h-8 rounded bg-[#1DA1F2] text-white flex items-center justify-center text-sm font-bold">↗</div>
              <span className="text-[14px] font-medium">Registration Link</span>
            </a>

            <a href="tel:9500057620" className="flex flex-col items-center justify-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#0d6efd] text-white flex items-center justify-center text-sm font-bold">☎</div>
              <span className="text-[14px] font-medium">9500057620</span>
            </a>

            <a
              href="mailto:vaels.researchanddevelopment@gmail.com"
              className="flex flex-col items-center justify-center gap-2 break-all"
            >
              <div className="w-8 h-8 rounded bg-[#1976d2] text-white flex items-center justify-center text-sm font-bold">✉</div>
              <span className="text-[12px] md:text-[13px] font-medium leading-snug">
                vaels.researchanddevelopment@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}