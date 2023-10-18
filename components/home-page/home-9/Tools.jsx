const Tools = () => {
  const toolNames = [
    "Git",
    "GitHub",
    "Visual Studio Code",
    "Docker",
    "Postman",
    "JIRA",
    "Jenkins",
  ];

  return (
    <ul className="style-none tx-dark fs-20 tools-list">
      {toolNames.map((toolName) => (
        <li key={toolName}>{toolName}</li>
      ))}
    </ul>
  );
};

export default Tools;
