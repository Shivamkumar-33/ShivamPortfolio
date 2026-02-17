import React from "react";
import {
  TechnologiesContainer,
  TechnologiesHeader,
} from "../styles/Technologies.styled";
import LogoLoop from "./LogoLoop";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiNpm,
  SiLaravel,
  SiGit,
  SiGithub,
  SiFigma,
  SiAdobexd,
  SiVisualstudiocode,
} from "react-icons/si";

const Technologies = () => {
  const techLogos = [
    { node: <SiHtml5 />, title: "HTML5" },
    { node: <SiCss3 />, title: "CSS3" },
    { node: <SiJavascript />, title: "JavaScript ES6+" },
    { node: <SiReact />, title: "React JS" },
    { node: <SiTailwindcss />, title: "Tailwind CSS" },
    { node: <SiBootstrap />, title: "Bootstrap" },
    { node: <SiSass />, title: "SASS" },
    { node: <SiNpm />, title: "NPM" },
    { node: <SiLaravel />, title: "PHP Laravel" },
    { node: <SiGit />, title: "Git" },
    { node: <SiGithub />, title: "GitHub" },
    { node: <SiFigma />, title: "Figma" },
    { node: <SiAdobexd />, title: "Adobe XD" },
    { node: <SiVisualstudiocode />, title: "Visual Studio Code" },
  ];

  return (
    <TechnologiesContainer>
      <TechnologiesHeader>Technologies I am familiar with</TechnologiesHeader>

      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={40}
        pauseOnHover={true}
        scaleOnHover={true}
        fadeOut={true}
        fadeOutColor="#0d0e0e"
        ariaLabel="Technologies"
      />
    </TechnologiesContainer>
  );
};

export default Technologies;
