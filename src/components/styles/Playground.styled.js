import styled from "styled-components";

export const StyledPlayground = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor.light};
  color: ${({ theme }) => theme.color.darkGray};
`;

export const PlaygroundContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const PlaygroundCard = styled.article`
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.backgroundColor.orange};
    box-shadow: 0 8px 24px rgba(252, 41, 4, 0.15);
  }
`;

export const PlaygroundCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${PlaygroundCard}:hover & {
    transform: scale(1.05);
  }
`;

export const PlaygroundCardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const PlaygroundTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const PlaygroundTag = styled.span`
  font-size: 0.75rem;
  padding: 0.4rem 0.8rem;
  background: rgba(252, 41, 4, 0.1);
  border: 1px solid rgba(252, 41, 4, 0.3);
  border-radius: 20px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
`;

export const PlaygroundTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.3;
`;

export const PlaygroundDescription = styled.p`
  font-size: 0.9rem;
  color: #aaa;
  line-height: 1.5;
  flex: 1;
`;

export const PlaygroundLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

export const PlaygroundLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #333;
  border-radius: 6px;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.backgroundColor.orange};
    color: ${({ theme }) => theme.backgroundColor.orange};
    background: rgba(252, 41, 4, 0.1);
  }
`;


