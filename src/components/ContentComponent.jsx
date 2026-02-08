import React from "react";
import "../assets/css/content.css"
import photo from "../assets/profile.jpeg";


const sections = [
  {
    title: "Early Life",
    description:
      "AB de Villiers was born in South Africa and showed talent in cricket from a very young age. He was good in many sports, but cricket became his passion."
  },
  {
    title: "Cricket Career",
    description:
      "AB de Villiers played for South Africa and Royal Challengers Bangalore. He is famous for his 360-degree batting style and match-winning performances."
  },
  {
    title: "Achievements",
    description:
      "He holds the record for the fastest ODI century and has won many awards for his aggressive and innovative batting."
  }
];

export const ContentComponent = () => {
  //js code... number,string,undefined,boolean,object

  return (
  <div class="box photo">
     <div className="container">
      <img src={photo} alt="profile" />
      {sections.map((item, index) => (
        <div className="column" key={index}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </div>



   
  
  );
}