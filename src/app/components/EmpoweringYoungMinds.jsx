import React from "react";

const AISection = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat min-h-[500px] flex justify-center items-start px-5 py-[70px]"
      style={{ backgroundImage: "url('/bg-1.png')" }}
    >
      <div className="max-w-[900px] text-center">
        <h2 className="text-[#f58220] text-[42px] font-bold leading-tight mb-[30px]">
          Empowering Young Minds Through AI-Driven Education
        </h2>

        <p className="text-[#666666] text-[22px] leading-[1.6]">
          At <span className="font-bold text-black">Vels Vidyashram</span>, we
          are redefining education by combining academic excellence with the
          power of Artificial Intelligence, innovation, and experiential
          learning.
          <span className="font-bold text-black">
            {" "}
            Across our four campuses, students
          </span>{" "}
          are immersed in a future-ready environment where technology,
          creativity, and values come together to shape tomorrow's leaders.
          With a strong CBSE curriculum,
          <span className="font-bold text-black">
            {" "}
            AI-integrated classrooms, STEM education, Robotics,
          </span>{" "}
          and dedicated educators, we nurture confident learners who are
          prepared for the opportunities and challenges of the digital age.
        </p>
      </div>
    </section>
  );
};

export default AISection;