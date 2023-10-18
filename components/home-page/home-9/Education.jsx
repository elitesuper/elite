import React from "react";

const Education = () => {
  const educationItems = [
    {
      degree: "Bachelor of Computer Science (BCompSc)",
      university: "University of Toronto, CANADA",
    },
    {
      degree: "Bachelor of Computer Engineering (BCompEg)",
      university: "University of Waterloo, USA",
    },
  ];

  return (
    <>
      {educationItems.map((item, i) => (
        <React.Fragment key={i}>
          <p className="text-lg tx-dark">{item.degree}</p>
          <div className="tx-sp2 text-uppercase">{item.university}</div>
        </React.Fragment>
      ))}
    </>
  );
};

export default Education;
