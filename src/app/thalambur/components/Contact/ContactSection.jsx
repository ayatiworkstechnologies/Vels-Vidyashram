"use client";
import React from 'react';
import { Mail, Phone, MapPin, Facebook, ArrowRight, ExternalLink, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section - Minimalist & Bold */}
      <div className="bg-[#3f2b96] pt-20 pb-32 px-6 text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-white font-primary">Contact Us</h1>
        <p className="text-xl opacity-80 max-w-2xl mx-auto font-secondary">
          Reach out to our Thalambur campus directly for admissions, academic inquiries, or campus tours.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Info Card */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-10 border border-gray-100 flex flex-col justify-center">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-[#3f2b96] mb-2 font-primary">Vels Vidyashram</h2>
              <p className="text-primary font-semibold text-lg uppercase tracking-wide font-secondary">Senior Secondary School — Thalambur</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Address */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 font-primary">Our Location</h4>
                  <p className="text-gray-600 leading-relaxed text-sm font-secondary">
                    Old Mahabalipuram Road (OMR) IT Highway,<br />
                    Navalur, Adjacent to Sri Venkateswara Dental College,<br />
                    Thalambur, Chennai - 600 130
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1 font-primary">Phone</h4>
                    <p className="text-gray-600 text-sm font-medium hover:text-primary transition cursor-pointer font-secondary">7401 65 7975</p>
                    <p className="text-gray-600 text-sm font-medium hover:text-primary transition cursor-pointer font-secondary">7401 65 1975</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1 font-primary">Email</h4>
                    <p className="text-gray-600 text-sm font-medium break-all font-secondary">admissions@velsvidyashram.ac.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions Sidebar */}
          <div className="flex flex-col gap-4">
            <a 
              href="https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp" 
              className="group flex flex-1 items-center justify-between bg-white hover:bg-primary text-primary p-8 rounded-3xl font-bold transition-all duration-300 shadow-lg shadow-[#00bcd4]/20"
            >
              <div className="flex flex-col">
                <span className="text-xs opacity-80 uppercase tracking-widest mb-1 font-secondary">Admission Portal</span>
                <span className="text-2xl">Enroll Today</span>
              </div>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={28} />
            </a>

            <a 
              href="https://www.facebook.com/VelsThalambur/" 
              className="group flex flex-1 items-center justify-between bg-[#f39200] hover:bg-[#e08600] text-white p-8 rounded-3xl font-bold transition-all duration-300 shadow-lg shadow-orange-200"
            >
              <div className="flex flex-col">
                <span className="text-xs opacity-80 uppercase tracking-widest mb-1">School Updates</span>
                <span className="text-2xl">Facebook</span>
              </div>
              <Facebook className="group-hover:scale-110 transition-transform" size={28} />
            </a>

            <div className="flex flex-1 items-center gap-4 bg-gray-50 border border-gray-100 p-8 rounded-3xl group cursor-default">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400 group-hover:text-[#3f2b96] transition-colors">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="text-gray-900 font-bold font-secondary">Need Help?</p>
                <p className="text-gray-500 text-xs font-secondary">Visit our help desk during school hours.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Map Section */}
        <div className="mt-12 mb-20 relative group">
          <div className="absolute top-6 left-6 z-10">
         
          </div>
          <div className="overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7779.892041427382!2d80.196079!3d12.846763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525a2dd2254f05%3A0xbe09b7d3e7f90c7c!2sVels%20Vidyashram%2C%20Thalambur!5e0!3m2!1sen!2sin!4v1770705861016!5m2!1sen!2sin" 
              width="100%" 
              height="550" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              className="grayscale-[0.1] contrast-[1.05]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;