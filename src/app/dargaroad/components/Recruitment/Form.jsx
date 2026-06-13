"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function RecruitmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      notice: "Immediate Joining",
    },
  });

  const onSubmit = async (formData) => {
    setIsSubmitting(true);

    try {
      const file = formData.resume?.[0];
      let base64File = "";

      if (file) {
        base64File = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
        });
      }

      const payload = {
        data: {
          firstname: formData.firstName,
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
          curriculum: formData.curriculum?.join(", ") || "",
          campus: "Vels Vidyashram - Cantonment",
          levels: formData.levels?.join(", ") || "",
          notice: formData.notice,
          details: formData.details,
          resume: base64File,
        },
      };

      const response = await fetch(
        "https://api.ayatiworks.com/api/v1/public/vels-dargaroad/recruitment/records",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key":
              "f118c8833be5d3de313be7a6516abf706eae47426e4f5857e43d61db7989bc0e",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        alert(result?.detail || result?.message || "Submission failed ❌");
        return;
      }

      alert("Form submitted successfully ✅");
      reset();
    } catch (error) {
      console.error("API Error:", error);
      alert("Something went wrong ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-12 font-sans text-[#333]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 flex items-center gap-2 text-[13px] font-medium">
          <span className="text-gray-600">Home</span>
          <span className="text-[#d32f2f] font-bold text-[10px]">{">"}</span>
          <span className="text-gray-800">Recruitment</span>
        </div>

        <div className="mb-12 text-center">
          <h1 className="text-[32px] font-bold tracking-tight text-black">
            Vels Group of Schools
          </h1>
          <div className="mx-auto mt-2 h-[2px] w-[60px] bg-[#ffb74d]" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-[14px] font-bold">
                Name of the Candidate *
              </label>
              <input
                {...register("firstName", { required: true })}
                placeholder="Enter First Name"
                className={`w-full border p-2.5 text-[13px] outline-none ${
                  errors.firstName ? "border-red-500" : "border-[#e0e0e0]"
                }`}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-bold">Last Name *</label>
              <input
                {...register("lastName", { required: true })}
                placeholder="Enter Last Name"
                className={`w-full border p-2.5 text-[13px] outline-none ${
                  errors.lastName ? "border-red-500" : "border-[#e0e0e0]"
                }`}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-bold">Email Address *</label>
              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                placeholder="Enter Email Address"
                className={`w-full border p-2.5 text-[13px] outline-none ${
                  errors.email ? "border-red-500" : "border-[#e0e0e0]"
                }`}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-bold">Mobile Number *</label>
              <input
                {...register("mobile", { required: true })}
                placeholder="+91"
                className={`w-full border p-2.5 text-[13px] outline-none ${
                  errors.mobile ? "border-red-500" : "border-[#e0e0e0]"
                }`}
              />
            </div>

            <div className="grid grid-cols-1 gap-5 md:col-span-2 md:grid-cols-3">
              <div className="space-y-2">
                <label className="text-[14px] font-bold">Date of Birth *</label>
                <input
                  type="date"
                  {...register("dob", { required: true })}
                  className={`w-full border p-2.5 text-[13px] outline-none ${
                    errors.dob ? "border-red-500" : "border-[#e0e0e0]"
                  }`}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-bold">Age *</label>
                <input
                  type="number"
                  {...register("age", { required: true })}
                  placeholder="Enter Age"
                  className={`w-full border p-2.5 text-[13px] outline-none ${
                    errors.age ? "border-red-500" : "border-[#e0e0e0]"
                  }`}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-bold">
                  Position Applied for *
                </label>
                <input
                  {...register("position", { required: true })}
                  className={`w-full border p-2.5 text-[13px] outline-none ${
                    errors.position ? "border-red-500" : "border-[#e0e0e0]"
                  }`}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-bold">Gender *</label>
              <div className="flex gap-6 text-[13px]">
                {["Male", "Female", "Neutral"].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={item}
                      {...register("gender", { required: true })}
                      className="accent-[#3f2b96]"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-bold">Status *</label>
              <div className="flex gap-6 text-[13px]">
                {["Single", "Married", "Divorced"].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={item}
                      {...register("status", { required: true })}
                      className="accent-[#3f2b96]"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-bold">
                Educational Qualification *
              </label>
              <textarea
                {...register("qualification", { required: true })}
                className={`min-h-[100px] w-full border p-2.5 text-[13px] outline-none ${
                  errors.qualification ? "border-red-500" : "border-[#e0e0e0]"
                }`}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-bold">Present Address *</label>
              <textarea
                {...register("address", { required: true })}
                className={`min-h-[100px] w-full border p-2.5 text-[13px] outline-none ${
                  errors.address ? "border-red-500" : "border-[#e0e0e0]"
                }`}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-bold">Current CTC *</label>
              <input
                {...register("currentCTC", { required: true })}
                className={`w-full border p-2.5 text-[13px] outline-none ${
                  errors.currentCTC ? "border-red-500" : "border-[#e0e0e0]"
                }`}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-bold">Expected CTC *</label>
              <input
                {...register("expectedCTC", { required: true })}
                className={`w-full border p-2.5 text-[13px] outline-none ${
                  errors.expectedCTC ? "border-red-500" : "border-[#e0e0e0]"
                }`}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-bold">
                Years of Teaching Experience *
              </label>
              <div className="flex flex-wrap gap-4 text-[13px]">
                {["Fresher", "1 – 5", "6 – 10", "> 11"].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={item}
                      {...register("experience", { required: true })}
                      className="accent-[#3f2b96]"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-bold">
                Curriculum Taught *
              </label>
              <div className="flex flex-wrap gap-4 text-[13px]">
                {["State", "CBSE", "CISCE", "Cambridge", "IB", "Others"].map(
                  (item) => (
                    <label key={item} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={item}
                        {...register("curriculum", { required: true })}
                        className="accent-[#3f2b96]"
                      />
                      {item}
                    </label>
                  )
                )}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[14px] font-bold">
                Preferred Campus *
              </label>
              <div className="space-y-2 text-[12px] font-medium text-gray-700">
                {[
                  "Any Campus",
                  "Vels International Pre School- Neelankarai",
                  "Vels International School - Injambakkam",
                  "Vels Vidyashram - Pallavaram",
                  "Vels Vidyashram - Thalambur",
                  "Vels Vidyashram - Dharga Road",
                  "Vels Vidyashram - Cantonment",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      value={item}
                      {...register("campus")}
                      className="h-3.5 w-3.5 accent-[#3f2b96]"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[14px] font-bold">Levels Taught *</label>
              <div className="space-y-2 text-[12px] font-medium text-gray-700">
                {[
                  "Pre-primary",
                  "Primary",
                  "Secondary",
                  "Sr. Secondary",
                  "Other",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      value={item}
                      {...register("levels", { required: true })}
                      className="h-3.5 w-3.5 accent-[#3f2b96]"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3 md:col-span-2">
              <label className="text-[14px] font-bold">Notice Period *</label>
              <div className="space-y-2 text-[12px] font-medium text-gray-700">
                {[
                  "Immediate Joining",
                  "Serving Notice Period",
                  "3 Months & Above",
                  "Looking for Next Academic Year",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-3">
                    <input
                      type="radio"
                      value={item}
                      {...register("notice", { required: true })}
                      className="h-3.5 w-3.5 accent-[#3f2b96]"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-[14px] font-bold">
                Details of last working Experience *
              </label>
              <textarea
                rows={5}
                {...register("details", { required: true })}
                className={`w-full border p-2.5 outline-none ${
                  errors.details ? "border-red-500" : "border-[#e0e0e0]"
                }`}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-bold">Upload Resume *</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                {...register("resume", { required: true })}
                className={`w-full border p-1.5 text-[12px] ${
                  errors.resume ? "border-red-500" : "border-[#e0e0e0]"
                }`}
              />
            </div>

            <div className="pt-4 md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#3f2b96] px-10 py-2.5 text-[15px] font-bold text-white transition-all hover:bg-[#2e1f70] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}