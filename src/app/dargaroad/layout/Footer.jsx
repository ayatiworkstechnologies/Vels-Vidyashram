export default function Footer() {
  return (
    <footer className="w-full mt-10">
      {/* TOP LINKS AREA */}
      <div className="bg-[#F5F5F5] py-6">
        {/* ROW 1 */}
        <div className="flex flex-wrap justify-center gap-15 text-sm font-primary font-primary-semibold text-black mb-4">
          <a href="/online-fees-payment" className="hover:text-primary transition">
            Online Fees Payment
          </a>
          <a href="/academics" className="hover:text-primary transition">
            Academics
          </a>
          <a href="/admissions" className="hover:text-primary transition">
            Admission
          </a>
          <a href="/jobs" className="hover:text-primary transition">
            Job Openings @ Vels
          </a>
        </div>

        {/* ROW 2 */}
        <div className="flex flex-wrap justify-center gap-10 text-sm font-medium text-black mt-10">
          <a href="/" className="hover:text-primary transition">
            Home
          </a>
          <a href="/about-us" className="hover:text-primary transition">
            About Us
          </a>
          <a href="/contact-us" className="hover:text-primary transition">
            Contact Us
          </a>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="bg-[#39278F] py-3 text-center">
        <p className="text-white text-sm font-medium">
          Copyright ©2025 VelsVidyashram – All right reserved | Designed & Developed by Ayatiworks
        </p>
      </div>
    </footer>
  );
}
