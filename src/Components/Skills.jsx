//SKILLSET//
import React from "react";
import {
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
