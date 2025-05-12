import React from 'react';
import profile from '../folder/Asandile.jpeg';
import instagramIcon from '../folder/instagram.png';
import linkedinIcon from '../folder/linkedin.png';
import githubIcon from '../folder/github.png';

const Home = () => {
  return (
    <div className="home-container">
  {/* Left Side: Title, Bio, Socials */}
  <div className="home-left">
  <h1 className="heading-h1">Welcome to My Portfolio</h1>
    <h1 className="title-h1">
      Hi, I'm Asandile Nkala.<br />I'm a Software Developer
    </h1>

    <p>
      Hello! I'm Asandile Nkala, a passionate Software Developer specializing in Software Engineering.
      With a keen interest in solving complex problems and a dedication to continuous learning,
      I thrive in creating efficient and innovative software solutions...
    </p>

    <div className="contact-container">
      <ul className="contact-list">
        <li>
          <a href="https://www.instagram.com/asandile_nkala/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" height="30px" width="30px" />
          </a>
        </li>
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
      color: '#007bff',
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
