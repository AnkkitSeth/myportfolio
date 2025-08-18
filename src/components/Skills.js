// src/components/Skills.js

import React from "react";
import styled, { keyframes } from "styled-components";
import leetcodeIcon from '../assets/leetcode.png';
import gfgIcon from '../assets/gfg.png';
import codechefIcon from '../assets/codechef.png';


// Skill Logos
import c from "../assets/c.svg";
import java from "../assets/java.svg";
import python from "../assets/python.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import springboot from "../assets/springboot.svg";
import mysql from "../assets/mysql.svg";
import react from "../assets/react.svg";
import nodejs from "../assets/nodejs.svg";
import mongodb from "../assets/mongodb.svg";

const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const Wrapper = styled.section`
  font-family: 'PT Sans Narrow', sans-serif;
  text-align: center;
  background-color: rgba(92, 92, 82, 0.21);
  padding: 60px 20px;
  overflow: hidden;
  border-radius: 120px;

`;

const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleBox = styled.div`
  width: 80%;
  padding: 40px 0 20px 0;

  @media (max-width: 576px) {
    width: 95%;
    padding: 30px 0 20px 0;
  }
`;

const Title = styled.h3`
  font-size: 50px;
  background: linear-gradient(90deg, #000, #555);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: 576px) {
    font-size: 32px;
  }
`;

const LineContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 40px 0;
`;

const Line = styled.div`
  width: 80%;
  height: 0.5px;
  background: rgba(136, 138, 115, 0.56);
`;

const TiltedLabel = styled.div`
  position: absolute;
  background: white;
  padding: 15px 50px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 50px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.9);
  transform: rotate(-15deg);

  @media (max-width: 576px) {
    padding: 10px 30px;
    font-size: 14px;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  padding: 30px 20px 60px 20px;
  width: 100%;
  max-width: 1200px;
`;

const SkillCard = styled.div`
  background-color: rgba(249, 249, 249, 0.56);
  border-radius: 30px;
  padding: 25px 20px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  text-align: center;
  font-size: 19px;
  font-weight: 400;

  h3 {
    font-weight: 500;
    font-size: 22px;
    margin-bottom: 15px;
  }

  @media (max-width: 576px) {
    font-size: 16px;
    padding: 20px 16px;
  }
`;

const IconRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;

const SkillIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 30px;
  background: white;
  border-radius: 40px;
  align-items:center;
  
  
`;

const MarqueeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  height: 190px;
  
  animation: ${marquee} 30s linear infinite;

  @media (max-width: 576px) {
    height: 80px;
    animation: ${marquee} 8s linear infinite;
  }
`;

const BrandImg = styled.img`
  height: 100px;
  @media (max-width: 576px) {
    height: 50px;
  }
`;

const Skills = () => {
  const logos = [c, java, python, html, css, javascript,springboot, mysql, react, nodejs, mongodb];

  return (
    <Wrapper>
      <Container>
        <TitleBox>
          <Title>Tech Toolbox</Title>
        </TitleBox>

        <LineContainer>
          <Line />
          <TiltedLabel>SKILLS</TiltedLabel>
        </LineContainer>

        <CardGrid>
          <SkillCard>
            <h3>Frontend</h3>
            <IconRow>
              <SkillIcon src={react} alt="React" />
              <SkillIcon src={html} alt="HTML" />
              <SkillIcon src={css} alt="CSS" />
              <SkillIcon src={javascript} alt="JavaScript" />
            </IconRow>
          </SkillCard>

          <SkillCard>
            <h3>Backend</h3>
            <IconRow>
              <SkillIcon src={nodejs} alt="Node.js" />
              <SkillIcon src={springboot} alt="SpringBoot" />
              <SkillIcon src={mysql} alt="MySQL" />
              <SkillIcon src={mongodb} alt="MongoDB" />
            </IconRow>
          </SkillCard>

          <SkillCard>
            <h3>Languages</h3>
            <IconRow>
              <SkillIcon src={c} alt="C" />
              <SkillIcon src={java} alt="Java" />
              <SkillIcon src={python} alt="Python" />
            </IconRow>
          </SkillCard>

        <SkillCard>
        <h3>Problem Solving</h3>
        <IconRow>
            <a href="https://leetcode.com/u/Ankkit_Seth/" target="_blank" rel="noopener noreferrer">
            <SkillIcon src={leetcodeIcon} alt="LeetCode" />
            </a>
            <a href="https://www.geeksforgeeks.org/user/ankkitseth/" target="_blank" rel="noopener noreferrer">
            <SkillIcon src={gfgIcon} alt="GeeksforGeeks" />
            </a>
            <a href="https://www.codechef.com/users/drift_unity_63" target="_blank" rel="noopener noreferrer">
            <SkillIcon src={codechefIcon} alt="CodeChef" />
            </a>
        </IconRow>
        </SkillCard>

        </CardGrid>

        <MarqueeContainer>
          <MarqueeWrapper>
            {logos.map((logo, index) => (
              <BrandImg key={index} src={logo} alt={`logo-${index}`} />
            ))}
             {logos.map((logo, index) => (
              <BrandImg key={index} src={logo} alt={`logo-${index}`} />
            ))}
          </MarqueeWrapper>
        </MarqueeContainer>
      </Container>
    </Wrapper>
  );
};

export default Skills;
