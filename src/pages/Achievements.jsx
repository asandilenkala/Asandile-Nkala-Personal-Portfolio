import React from 'react';

const achievements = [
  {
    name: "Software Engineering Course",
    link: "/HyperionDev Certificate.png",
    isImage: true,
  },
  {
    name: "AWS Cloud Technical Essentials",
    link: "/AWS Cloud Technical Essentials.png",
    isImage: true,
  },
  {
    name: "Google Cloud Fundamentals: Core Infrastructure",
    link: "/Google Cloud Fundamentals- Core Infrastructure.png",
    isImage: true,
  },
  {
    name: "Introduction to Networking and Cloud Computing",
    link: "/Introduction to Networking and Cloud Computing.png",
    isImage: true,
  },
  {
    name: "Introduction to Cloud Computing",
    link: "/Introduction to Cloud Computing.png",
    isImage: true,
  },
  {
    name: "Introduction to Hardware and Operating Systems",
    link: "/Introduction to Hardware and Operating Systems.png",
    isImage: true,
  },
  {
    name: "Introduction to Software, Programming, and Databases",
    link: "/Introduction to Software, Programming, and Databases.png",
    isImage: true,
  },
  {
    name: "Generative AI: Introduction and Applications",
    link: "/Generative AI- Introduction and Applications.png",
  },
  {
    name: "Introduction to Microsoft Azure Cloud Services",
    link: "/Introduction to Microsoft Azure Cloud Services.png",
    isImage: true,
  },
  {
    name: "Generative AI: Prompt Engineering Basics",
    link: "/Generative AI- Prompt Engineering Basics.png",
    isImage: true,
  },
  {
    name: "Alx Aice AI Career Essentials Certificate",
    link: "/73-alx-aice-ai-career-essentials-certificate-asandile-nkala.png",
    isImage: true,
  },
];

function Achievements() {
  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">My Certificates</h2>
      <h3 className="text-gray-600 text-center mb-6">
        Here are some of the certificates I’ve earned through various online platforms. They reflect my continuous learning and development in tech and communication.
      </h3>
      <hr />
      <br />


      <div className="certificates-grid">
        {achievements.map((item, index) => (
          <div className="certificates-card">
            <h3 className="certificates-title">{item.name}</h3>
            
            <div className="certificates-meta">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificates-link"
              >
                <img src={item.link} className='certificate-img'/>
              </a>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
}

export default Achievements;
