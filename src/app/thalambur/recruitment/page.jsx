'use client';

import { useForm } from 'react-hook-form';

export default function RecruitmentForm() {
  // Initialize useForm with default values if necessary
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      notice: 'Immediate Joining', // Matches your defaultChecked logic
    },
  });

 const onSubmit = async (formData) => {
  try {
    // Convert file to base64 (for resume)
    const file = formData.resume?.[0];
    let base64File = "";

    if (file) {
      base64File = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    }

    // Prepare API payload (IMPORTANT: match API keys exactly)
    const payload = {
      data: {
        fristname: formData.firstName,   // API typo -> keep "fristname"
        lastname: formData.lastName,
        email: formData.email,
        mobile: formData.mobile,
        dob: formData.dob,
        age: Number(formData.age),
        position: formData.position,
        gender: formData.gender,
        status: formData.status,
        qualification: formData.qualification,
        address: formData.address,
        currentctc: formData.currentCTC,
        expectedctc: formData.expectedCTC,
        experience: formData.experience,
        curriculum: formData.curriculum?.join(", "),
        campus: formData.campus?.join(", "),
        levels: formData.levels?.join(", "),
        notice: formData.notice,
        details: formData.details,
        resume: base64File, // sending file as base64
      },
    };

    const response = await fetch(
      "https://api.ayatiworks.com/api/v1/public/vels-thalambur/recruitment/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": "7499da34b8eccec2d45f1cd22aef0d8e4a93a6f0cc61411db77d7e0de9c12bdf", // 🔥 replace with real key
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();

    if (response.ok) {
      alert("Form submitted successfully ✅");
      console.log("Success:", result);
    } else {
      alert("Submission failed ❌");
      console.log("Error:", result);
    }
  } catch (error) {
    console.error("API Error:", error);
    alert("Something went wrong!");
  }
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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2">

            {/* Row 1 */}
            <div className="space-y-2">
              <label className="text-[14px] font-bold">
                Name of the Candidate *
              </label>
              <input
                {...register('firstName', { required: true })}
                placeholder="Enter First Name"
                className={`w-full border p-2.5 text-[13px] outline-none placeholder:text-[#bdbdbd] focus:border-gray-400 ${errors.firstName ? 'border-red-500' : 'border-[#e0e0e0]'}`}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[14px] font-bold">Last Name *</label>
              <input
                {...register('lastName', { required: true })}
                placeholder="Enter Last Name"
                className={`w-full border p-2.5 text-[13px] outline-none placeholder:text-[#bdbdbd] focus:border-gray-400 ${errors.lastName ? 'border-red-500' : 'border-[#e0e0e0]'}`}
              />
            </div>

            {/* Row 2 */}
            <div className="space-y-1.5">
              <label className="text-[14px] font-bold">Email Address*</label>
              <input
                {...register('email', { 
                  required: true, 
                  pattern: /^\S+@\S+$/i 
                })}
                placeholder="Enter Email Address"
                className={`w-full border p-2.5 text-[13px] outline-none placeholder:text-[#bdbdbd] focus:border-gray-400 ${errors.email ? 'border-red-500' : 'border-[#e0e0e0]'}`}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[14px] font-bold">Mobile Number*</label>
              <input
                {...register('mobile', { required: true })}
                placeholder="+91"
                className={`w-full border p-2.5 text-[13px] outline-none placeholder:text-[#bdbdbd] focus:border-gray-400 ${errors.mobile ? 'border-red-500' : 'border-[#e0e0e0]'}`}
              />
            </div>

            {/* 3-Column Row: DOB, Age, Position */}
            <div className="md:col-span-2 grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className="space-y-1.5">
                <label className="text-[14px] font-bold">Date of Birth*</label>
                <input
                  type="date"
                  {...register('dob', { required: true })}
                  className={`w-full border p-2.5 text-[13px] outline-none ${errors.dob ? 'border-red-500' : 'border-[#e0e0e0]'}`}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[14px] font-bold">Age*</label>
                <input
                  type="number"
                  {...register('age', { required: true })}
                  placeholder="Enter Age"
                  className={`w-full border p-2.5 text-[13px] outline-none placeholder:text-[#bdbdbd] ${errors.age ? 'border-red-500' : 'border-[#e0e0e0]'}`}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[14px] font-bold">Position Applied for *</label>
                <input
                  {...register('position', { required: true })}
                  className={`w-full border p-2.5 text-[13px] outline-none ${errors.position ? 'border-red-500' : 'border-[#e0e0e0]'}`}
                />
              </div>
            </div>

            {/* Gender & Status */}
            <div className="space-y-2">
              <label className="text-[14px] font-bold">Gender*</label>
              <div className="flex gap-6 text-[13px]">
                {['Male', 'Female', 'Neutral'].map((g) => (
                  <label key={g} className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={g}
                      {...register('gender', { required: true })}
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
                {['Single', 'Married', 'Divorced'].map((s) => (
                  <label key={s} className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={s}
                      {...register('status', { required: true })}
                      className="accent-[#3f2b96]"
                    />
                    <span className="text-gray-600 font-medium">{s}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Qualification & Address */}
            <div className="space-y-1.5">
              <label className="text-[14px] font-bold">Educational Qualification*</label>
              <textarea
                {...register('qualification', { required: true })}
                placeholder="Enter Qualification Details"
                className={`w-full min-h-[100px] border p-2.5 text-[13px] outline-none placeholder:text-[#bdbdbd] ${errors.qualification ? 'border-red-500' : 'border-[#e0e0e0]'}`}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[14px] font-bold">Present Address*</label>
              <textarea
                {...register('address', { required: true })}
                placeholder="Enter Full Address"
                className={`w-full min-h-[100px] border p-2.5 text-[13px] outline-none placeholder:text-[#bdbdbd] ${errors.address ? 'border-red-500' : 'border-[#e0e0e0]'}`}
              />
            </div>

            {/* CTC Row */}
            <div className="space-y-1.5">
              <label className="text-[14px] font-bold">Current CTC*</label>
              <input
                {...register('currentCTC', { required: true })}
                className={`w-full border p-2.5 text-[13px] outline-none ${errors.currentCTC ? 'border-red-500' : 'border-[#e0e0e0]'}`}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[14px] font-bold">Expected CTC*</label>
              <input
                {...register('expectedCTC', { required: true })}
                className={`w-full border p-2.5 text-[13px] outline-none ${errors.expectedCTC ? 'border-red-500' : 'border-[#e0e0e0]'}`}
              />
            </div>

            {/* Experience & Curriculum */}
            <div className="space-y-2">
              <label className="text-[14px] font-bold">Years of Teaching Experience*</label>
              <div className="flex flex-wrap gap-4 text-[13px]">
                {['Fresher', '1 – 5', '6 – 10', '> 11'].map((e) => (
                  <label key={e} className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={e}
                      {...register('experience', { required: true })}
                      className="accent-[#3f2b96]"
                    />
                    <span className="text-gray-600 font-medium">{e}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[14px] font-bold">Curriculum Taught*</label>
              <div className="flex flex-wrap gap-4 text-[13px]">
                {['State', 'CBSE', 'CISCE', 'Cambridge', 'IB', 'Others'].map((c) => (
                  <label key={c} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={c}
                      {...register('curriculum')}
                      className="accent-[#3f2b96]"
                    />
                    <span className="text-gray-600 font-medium">{c}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Campus Selection */}
            <div className="space-y-3">
              <label className="text-[14px] font-bold">Preferred Campus*</label>
              <div className="space-y-2 text-[12px] font-medium text-gray-700">
                {[
                  'Any Campus',
                  'Vels International Pre School- Neelankarai',
                  'Vels International School - Injambakkam',
                  'Vels Vidyashram - Pallavaram',
                  'Vels Vidyashram - Thalambur',
                  'Vels Vidyashram - Dharga Road',
                  'Vels Vidyashram - Cantonment',
                ].map((item) => (
                  <label key={item} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      value={item}
                      className="h-3.5 w-3.5 border-[#e0e0e0] accent-[#3f2b96]"
                      {...register('campus')}
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
                {['Pre-primary', 'Primary', 'Secondary', 'Sr. Secondary', 'Other'].map((l) => (
                  <label key={l} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      value={l}
                      className="h-3.5 w-3.5 border-[#e0e0e0] accent-[#3f2b96]"
                      {...register('levels')}
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
                ].map((n) => (
                  <label key={n} className="flex items-center gap-3">
                    <input
                      type="radio"
                      value={n}
                      {...register('notice', { required: true })}
                      className="h-3.5 w-3.5 accent-[#3f2b96]"
                    />
                    <span>{n}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Detailed Experience */}
            <div className="md:col-span-2 space-y-1.5">
              <label className="text-[14px] font-bold">Details of last working Experience*</label>
              <textarea
                rows={5}
                {...register('details', { required: true })}
                className={`w-full border p-2.5 outline-none focus:border-gray-400 ${errors.details ? 'border-red-500' : 'border-[#e0e0e0]'}`}
              />
            </div>

            {/* Resume Upload */}
            <div className="md:col-span-1 space-y-1.5">
              <label className="text-[14px] font-bold">Upload Resume*</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className={`w-full border p-1.5 text-[12px] file:mr-4 file:border-0 file:bg-gray-100 file:px-3 file:py-1 file:text-[12px] ${errors.resume ? 'border-red-500' : 'border-[#e0e0e0]'}`}
                {...register('resume', { required: true })}
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