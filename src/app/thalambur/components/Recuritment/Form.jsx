'use client';

import {useForm} from 'react-hook-form';

export default function RecruitmentForm () {
  const {register, handleSubmit} = useForm ();

  const onSubmit = data => {
    console.log (data);
  };

  return (
    <section className="bg-white py-12 font-sans text-[#333]">
      <div className="mx-auto max-w-5xl px-6">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-[13px] font-medium">
          <span className="text-gray-600">Home</span>
          <span className="text-[#d32f2f] font-bold text-[10px]">{'>'}</span>
          <span className="text-gray-800">Recruitment</span>
        </div>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-[32px] font-bold tracking-tight text-black">
            Vels Group of Schools
          </h1>
          <div className="mx-auto mt-2 h-[2px] w-[60px] bg-[#ffb74d]" />
        </div>

        <form onSubmit={handleSubmit (onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2">

            {/* Row 1 */}
            <div className="space-y-2">
              <label className="text-[14px] font-bold ">
                Name of the Candidate *
              </label>
              <input
                {...register ('firstName')}
                placeholder="Enter First Name"
                className="w-full border border-[#e0e0e0] p-2.5 text-[13px] outline-none placeholder:text-[#bdbdbd] focus:border-gray-400 "
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[14px] font-bold">Last Name *</label>
              <input
                {...register ('lastName')}
                placeholder="Enter Last Name"
                className="w-full border border-[#e0e0e0] p-2.5 text-[13px] outline-none placeholder:text-[#bdbdbd] focus:border-gray-400"
              />
            </div>

            {/* Row 2 */}
            <div className="space-y-1.5">
              <label className="text-[14px] font-bold">Email Address*</label>
              <input
                {...register ('email')}
                placeholder="Enter Email Address"
                className="w-full border border-[#e0e0e0] p-2.5 text-[13px] outline-none placeholder:text-[#bdbdbd] focus:border-gray-400"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[14px] font-bold">Mobile Number*</label>
              <input
                {...register ('mobile')}
                placeholder="+91"
                className="w-full border border-[#e0e0e0] p-2.5 text-[13px] outline-none placeholder:text-[#bdbdbd] focus:border-gray-400"
              />
            </div>

            {/* 3-Column Row: DOB, Age, Position */}
            <div className="md:col-span-2 grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className="space-y-1.5">
                <label className="text-[14px] font-bold">Date of Birth*</label>
                <input
                  {...register ('dob')}
                  placeholder="dd/mm/yyyy"
                  className="w-full border border-[#e0e0e0] p-2.5 text-[13px] outline-none placeholder:text-[#bdbdbd]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[14px] font-bold">Age*</label>
                <input
                  {...register ('age')}
                  placeholder="Enter Age"
                  className="w-full border border-[#e0e0e0] p-2.5 text-[13px] outline-none placeholder:text-[#bdbdbd]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[14px] font-bold">
                  Position Applied for *
                </label>
                <input
                  {...register ('position')}
                  className="w-full border border-[#e0e0e0] p-2.5 text-[13px] outline-none"
                />
              </div>
            </div>

            {/* Gender & Status */}
            <div className="space-y-2">
              <label className="text-[14px] font-bold">Gender*</label>
              <div className="flex gap-6 text-[13px]">
                {['Male', 'Female', 'Neutral'].map (g => (
                  <label key={g} className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={g}
                      {...register ('gender')}
                      className="accent-[#3f2b96]"
                    />
                    <span className="text-gray-600 font-medium">{g}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[14px] font-bold">Status*</label>
              <div className="flex gap-6 text-[13px]">
                {['Single', 'Married', 'Divorced'].map (s => (
                  <label key={s} className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={s}
                      {...register ('status')}
                      className="accent-[#3f2b96]"
                    />
                    <span className="text-gray-600 font-medium">{s}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Qualification & Address */}
            <div className="space-y-1.5">
              <label className="text-[14px] font-bold">
                Educational Qualification*
              </label>
              <textarea
                {...register ('qualification')}
                placeholder="Enter Email Address" /* Matches placeholder in screenshot */
                className="w-full min-h-[100px] border border-[#e0e0e0] p-2.5 text-[13px] outline-none placeholder:text-[#bdbdbd]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[14px] font-bold">Present Address*</label>
              <textarea
                {...register ('address')}
                placeholder="Enter Email Address" /* Matches placeholder in screenshot */
                className="w-full min-h-[100px] border border-[#e0e0e0] p-2.5 text-[13px] outline-none placeholder:text-[#bdbdbd]"
              />
            </div>

            {/* CTC Row */}
            <div className="space-y-1.5">
              <label className="text-[14px] font-bold">Current CTC*</label>
              <input
                {...register ('currentCTC')}
                className="w-full border border-[#e0e0e0] p-2.5 text-[13px] outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[14px] font-bold">Expected CTC*</label>
              <input
                {...register ('expectedCTC')}
                className="w-full border border-[#e0e0e0] p-2.5 text-[13px] outline-none"
              />
            </div>

            {/* Experience & Curriculum */}
            <div className="space-y-2">
              <label className="text-[14px] font-bold">
                Years of Teaching Experience*
              </label>
              <div className="flex flex-wrap gap-4 text-[13px]">
                {['Fresher', '1 – 5', '6 – 10', '> 11'].map (e => (
                  <label key={e} className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={e}
                      {...register ('experience')}
                      className="accent-[#3f2b96]"
                    />
                    <span className="text-gray-600 font-medium">{e}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[14px] font-bold">
                Curriculum Taught*
              </label>
              <div className="flex flex-wrap gap-4 text-[13px]">
                {[
                  'State',
                  'CBSE',
                  'CISCE',
                  'Cambridge',
                  'IB',
                  'Others',
                ].map (c => (
                  <label key={c} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={c}
                      {...register ('curriculum')}
                      className="accent-[#3f2b96]"
                    />
                    <span className="text-gray-600 font-medium">{c}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Campus Selection */}
            <div className="space-y-3">
              {/* The image shows this label repeated as "Curriculum Taught*" but referring to Campus */}
              <label className="text-[14px] font-bold">
                Curriculum Taught*
              </label>
              <div className="space-y-2 text-[12px] font-medium text-gray-700">
                {[
                  'Any Campus',
                  'Vels International Pre School- Neelankarai',
                  'Vels International School - Injambakkam',
                  'Vels Vidyashram - Pallavaram',
                  'Vels Vidyashram - Thalambur',
                  'Vels Vidyashram - Dharga Road',
                  'Vels Vidyashram - Cantonment',
                ].map (item => (
                  <label
                    key={item}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="h-3.5 w-3.5 border-[#e0e0e0] accent-[#3f2b96]"
                      {...register ('campus')}
                    />
                    <span className="leading-tight">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Levels Taught */}
            <div className="space-y-3">
              <label className="text-[14px] font-bold">Levels Taught*</label>
              <div className="space-y-2 text-[12px] font-medium text-gray-700">
                {[
                  'Pre-primary',
                  'Primary',
                  'Secondary',
                  'Sr. Secondary',
                  'Other',
                ].map (l => (
                  <label
                    key={l}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="h-3.5 w-3.5 border-[#e0e0e0] accent-[#3f2b96]"
                      {...register ('levels')}
                    />
                    <span>{l}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Notice Period (Full Width) */}
            <div className="md:col-span-2 space-y-3">
              <label className="text-[14px] font-bold">Notice Period *</label>
              <div className="space-y-2 text-[12px] font-medium text-gray-700">
                {[
                  'Immediate Joining',
                  'Serving Notice Period',
                  '3 Months & Above',
                  'Looking for Next Academic Year',
                ].map ((n, idx) => (
                  <label key={n} className="flex items-center gap-3">
                    <input
                      type="radio"
                      defaultChecked={idx === 0}
                      value={n}
                      {...register ('notice')}
                      className="h-3.5 w-3.5 accent-[#3f2b96]"
                    />
                    <span>{n}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Detailed Experience */}
            <div className="md:col-span-2 space-y-1.5">
              <label className="text-[14px] font-bold">
                Details of last working Experience*
              </label>
              <textarea
                rows={5}
                {...register ('details')}
                className="w-full border border-[#e0e0e0] p-2.5 outline-none focus:border-gray-400"
              />
            </div>

            {/* Resume Upload */}
            <div className="md:col-span-1 space-y-1.5">
              <label className="text-[14px] font-bold">Upload Resume*</label>
              <input
                type="file"
                className="w-full border border-[#e0e0e0] p-1.5 text-[12px] file:mr-4 file:border-0 file:bg-gray-100 file:px-3 file:py-1 file:text-[12px]"
                {...register ('resume')}
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                className="bg-[#3f2b96] px-10 py-2.5 text-[15px] font-bold text-white transition-all hover:bg-[#2e1f70]"
              >
                Submit
              </button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
}
