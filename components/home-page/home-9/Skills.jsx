const Skills = () => {
  const skills = [
    { name: "Problem Solving", bgColor: "#FFF8F8" },
    { name: "Programming Languages", bgColor: "#E4FCF9" },
    { name: "Data Structures and Algorithms", bgColor: "#E5F4FB" },
    { name: "Debugging", bgColor: "#FFF9E6" },
    { name: "System Design", bgColor: "#F9EDFF" },
    { name: "Testing and Validation", bgColor: "#F0F9E0" },
    { name: "Code Versioning", bgColor: "#FFF0F0" },
    { name: "Database Management", bgColor: "#F5F8FA" },
    { name: "Machine Learning", bgColor: "#E0F7FA" },
    { name: "DevOps", bgColor: "#ECEFF1" },
    { name: "Frontend/Backend Development", bgColor: "#E1BEE7" },
    // Add more skills here as needed
  ];

  return (
    <ul className="d-flex flex-wrap align-items-center style-none skils-list">
      {skills.map((skill, index) => (
        <li key={index}>
          <span style={{ backgroundColor: skill.bgColor }}>{skill.name}</span>
        </li>
      ))}
      <li>&amp; more…</li>
    </ul>
  );
};

export default Skills;
