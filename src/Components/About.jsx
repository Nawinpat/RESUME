//about//
import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me🤗
          </h1>
          <p>
            Hi, my name is <b>Nawinpat Thanachothirun</b> and I am from Chachoengsao,
            Thailand. I'm a <b>Student</b> and a first year
            university student pursuing <b>BS in Computer Science</b>. <br />
            <br />
            I love to create projects with beautiful designs and put my own
            twists on it, you can check out some of my work in the projects
            section.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
            Apart from coding I love to make Website servers,designs and do
            photography in my spare time.
          </p>
          <a href="งานพอร์ต.pdf" download className="งานพอร์ต-btn">
            <button>
              Download Resume <FaFileDownload></FaFileDownload>
            </button>
          </a>
        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> SKILLSET</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Javascript" />
        <Skills skill="Github" />
        <Skills skill="Git" />
      </div>
    </>
  );
};

export default About;