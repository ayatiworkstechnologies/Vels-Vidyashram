import React from 'react';
import { Facebook, Instagram, Youtube, Mail, GraduationCap} from 'lucide-react';

const FloatingActions = () => {
  const socialLinks = [
    { 
      icon: <Facebook size={20} />, 
      href: "https://www.facebook.com/VelsVidyashramPallavaram", 
      color: "text-[#1877F2]" 
    },
    { 
      icon: <Instagram size={20} />, 
      href: "https://www.instagram.com/velsvidyashraminsta/", 
      color: "text-[#E4405F]" 
    },
   { 
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.6-30.6-38.1-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.5-9.2 1.9-3.7 1-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
        </svg>
      ),
      href: "https://api.whatsapp.com/send/?phone=%2B919962506639&text&type=phone_number&app_absent=0", 
      color: "text-[#25D366]" 
    },
    { 
      icon: <Youtube size={20} />, 
      href: "https://www.youtube.com/channel/UChcEkcp64pMD3LfXf4sWFtA?view_as=subscriber", 
      color: "text-[#FF0000]" 
    },
    { 
      icon: <Mail size={20} />, 
      href: "mailto:apply@velsvidyashram.ac.in", 
      color: "text-orange-500" 
    },
  ];

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[9999] flex flex-col gap-3">
      
      {/* --- Simple Circular Admissions Button --- */}
      <a 
        href="https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-orange-500 text-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <GraduationCap size={28} />
        
        {/* Tooltip on hover only for context */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 origin-right bg-white text-secondary text-xs font-bold py-2 px-4 rounded-lg whitespace-nowrap shadow-xl">
          Apply for Admission
        </span>

        {/* Subtle Ring Animation to draw attention */}
        <span className="absolute inset-0 rounded-full border-2 border-orange-500 animate-ping opacity-20"></span>
      </a>

      {/* --- Social Icons Container (White background, Brand colors always visible) --- */}
      <div className="flex flex-col gap-1 p-2 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.15)] border border-gray-100">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 transition-transform duration-300 hover:scale-125 ${social.color}`}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FloatingActions;