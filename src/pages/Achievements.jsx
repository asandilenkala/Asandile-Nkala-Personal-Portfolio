import React from 'react';

const achievements = [
  {
    name: "Software Engineering Course",
    link: "https://www.hyperiondev.com/portfolio/244218/",
  },
  {
    name: "AWS Cloud Technical Essentials",
    link: "https://www.coursera.org/account/accomplishments/verify/BP28GJGNLR9G",
  },
  {
    name: "Google Cloud Fundamentals: Core Infrastructure",
    link: "https://www.coursera.org/account/accomplishments/verify/N67SJ3FJP0JL",
  },
  {
    name: "Introduction to Networking and Cloud Computing",
    link: "https://www.coursera.org/account/accomplishments/verify/1V77Q7I6IHFW",
  },
  {
    name: "Introduction to Cloud Computing",
    link: "https://www.coursera.org/account/accomplishments/verify/O2HMTA15T02X",
  },
  {
    name: "Write Professional Emails in English",
    link: "https://www.coursera.org/account/accomplishments/verify/9D04ZDVQR0LM",
  },
  {
    name: "Verbal Communications and Presentation Skills",
    link: "https://www.coursera.org/account/accomplishments/verify/BTFG5G8RYUYE",
  },
  {
    name: "Generative AI: Introduction and Applications",
    link: "https://www.coursera.org/account/accomplishments/verify/GT0I0GBTZEY6",
  },
  {
    name: "Active Listening: Enhancing Communication Skills",
    link: "https://www.coursera.org/account/accomplishments/verify/G6N8D5NICDPI",
  },
  {
    name: "Generative AI: Prompt Engineering Basics",
    link: "https://www.coursera.org/account/accomplishments/verify/435ZK9WBNHXO",
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
      <ul className="space-y-4">
        {achievements.map((item, index) => (
          <li
            key={index}
            className="p-4 bg-white shadow-md rounded-md border hover:shadow-lg transition duration-200"
          >
            <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline mt-2 inline-block"
            >
              View Certificate
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Achievements;
