import React from "react";
import styled from "styled-components";
import { RiMotorbikeFill } from "react-icons/ri";
import { TiCloudStorageOutline } from "react-icons/ti";
import { IoRocket } from "react-icons/io5";
import { MdGroups2 } from "react-icons/md";
import { FaSackDollar, FaCartShopping } from "react-icons/fa6";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import Bike from '../assets/Bike_img.jpg';
import Emp from '../assets/Employee.jpg';
import Journal from '../assets/Journal_img.jpg';
import RiseHub from '../assets/RiseHub_img.webp';
import Earn from '../assets/Earn_img.webp';
import cloudnest from '../assets/CloudNest.jpg';

const Wrapper = styled.section`
  font-family: 'PT Sans Narrow', sans-serif;
  text-align: center;
`;

const Container = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
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

const SectionTitle = styled.h4`
  font-size: 28px;
  font-weight: 600;
  margin: 40px 0 20px 0;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 24px;
    margin: 30px 0 15px 0;
  }
`;

const CardsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 35px;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 576px) {
    gap: 25px;
  }
`;

const Card = styled.div`
  width: 280px;
  padding: 20px 15px;
  text-align: left;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 100;
  border: 2px solid black;
  border-radius: 30px;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 0;
    border-radius: 30px;
  }

  * {
    position: relative;
    z-index: 1;
  }

  h3 {
    font-weight: 500;
  }

  small {
    font-size: 12px;
    margin-top: 10px;
    color: #eee;
  }

  @media (max-width: 576px) {
    width: 80%;
    font-size: 16px;
    padding: 15px 12px;
  }
`;

const Icon = styled.div`
  font-size: 40px;
  margin-bottom: 10px;

  @media (max-width: 576px) {
    font-size: 32px;
  }
`;

const ButtonsBox = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;
`;

const ButtonGithub = styled.a`
  padding: 8px 15px;
  background-color: white;
  border: 2px solid black;
  color: black;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const ButtonLiveDemo = styled.a`
  padding: 8px 15px;
  background-color: black;
  border: 2px solid black;
  color: white;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export default function Projects() {
  return (
    <Wrapper>
      <Container>
        <TitleBox>
          <Title>
            Turning ideas into impactful solutions <br /> through code, creativity, and collaboration.
          </Title>
        </TitleBox>

        <LineContainer>
          <Line />
          <TiltedLabel>PROJECTS</TiltedLabel>
        </LineContainer>

        {/* Full Stack Projects */}
        <SectionTitle>Full Stack Projects</SectionTitle>
        <CardsRow>
          <Card bg={Bike}>
            <Icon><RiMotorbikeFill /></Icon>
            <h3>BitGears</h3>
            <p>BitGears is a bike rental platform with secure login, real-time booking, and role-based dashboards for students and owners.</p>
            <small>Tech: React, Express.js, Node.js, MongoDB, JWT</small>
            <ButtonsBox>
              <ButtonGithub href="https://github.com/AnkkitSeth/bitgears" target="_blank">GitHub</ButtonGithub>
              <ButtonLiveDemo href="https://bitgears.onrender.com/" target="_blank">Live Demo</ButtonLiveDemo>
            </ButtonsBox>
          </Card>

          <Card bg={cloudnest}>
            <Icon><TiCloudStorageOutline /></Icon>
            <h3>CloudNest</h3>
            <p>Secure cloud storage platform where users can upload and access files anytime.</p>
            <small>Tech: Node.js, Express.js, MongoDB, EJS, Cloudinary</small>
            <ButtonsBox>
              <ButtonGithub href="https://github.com/AnkkitSeth/cloudnest" target="_blank">GitHub</ButtonGithub>
              <ButtonLiveDemo href="https://cloudnest-xdc5.onrender.com" target="_blank">Live Demo</ButtonLiveDemo>
            </ButtonsBox>
          </Card>
        </CardsRow>

        {/* Backend Projects */}
        <SectionTitle>Backend Projects</SectionTitle>
        <CardsRow>
          <Card bg={Journal}>
            <Icon><BsFillJournalBookmarkFill /></Icon>
            <h3>Journal App</h3>
            <p>A Spring Boot + MongoDB REST API that lets users manage personal journals with authentication and CRUD operations.</p>
            <small>Tech: Spring Boot, MongoDB, REST API</small>
            <ButtonsBox>
              <ButtonGithub href="https://github.com/AnkkitSeth/journalApp" target="_blank">GitHub</ButtonGithub>
            </ButtonsBox>
          </Card>
        </CardsRow>

        {/* Front End Projects */}
        <SectionTitle>Front End Projects</SectionTitle>
        <CardsRow>
          <Card bg={RiseHub}>
            <Icon><IoRocket /></Icon>
            <h3>RiseHub</h3>
            <p>Connects startups, investors, and innovators to collaborate, grow, and succeed.</p>
            <small>Tech: React, Styled-Components, Owl Carousel</small>
            <ButtonsBox>
              <ButtonGithub href="https://github.com/AnkkitSeth/risehub-frontend" target="_blank">GitHub</ButtonGithub>
              <ButtonLiveDemo href="https://ankkitseth.github.io/risehub-frontend/" target="_blank">Live Demo</ButtonLiveDemo>
            </ButtonsBox>
          </Card>

          <Card bg={Earn}>
            <Icon><FaSackDollar /></Icon>
            <h3>Earn Management</h3>
            <p>Clean landing page explaining earned value management for project control.</p>
            <small>Tech: HTML, CSS, React</small>
            <ButtonsBox>
              <ButtonGithub href="https://github.com/AnkkitSeth/earnmanagement" target="_blank">GitHub</ButtonGithub>
              <ButtonLiveDemo href="https://ankkitseth.github.io/earnmanagement/" target="_blank">Live Demo</ButtonLiveDemo>
            </ButtonsBox>
          </Card>
        </CardsRow>

        {/* Core Programming & OOP Projects */}
        <SectionTitle>Core Programming & OOP Projects</SectionTitle>
        <CardsRow>
          <Card bg={Emp}>
            <Icon><MdGroups2 /></Icon>
            <h3>Employee Payroll System</h3>
            <p>A Java console-based application built to apply OOP concepts like inheritance, encapsulation, and abstraction for employee data and salary computation.</p>
            <small>Tech: Java, OOP, Console I/O</small>
            <ButtonsBox>
              <ButtonGithub href="https://github.com/AnkkitSeth/employee-payroll-system" target="_blank">GitHub</ButtonGithub>
            </ButtonsBox>
          </Card>
        </CardsRow>
      </Container>
    </Wrapper>
  );
}
