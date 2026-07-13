import React from "react";
//import bg from "../assets/bg-4.png"; 

const ExperienceSection = () => {
  return (
    <>
      <style>{`
        /* ===== Experience Section Only ===== */

        .ai-admission{
          position:relative;
          width:100%;
          min-height:560px;
          padding:80px 0 100px;
          overflow:hidden;
          display:flex;
          justify-content:center;
          align-items:center;
          font-family:'Poppins',sans-serif;
        }

        .ai-bg{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          object-fit:cover;
          z-index:-2;
        }

        .ai-overlay{
          position:absolute;
          inset:0;
          background:rgba(255,255,255,0.05);
          z-index:-1;
        }

        .ai-watermark{
          position:absolute;
          top:40px;
          left:50%;
          transform:translateX(-50%);
          font-size:120px;
          font-weight:700;
          color:rgba(0,0,0,0.03);
          white-space:nowrap;
          user-select:none;
          letter-spacing:2px;
        }

        .ai-content{
          width:65%;
          text-align:center;
          z-index:2;
        }

        .ai-content h2{
          color:#2E3192;
          font-size:42px;
          font-weight:700;
          margin-bottom:30px;
          letter-spacing:1px;
        }

        .ai-content p{
          width:78%;
          margin:0 auto;
          color:#222;
          font-size:20px;
          line-height:1.6;
        }

        .ai-quote{
          margin-top:28px !important;
          font-size:16px !important;
          color:#555 !important;
          letter-spacing:1px;
        }

        .ai-btn{
          margin-top:45px;
          margin-bottom:70px;
          background:#2E3192;
          color:#fff;
          border:none;
          border-radius:40px;
          padding:16px 48px;
          font-size:20px;
          font-weight:600;
          cursor:pointer;
          transition:0.3s ease;
          box-shadow:0 12px 25px rgba(46,49,146,.25);
        }

        .ai-btn:hover{
          background:#20257d;
          transform:translateY(-3px);
          box-shadow:0 18px 30px rgba(46,49,146,.35);
        }

        /* ===== Responsive ===== */

        @media (max-width:1024px){

          .ai-admission{
            min-height:500px;
          }

          .ai-watermark{
            font-size:90px;
          }

          .ai-content{
            width:85%;
          }

          .ai-content h2{
            font-size:34px;
          }

          .ai-content p{
            width:90%;
            font-size:18px;
          }

        }

        @media (max-width:768px){

          .ai-admission{
            min-height:450px;
            padding:60px 20px 80px;
          }

          .ai-watermark{
            font-size:60px;
            top:60px;
          }

          .ai-content{
            width:100%;
          }

          .ai-content h2{
            font-size:28px;
          }

          .ai-content p{
            width:100%;
            font-size:16px;
          }

          .ai-quote{
            font-size:14px !important;
          }

          .ai-btn{
            padding:14px 36px;
            font-size:17px;
            margin-bottom:50px;
          }

        }
      `}</style>

      <section className="ai-admission">

        <img src={'bg-4.png'} alt="Admission Background" className="ai-bg" />

        <div className="ai-overlay"></div>

        <div className="ai-watermark">
          Admission Open
        </div>

        <div className="ai-content">

          <h2>
            Experience the Future of Learning
          </h2>

          <p>
            Discover an educational environment where Artificial Intelligence
            meets academic excellence, innovation inspires creativity, and
            every child is empowered to dream, explore, and succeed.
          </p>

          <p className="ai-quote">
            "Visit Any of Our Four Campuses and Begin Your Child's Journey
            Towards Excellence Today"
          </p>
          <a
  href="https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp"
  target="_blank"
  rel="noopener noreferrer"
  className="ai-btn inline-flex items-center justify-center"
>
  Register
</a>

         

        </div>

      </section>
    </>
  );
};

export default ExperienceSection;