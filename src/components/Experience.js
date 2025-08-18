// src/components/Experience.js

import React from "react";
import styled from "styled-components";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";

const Wrapper = styled.section`
  font-family: 'PT Sans Narrow', sans-serif;
  background-color: rgba(92, 92, 82, 0.14);
  padding: 60px 20px;
  border-radius: 120px 120px 0 0;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionBox = styled.div`
  width: 80%;
  padding: 40px 0 20px 0;
  text-align: center;

  @media (max-width: 576px) {
    width: 95%;
    padding: 30px 0 20px 0;
  }
`;

const SectionTitle = styled.h3`
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
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 576px) {
    padding: 10px 30px;
    font-size: 14px;
  }
`;

const Timeline = styled.div`
  width: 90%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 20px 60px 20px;
`;

const Card = styled.div`
  background-color: rgba(249, 249, 249, 0.65);
  border-radius: 30px;
  padding: 25px 30px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  text-align: left;
  font-size: 19px;
  font-weight: 400;

  h4 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  h5 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 6px;
  }

  p {
    margin-top: 10px;
    line-height: 1.6;
    color: #333;
  }

  @media (max-width: 576px) {
    font-size: 16px;
    padding: 20px;
  }
`;

const Experience = () => {
  return (
    <Wrapper>
      <Container>

        {/* Education Section */}
        <SectionBox>
          <SectionTitle>Academic Journey</SectionTitle>
        </SectionBox>

        <LineContainer>
          <Line />
          <TiltedLabel><FiBookOpen /> EDUCATION</TiltedLabel>
        </LineContainer>

        <Timeline>
          <Card>
            <h4>Master of Computer Applications (MCA)</h4>
            <h5>Birla Institute of Technology, Mesra • 2024 – 2026</h5>
            <p>
             "Pursuing MCA with a strong foundation in core computer science subjects including programming, data structures, databases, software engineering, and web development."<br />
              <strong>CGPA: 8.42</strong>
            </p>
          </Card>

          <Card>
            <h4>B.Sc. in Computer Application & Cyber Security</h4>
            <h5>Jharkhand Raksha Shakti University • 2021 – 2024</h5>
            <p>
              Graduated with a specialization in Cyber Security and Application Development.<br />
              <strong>CGPA: 9.38</strong>
            </p>
          </Card>
        </Timeline>

        {/* Experience Section */}
        <SectionBox>
          <SectionTitle>Professional Journey</SectionTitle>
        </SectionBox>

        <LineContainer>
          <Line />
          <TiltedLabel><FiBriefcase /> EXPERIENCE</TiltedLabel>
        </LineContainer>

        <Timeline>
          <Card>
            <h4>Intern - React Developer</h4>
            <h5>Alpha Paradox • May 2025 – July 2025</h5>
            <p>
              Contributed to key frontend projects using React, Styled Components, and modern UI libraries, focusing on clean, responsive, and accessible user interfaces. Collaborated closely with design and backend teams to deliver seamless user experiences.
            </p>
          </Card>

          

          <Card>
            <h4>Intern – Web Development</h4>
            <h5>YHills Edutech • Aug 2023 - Sep 2023</h5>
            <p>
              Successfully completed a project-based internship focused on full-stack web development. Gained hands-on experience with React, Node.js, and MongoDB through practical assignments and project submissions.
            </p>
          </Card>

          <Card>
            <h4>Intern – Web Development</h4>
            <h5>Eimple Labs, Bangalore • Jun 2023 - Jul 2023</h5>
            <p>
              Completed a beginner-level internship focused on the fundamentals of web development. Gained hands-on experience by building small projects using HTML, CSS, and JavaScript, enhancing both technical skills and practical understanding of frontend development.
            </p>
        </Card>


        </Timeline>

      </Container>
    </Wrapper>
  );
};

export default Experience;
