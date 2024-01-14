import React from "react";

const Education = () => {
  const educationItems = [
    {
      degree: "Bachelor of Information Technology (BTech)",
      university: "Technical University of Munich, Germany",
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
