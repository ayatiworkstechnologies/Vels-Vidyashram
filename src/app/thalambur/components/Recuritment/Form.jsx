"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import { useForm } from "react-hook-form";

export default function RecruitmentForm() {
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

  const [message, setMessage] = useState("");

  const onSubmit = async (formData) => {
  const toastId = toast.loading("Submitting application...");

  try {
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

    const payload = {
      data: {
        fristname: formData.firstName || "",
        lastname: formData.lastName || "",
        email: formData.email || "",
        mobile: formData.mobile || "",
        dob: formData.dob || "",
        age: Number(formData.age) || 0,
        position: formData.position || "",
        gender: formData.gender || "",
        status: formData.status || "",
        qualification: formData.qualification || "",
        address: formData.address || "",
        currentctc: formData.currentCTC || "",
        expectedctc: formData.expectedCTC || "",
        experience: formData.experience || "",
        curriculum: Array.isArray(formData.curriculum)
          ? formData.curriculum.join(", ")
          : formData.curriculum || "",
        campus: "Vels Vidyashram - Pallavaram",
        levels: Array.isArray(formData.levels)
          ? formData.levels.join(", ")
          : formData.levels || "",
        notice: formData.notice || "",
        details: formData.details || "",
        resume: base64File,
      },
    };

    const response = await fetch("/api/pallavaram-recruitment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const text = await response.text();

    let result = {};
    try {
      result = text ? JSON.parse(text) : {};
    } catch {
      result = { message: text };
    }

    console.log("API Response:", result);

    if (response.ok && result?.id) {
      toast.success("Application submitted successfully!", {
        id: toastId,
      });

      reset();
      return;
    }

    toast.error(result?.message || result?.detail || "Submission failed", {
      id: toastId,
    });
  } catch (error) {
    console.error("API Error:", error);

    toast.error(error?.message || "Something went wrong!", {
      id: toastId,
    });
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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2">
            <Input label="Name of the Candidate *" {...register("firstName")} />
            <Input label="Last Name *" {...register("lastName")} />
            <Input label="Email Address *" type="email" {...register("email")} />
            <Input label="Mobile Number *" {...register("mobile")} />
            <Input label="Date of Birth *" type="date" {...register("dob")} />
            <Input label="Age *" type="number" {...register("age")} />
            <Input label="Position Applied for *" {...register("position")} />

            <RadioGroup
              label="Gender *"
              name="gender"
              options={["Male", "Female", "Neutral"]}
              register={register}
            />

            <RadioGroup
              label="Status *"
              name="status"
              options={["Single", "Married", "Divorced"]}
              register={register}
            />

            <Textarea
              label="Educational Qualification *"
              {...register("qualification")}
            />

            <Textarea label="Present Address *" {...register("address")} />

            <Input label="Current CTC *" {...register("currentCTC")} />
            <Input label="Expected CTC *" {...register("expectedCTC")} />

            <RadioGroup
              label="Years of Teaching Experience *"
              name="experience"
              options={["Fresher", "1 – 5", "6 – 10", "> 11"]}
              register={register}
            />

            <CheckboxGroup
              label="Curriculum Taught *"
              name="curriculum"
              options={["State", "CBSE", "CISCE", "Cambridge", "IB", "Others"]}
              register={register}
            />

            <CheckboxGroup
              label="Campus Preferred *"
              name="campus"
              options={[
                "Any Campus",
                "Vels International Pre School- Neelankarai",
                "Vels International School - Injambakkam",
                "Vels Vidyashram - Pallavaram",
                "Vels Vidyashram - Thalambur",
                "Vels Vidyashram - Dharga Road",
                "Vels Vidyashram - Cantonment",
              ]}
              register={register}
            />

            <CheckboxGroup
              label="Levels Taught *"
              name="levels"
              options={[
                "Pre-primary",
                "Primary",
                "Secondary",
                "Sr. Secondary",
                "Other",
              ]}
              register={register}
            />

            <div className="md:col-span-2">
              <RadioGroup
                label="Notice Period *"
                name="notice"
                options={[
                  "Immediate Joining",
                  "Serving Notice Period",
                  "3 Months & Above",
                  "Looking for Next Academic Year",
                ]}
                register={register}
              />
            </div>

            <div className="md:col-span-2">
              <Textarea
                label="Details of last working Experience *"
                rows={5}
                {...register("details")}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[14px] font-bold">Upload Resume *</label>
              <input
                type="file"
                {...register("resume")}
                className="w-full border border-[#e0e0e0] p-1.5 text-[12px]"
              />
              <p className="text-[11px] text-gray-500">
                Note: Resume upload needs separate file upload API.
              </p>
            </div>

            {message && (
              <div className="md:col-span-2 text-[14px] font-semibold text-[#3f2b96]">
                {message}
              </div>
            )}

            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#3f2b96] px-10 py-2.5 text-[15px] font-bold text-white transition-all hover:bg-[#2e1f70] disabled:opacity-60"
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

function Input({ label, ...props }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[14px] font-bold">{label}</label>
      <input
        {...props}
        className="w-full border border-[#e0e0e0] p-2.5 text-[13px] outline-none placeholder:text-[#bdbdbd] focus:border-gray-400"
      />
    </div>
  );
}

function Textarea({ label, rows = 4, ...props }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[14px] font-bold">{label}</label>
      <textarea
        rows={rows}
        {...props}
        className="w-full border border-[#e0e0e0] p-2.5 text-[13px] outline-none placeholder:text-[#bdbdbd] focus:border-gray-400"
      />
    </div>
  );
}

function RadioGroup({ label, name, options, register }) {
  return (
    <div className="space-y-2">
      <label className="text-[14px] font-bold">{label}</label>
      <div className="flex flex-wrap gap-5 text-[13px]">
        {options.map((item) => (
          <label key={item} className="flex items-center gap-2">
            <input
              type="radio"
              value={item}
              {...register(name)}
              className="accent-[#3f2b96]"
            />
            <span className="text-gray-600 font-medium">{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

function CheckboxGroup({ label, name, options, register }) {
  return (
    <div className="space-y-3">
      <label className="text-[14px] font-bold">{label}</label>
      <div className="space-y-2 text-[12px] font-medium text-gray-700">
        {options.map((item) => (
          <label key={item} className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              value={item}
              {...register(name)}
              className="h-3.5 w-3.5 accent-[#3f2b96]"
            />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
}