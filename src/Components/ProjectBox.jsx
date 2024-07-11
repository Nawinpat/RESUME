import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    SutcampDesc:
      "ที่ค่ายSut Campนี้ผมได้เข้าร่วมไปชมอาจารย์ใหญ่กับทางคณะทีมของกระผมที่มหาลัยสุรนารีซึ่งจากกิจกรรมนี้กระผมได้เรียนรู้อะไรหลายๆอย่างจากอาจาร์ที่มาให้ความรู้.",
    
    ChulaBlockatonDesc:
      "ค่ายนี้ให้ผมได้ความรู้เกี่ยวกับ Blockchain และได้มีการให้ทำ work shop ต่างๆมากมายซึ่งผมได้รับความรู้อย่างมากหลังจากได้เข้าค่ายตัวนี้",
    
    ColourPaletteDesc:
      "This website helps you generate random colours that you can use as a palette.The project helped me understand Javascript more deeply using advance techniques",
    
    BackpackDesc:
      "This webpageis was made for an ecommerce brand showcasing their backpacks.The project taught me how to use custom cursors and arrange text in a much better way",
    
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />
  
      </div>
    </div>
  );
};
export default ProjectBox;
