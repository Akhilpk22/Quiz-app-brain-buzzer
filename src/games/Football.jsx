import React, { useState } from "react";
import { Link } from "react-router-dom";

import './Footballs.css';

function Football() {
  const FootballQuiz = [
    {
      id: 1,
      question: "Who is often referred to as 'The GOAT' in football?",
      answers: [
        {
          option: "Lionel Messi",
          Ans: true,
        },
        {
          option: "Cristiano Ronaldo",
          Ans: false,
        },
        {
          option: "Neymar",
          Ans: false,
        },
        {
          option: "Andres Iniesta",
          Ans: false,
        },
        {
          option: "Sergio Ramos",
          Ans: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which country has won the most FIFA World Cup titles?",
      answers: [
        {
          option: "Brazil",
          Ans: true,
        },
        {
          option: "Germany",
          Ans: false,
        },
        {
          option: "Argentina",
          Ans: false,
        },
        {
          option: "Italy",
          Ans: false,
        },
        {
          option: "France",
          Ans: false,
        },
      ],
    },
    {
      id: 3,
      question: "What is the home stadium of FC Barcelona?",
      answers: [
        {
          option: "Santiago Bernabeu",
          Ans: false,
        },
        {
          option: "Camp Nou",
          Ans: true,
        },
        {
          option: "Anfield",
          Ans: false,
        },
        {
          option: "Old Trafford",
          Ans: false,
        },
        {
          option: "Allianz Arena",
          Ans: false,
        },
      ],
    },
    {
      id: 4,
      question: "Which player has won the most Ballon d'Or awards in history?",
      answers: [
        {
          option: "Lionel Messi",
          Ans: true,
        },
        {
          option: "Cristiano Ronaldo",
          Ans: false,
        },
        {
          option: "Zinedine Zidane",
          Ans: false,
        },
        {
          option: "Pele",
          Ans: false,
        },
        {
          option: "Diego Maradona",
          Ans: false,
        },
      ],
    },
    {
      id: 5,
      question: "What is the national team of Germany known as?",
      answers: [
        {
          option: "Azzurri",
          Ans: false,
        },
        {
          option: "Les Bleus",
          Ans: false,
        },
        {
          option: "La Furia Roja",
          Ans: false,
        },
        {
          option: "Die Mannschaft",
          Ans: true,
        },
        {
          option: "The Three Lions",
          Ans: false,
        },
      ],
    },
    {
      id: 6,
      question:
        "Which club did Cristiano Ronaldo join after leaving Manchester United in 2009?",
      answers: [
        {
          option: "Real Madrid",
          Ans: true,
        },
        {
          option: "Barcelona",
          Ans: false,
        },
        {
          option: "Paris Saint-Germain",
          Ans: false,
        },
        {
          option: "Juventus",
          Ans: false,
        },
        {
          option: "Bayern Munich",
          Ans: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which country won the 2018 FIFA World Cup?",
      answers: [
        {
          option: "Brazil",
          Ans: false,
        },
        {
          option: "Argentina",
          Ans: false,
        },
        {
          option: "Germany",
          Ans: false,
        },
        {
          option: "France",
          Ans: true,
        },
        {
          option: "Spain",
          Ans: false,
        },
      ],
    },
    {
      id: 8,
      question:
        "Who holds the record for the most goals scored in a single calendar year?",
      answers: [
        {
          option: "Lionel Messi",
          Ans: true,
        },
        {
          option: "Cristiano Ronaldo",
          Ans: false,
        },
        {
          option: "Neymar",
          Ans: false,
        },
        {
          option: "Robert Lewandowski",
          Ans: false,
        },
        {
          option: "Sergio Aguero",
          Ans: false,
        },
      ],
    },
    {
      id: 9,
      question:
        "Which club is known for their 'Galacticos' policy of signing star players?",
      answers: [
        {
          option: "Manchester United",
          Ans: false,
        },
        {
          option: "Chelsea",
          Ans: false,
        },
        {
          option: "Real Madrid",
          Ans: true,
        },
        {
          option: "Bayern Munich",
          Ans: false,
        },
        {
          option: "AC Milan",
          Ans: false,
        },
      ],
    },
    {
      id: 10,
      question: "What is the most-watched sporting event in the world?",
      answers: [
        {
          option: "Super Bowl",
          Ans: false,
        },
        {
          option: "FIFA World Cup Final",
          Ans: true,
        },
        {
          option: "Olympic Games Opening Ceremony",
          Ans: false,
        },
        {
          option: "UEFA Champions League Final",
          Ans: false,
        },
        {
          option: "Wimbledon Men's Singles Final",
          Ans: false,
        },
      ],
    },
  ];

  // next question options rad state

  const [currentQ, setCurrentQ] = useState(0);

  // this  state is update the score

  const [showScore, setShowScore] = useState(false);

  //  scour state
  const [scour, setScour] = useState(0);

  // this function to repeat the buttons

  const handleAnswersClick = (Ans) => {
    if (Ans == true) {
      // alert("this answre is currect!");
      setScour(scour + 1);
    }

    const Nextquestion = currentQ + 1;
    //  to reach the last question
    if (Nextquestion < FootballQuiz.length) {
      setCurrentQ(Nextquestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <div
        style={{ width: "100%", backgroundColor: "#2c514e  ", height: "100vh" }}
        className="d-flex justify-content-center align-items-center "
      >
        {/* this linne is currect and the <p> </p> will be displayed and not is currect and else part is working  */}
        {showScore ? (
          <div className="">
            {/* this funtion win or fail */}
            {scour >= 5 ? (
              <div className="d-flex justify-content-center align-items-center animate__animated animate__zoomInDown">
                <img style={{ width: '400px', height: '250px' }} className="img-fluid mb-2 rounded-4" src="https://i.pinimg.com/originals/84/1b/c0/841bc0cec76cedec84168a6dc367f870.gif" alt="" />
              </div>
            ) : (
              <div className="d-flex justify-content-center align-items-center animate__animated animate__zoomInDown">
                <img style={{ width: '400px', height: '250px' }} className="img-fluid mb-2 rounded-4" src="https://t4.ftcdn.net/jpg/03/98/30/81/360_F_398308179_AEsc56XVIGTIQhUDJat3UurXgqFnQW3R.jpg" alt="" />
              </div>
            )}

            {/* this section display score  */}
            <p
              style={{ height: "100px",width:"400px",fontSize:'30px',backgroundColor:"white", color:'black' }}
              className="pt-4 fw-bolder border-1 shadow-lg text-center rounded-5">
              Your Score {scour} out of {FootballQuiz.length}{" "}
            </p>

            {/* this code is play and not play */}
            {
              scour >= 5 ?(
                <button style={{marginLeft:'140px'}} className="animate__animated animate__flipInX mt-2 shadow-lg text-center btn border rounded-2 "><Link style={{textDecoration:"none"}}  className="text-white" to={'/Landing'}>Play again</Link></button>
                
              ):(
                <button style={{marginLeft:'140px'}} className="animate__animated animate__flipInX mt-2 shadow-lg text-center btn border rounded-2 "><Link style={{textDecoration:"none"}}  className="text-white" to={'/Landing'}>Play again</Link></button>

                
              )
            }

          </div>
        ) : (
          <div
            style={{
              width: "500px",
              height: "630px",
              backgroundColor: "white",
            }}
            className="mt-2 rounded-top   "
          >
            <div className="mt-4   d-flex justify-content-around align-items-center">
              <h2>QUIZ</h2>
              
            </div>

            <div className="mt-2">
              <p className="m-2 animate__animated animate__slideInDown">
                Question:{currentQ + 1}/{FootballQuiz.length}
              </p>

              {/* this code be  display  question  */}

              <p className="p-3 fw-bold text-black fw-light animate__animated animate__slideInDown">
                {FootballQuiz[currentQ].question}
              </p>
            </div>

            <div className=" w-100 mt-5 flex-column justify-content-center align-items-center">
              {/* this code be display all data of the footballQuiz  one by one  */}

              {FootballQuiz[currentQ].answers.map((ans) => (
                <div className="m-3 animate__animated animate__fadeInDownBig ">
                  <button
                    style={{}}
                    onClick={() => handleAnswersClick(ans.Ans)}
                    className="hover-button shadow border p-2 w-100 mb-2 "
                  >
                    {ans.option}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-2  d-flex justify-content-end align-items-center">
              <div className="me-3 ">
                <Link to={"/"}>
                  <button className="home-button animate__animated animate__jackInTheBox  ">Home</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Football;
