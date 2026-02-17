import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import {
  ProjectCard,
  ProjectCardImage,
  ProjectCardContent,
  ProjectTags,
  ProjectTag,
  ProjectTitle,
  ProjectDescription,
  ProjectLinks,
  ProjectLink,
} from "../styles/Projects.styled";

const ProjectCardComponent = ({
  image,
  title,
  description,
  tags = [],
  codeLink,
  liveLink,
}) => {
  return (
    <IconContext.Provider value={{ size: "1.25rem" }}>
      <ProjectCard>
        <ProjectCardImage src={image} alt={title} />
        <ProjectCardContent>
          {tags && tags.length > 0 && (
            <ProjectTags>
              {tags.map((tag) => (
                <ProjectTag key={tag}>{tag}</ProjectTag>
              ))}
            </ProjectTags>
          )}
          <ProjectTitle>{title}</ProjectTitle>
          {description && (
            <ProjectDescription>{description}</ProjectDescription>
          )}
          <ProjectLinks>
            {liveLink && (
              <ProjectLink
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                title="View Live"
                aria-label="View Live Demo"
              >
                <BiLinkExternal />
              </ProjectLink>
            )}
            {codeLink && (
              <ProjectLink
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                title="View Code"
                aria-label="View Source Code on GitHub"
              >
                <FaGithub />
              </ProjectLink>
            )}
          </ProjectLinks>
        </ProjectCardContent>
      </ProjectCard>
    </IconContext.Provider>
  );
};

export default ProjectCardComponent;
