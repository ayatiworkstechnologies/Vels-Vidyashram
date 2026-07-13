import React from "react";
//import bgImage from "../assets/bg-5.png";
//import studentsImage from "../assets/students.png";

const LearningBanner = () => {
  return (
    <>
      <style>{`
        .learning-banner-wrapper{
            width:100%;
            display:flex;
            justify-content:center;
            padding:60px 20px;
            box-sizing:border-box;
        }

        .learning-banner{
            width:100%;
            max-width:1380px;
            min-height:430px;
            border-radius:35px;
            overflow:hidden;
            display:flex;
            align-items:center;
            justify-content:space-between;
            background-size:cover;
            background-position:center;
            box-shadow:0 18px 45px rgba(251, 248, 248, 0.9);
        }

        .learning-left{
            width:55%;
            padding:70px;
            
            z-index:2;
        }

        .learning-left h1{
            font-size:52px;
            margin:0 0 25px;
            font-weight:700;
            color: white ! important;
            letter-spacing:1px;
        }

        .learning-left p{
            font-size:22px;
            line-height:1.75;
            max-width:700px;
            margin-bottom:40px;
            color:rgba(255,255,255,.95);
        }

        .register-btn{
            width:180px;
            height:58px;
            border:none;
            border-radius:50px;
            background:#fff;
            color:#2f36c8;
            font-size:22px;
            font-weight:600;
            cursor:pointer;
            transition:.3s;
        }

        .register-btn:hover{
            transform:translateY(-3px);
            box-shadow:0 10px 20px rgb(255, 255, 255);
        }

        .button-spacing{
            height:40px;
        }

        .learning-right{
            width:45%;
            display:flex;
            justify-content:flex-end;
            align-items:flex-end;
            height:100%;
        }

        .learning-right img{
            width:100%;
            max-width:520px;
            object-fit:contain;
            display:block;
        }

        @media(max-width:992px){

            .learning-banner{
                flex-direction:column;
                min-height:auto;
            }

            .learning-left{
                width:100%;
                padding:50px 35px 20px;
                text-align:center;
            }

            .learning-left h1{
                font-size:40px;
            }

            .learning-left p{
                font-size:18px;
                margin:auto;
                margin-bottom:35px;
            }

            .learning-right{
                width:100%;
                justify-content:center;
            }

            .learning-right img{
                max-width:420px;
            }

            .button-spacing{
                height:30px;
            }

        }

        @media(max-width:768px){

            .learning-banner-wrapper{
                padding:35px 15px;
            }

            .learning-banner{
                border-radius:25px;
            }

            .learning-left{
                padding:35px 25px 15px;
            }

            .learning-left h1{
                font-size:32px;
            }

            .learning-left p{
                font-size:16px;
                line-height:1.7;
            }

            .register-btn{
                width:150px;
                height:48px;
                font-size:18px;
            }

            .learning-right img{
                max-width:280px;
            }

        }

        @media(max-width:480px){

            .learning-left{
                padding:30px 20px;
            }

            .learning-left h1{
                font-size:28px;
            }

            .learning-left p{
                font-size:15px;
            }

            .learning-right img{
                max-width:230px;
            }

        }

      `}</style>

      <section className="learning-banner-wrapper">
        <div
          className="learning-banner"
          style={{
            backgroundImage: `url('bg-5.png')`,
          }}
        >
          <div className="learning-left">
            <h1>Learning for Tomorrow</h1>

            <p>
              Our learning ecosystem is designed to prepare students for careers
              that may not even exist today. Through AI-powered education,
              Robotics, STEM exploration, project-based learning, innovation
              challenges, and experiential learning, students develop curiosity,
              confidence, and future-ready skills.
            </p>
            <a
  href="https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVVS.jsp"
  target="_blank"
  rel="noopener noreferrer"
  className="register-btn inline-flex items-center justify-center"
>
  Register
</a>

            <div className="button-spacing"></div>
          </div>

          
        </div>
      </section>
    </>
  );
};

export default LearningBanner;