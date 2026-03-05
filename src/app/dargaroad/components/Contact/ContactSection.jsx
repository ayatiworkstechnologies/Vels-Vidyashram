import React from 'react';
import { Mail, Phone, Clock, GraduationCap } from 'lucide-react';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-12 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Main Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-8 shadow-sm">
          
          {/* Image Placeholder */}
          <div className="lg:col-span-4 relative group">
            <div className="aspect-[4/5] rounded-2xl bg-slate-200 overflow-hidden relative">
               {/* Replace with your actual image path */}
              <img 
                src="/dargaroad/school-contact-11.jpg" 
                alt="Students at Vels Vidyashram"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
           
          </div>

          {/* Content Area */}
          <div className="lg:col-span-5 space-y-6">
            <header>
              <h1 className="text-4xl md:text-5xl font-primary font-bold text-secondary mb-2">
                Welcome to <br/>
                <span className="text-primary">Vels Vidyashram</span>
              </h1>
              <div className="h-1.5 w-20 bg-secondary rounded-full"></div>
            </header>

            <p className="text-slate-600 leading-relaxed italic font-secondary">
              "Vels Vidyashram took its humble birth in 2018. The founder, Dr. Ishari K. Ganesh, a visionary, wanted to build a school with excellence as its watchword in all aspects."
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-tertiary font-bold font-primary">Email us</p>
                  <a href="mailto:apply@velsvidyashram.ac.in" className="font-medium hover:text-tertiary transition-colors font-secondary">
                    apply@velsvidyashram.ac.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-tertiary font-bold font-secondary">Call us</p>
                  <div className="flex flex-col font-medium">
                    <a href="tel:+919962506639" className="hover:text-tertiary">+91 99625 06639</a>
                    <a href="tel:+919962506349" className="hover:text-tertiary">+91 99625 06349</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours Card */}
          <div className="lg:col-span-3 bg-secondary text-white p-8 rounded-3xl shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <Clock className="text-primary w-6 h-6" />
              <h3 className="text-xl font-bold tracking-tight font-primary">Office Hours</h3>
            </div>
            
            <div className="space-y-4">
              <div className="pb-4 border-b border-slate-700">
                <p className="text-tertiary text-sm mb-1 font-secondary">Mon - Fri</p>
                <p className="text-2xl font-semibold">8:30 <span className="text-sm font-normal text-tertiary">AM</span> - 4:00 <span className="text-sm font-normal text-tertiary">PM</span></p>
              </div>
              <div>
                <p className="text-primary text-sm mb-1 font-secondary">Saturday</p>
                <p className="text-2xl font-semibold">9:00 <span className="text-sm font-normal text-tertiary">AM</span> - 3:00 <span className="text-sm font-normal text-tertiary">PM</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary text-secondary px-3 py-1 rounded-full text-sm font-bold mb-4 font-secondary">
                <GraduationCap size={16} />
                Admission Open
              </div>
              <h2 className="text-2xl font-bold mb-2 font-primary">Register Now</h2>
              <p className="text-slate-500 font-secondary">For Pre-KG to IX & XI</p>
            </div>
            <p className="mt-6 text-sm text-slate-400 italic font-secondary">
              Experienced and trained teachers help in maintaining academic excellence and high standards.
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-6 transition-transform hover:scale-[1.01]">
            <h2 className="text-2xl font-black text-slate-900 uppercase font-primary">Ready to join our community?</h2>
            <Link
                href="https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp"
                target="_blank"
                className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-tertiary transition-all shadow-lg active:scale-95 cursor-pointer"
                >
                CLICK HERE FOR ADMISSION
                </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ContactSection;