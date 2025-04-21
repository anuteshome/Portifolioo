import React from "react";
import "./skill.css";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaPhp, FaCss3Alt, FaGithub, FaGit, FaLinux } from "react-icons/fa";
import { SiExpress, SiExpo, SiIonic } from "react-icons/si";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5"; // Corrected import path
import { DiJqueryLogo } from "react-icons/di"; // Added import
import { TbBrandReactNative } from "react-icons/tb"; // Added import
import { BiLogoPostgresql } from "react-icons/bi"; // Added import
import { FaLaravel } from "react-icons/fa"; // Already imported

const Card = () => {
  return (
    <div className="card">
      <h1 className="skill_title">---My Skill Set---</h1>
      <div className="icons-container">
        {/* First set of icons */}
        <FaReact className="icon" />
        <FaNodeJs className="icon" />
        <SiExpress className="icon" />
        <FaDatabase className="icon" />
        <FaPhp className="icon" />
        <FaCss3Alt className="icon" />
        <FaGithub className="icon" />
        <FaGit className="icon" />
        <FaLinux className="icon" />

        {/* Duplicate set of icons for seamless looping */}
        <FaPython className="icon" />
        <IoLogoFirebase className="icon" />
        <IoLogoJavascript className="icon" />
        <SiIonic className="icon" />
        <BiLogoPostgresql className="icon" />
        <DiJqueryLogo className="icon" />
        <FaLaravel className="icon" />
        <TbBrandReactNative className="icon" />
        <SiExpo className="icon" />
      </div>
    </div>
  );
};

export default Card;