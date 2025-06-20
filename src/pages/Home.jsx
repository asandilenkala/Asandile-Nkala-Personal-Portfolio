import React from 'react';
import profile from '../folder/Asandile.jpg';
import linkedinIcon from '../folder/linkedin.png';
import githubIcon from '../folder/github.png';

const Home = () => {
  return (
    <div className="home-container">
  {/* Left Side: Title, Bio, Socials */}
  <div className="home-left">
  <h1 className="heading-h1">Welcome to My Portfolio</h1>
    <h1 className="title-h1">
      Hi, I'm Asandile Nkala.<br />I'm passionate about Technology and Innovation.
    </h1>

    <p>
      Hello! I'm Asandile Nkala, a versatile tech enthusiast with a strong interest in Software Engineering, 
      Cloud Computing, Network Engineering, Cybersecurity, and Hardware Systems. 
      I enjoy solving complex problems and constantly expanding my knowledge across various
      domains of technology. Whether it's building efficient software, securing digital 
      infrastructure, or exploring the complexities of hardware, I'm driven by curiosity 
      and a commitment to creating impactful solutions.
    </p>

    <div className="contact-container">
      <ul className="contact-list">
        <li>
          <a href="https://www.linkedin.com/in/asandile-nkala-37b635256/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" height="30px" width="30px" />
          </a>
        </li>
        <li>
          <a href="https://github.com/asandilenkala" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" height="30px" width="30px" />
          </a>
        </li>
      </ul>

      <a
    href="/Asandile Nkala CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      textDecoration: 'none',
      color: '#ff0000',
      fontWeight: '500',
      marginRight: '10px',
    }}
  >
    View My CV
  </a>

    </div>
  </div>

  {/* Right Side: Profile Picture */}
  <div className="home-right">
    <img src={profile} alt="Profile" className="profile_picture" />
  </div>
</div>

  );
};

export default Home;
