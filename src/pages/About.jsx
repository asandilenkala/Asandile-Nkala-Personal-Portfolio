import React, { useState } from 'react';

function About() {
  const [showUCT, setShowUCT] = useState(false);
  const [showHyperionDev, setShowHyperionDev] = useState(false);
  const [showExperience1, setShowExperience1] = useState(false);
  const [showExperience2, setShowExperience2] = useState(false);

  return (
    <div className="container mt-5">
      {/* Education Section */}
      <h2>Education:</h2>
      <ul className="education-list">
        {/* University of Cape Town */}
        <li className="education-item">
          <div
            className="about_list_items"
            onClick={() => setShowUCT(!showUCT)}
            style={{ cursor: 'pointer' }}
          >
            <strong>University of Cape Town</strong> [2019–2023]:
            <br />
            B.Sc in Computer Sciences & Computer Engineering
          </div>
          {showUCT && (
            <div className="full-info">
              <h3>  Course Majors</h3>
              <ul>
                <li><strong>Computer Science 1010 (CSC1010H):</strong> Intro to Python, problem-solving, algorithms, loops, recursion, file handling.</li>
                <li><strong>Computer Science 1011 (CSC1011H):</strong> Advanced Python, OOP in Java, GUIs, data structures.</li>
                <li><strong>Computer Science 2001 (CSC2001F):</strong> Recursion, AVL trees, graphs, databases. Java & SQL in UNIX.</li>
                <li><strong>Computer Science 2002 (CSC2002S) [Incomplete]:</strong> Mobile app development, architecture, Java & Assembly.</li>
                <li><strong>Programming Assessment (CSC2004Z):</strong> Practical mastery assessment in programming.</li>
                <li><strong>Embedded Systems I (EEE2050F) [Incomplete]:</strong> Logic gates, microcontrollers in C.</li>
                <li><strong>Embedded Systems II [Audited/Incomplete]:</strong> RTOS, sensors, C on embedded platforms.</li>
                <li><strong>EEE2049W:</strong> Circuits, transformers, motors, practicals.</li>
              </ul>
            </div>
          )}
        </li>

        {/* HyperionDev */}
        <li className="education-item">
          <div
            className="about_list_items"
            onClick={() => setShowHyperionDev(!showHyperionDev)}
            style={{ cursor: 'pointer' }}
          >
            <strong>HyperionDev</strong> [2024]:
            <br />
            Software Engineering Course
          </div>
          {showHyperionDev && (
            <div className="full-info">
              <ul>
                <li><strong>Software Engineering Bootcamp (2024):</strong> Full-stack dev with Python, Flask, Django, GitHub, CV & interview prep, capstone projects.</li>
              </ul>
            </div>
          )}
        </li>
      </ul>

      {/* Experience Section */}
      <h2 className="experience">Experience:</h2>
      <ul className="experience-list">
        <li className="experience-item">
          <div
            className="about_list_items"
            onClick={() => setShowExperience1(!showExperience1)}
            style={{ cursor: 'pointer' }}
          >
            <strong>Tutor at the University of Cape Town</strong> [2023]
          </div>
          {showExperience1 && (
            <div className="full-info">
              <ul>
                <li><strong>INF1002F/S:</strong> Excel and Python skills for IS foundations.</li>
                <li>Topics: e-business, BI, decision-making, security & privacy, emerging tech.</li>
              </ul>
            </div>
          )}
          <br />
          <br />

          <div
            className="about_list_items"
            onClick={() => setShowExperience2(!showExperience2)}
            style={{ cursor: 'pointer' }}
          >
            <strong>Cloud Associate at CAPACITI</strong> [Feb 2025 - Present]
          </div>
          {showExperience2 && (
            <div className="full-info">
              <ul>
                <li>Part of <strong>CAPACITI IT Learnership Programme</strong> in Cape Town.</li>
                <li>Training in cloud infrastructure, deployment, certifications, industry projects.</li>
                <li>Focus on real-world skills and personal growth in a digital economy.</li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default About;
