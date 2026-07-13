import React from "react";

const AISection = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/bg-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "500px",
        padding: "70px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#f58220",
            fontSize: "42px",
            fontWeight: "700",
            marginBottom: "30px",
            lineHeight: "1.2",
          }}
        >
          Empowering Young Minds Through AI-Driven Education
        </h2>

        <p
          style={{
            color: "#666",
            fontSize: "22px",
            lineHeight: "1.6",
            margin: 0,
          }}
        >
          At <strong style={{ color: "#000" }}>Vels Vidyashram</strong>, we are
          redefining education by combining academic excellence with the power
          of Artificial Intelligence, innovation, and experiential learning.
          <strong style={{ color: "#000" }}>
            {" "}
            Across our four campuses, students
          </strong>{" "}
          are immersed in a future-ready environment where technology,
          creativity, and values come together to shape tomorrow's leaders.
          With a strong CBSE curriculum,
          <strong style={{ color: "#000" }}>
            {" "}
            AI-integrated classrooms, STEM education, Robotics,
          </strong>{" "}
          and dedicated educators, we nurture confident learners who are
          prepared for the opportunities and challenges of the digital age.
        </p>
      </div>
    </section>
  );
};

export default AISection;