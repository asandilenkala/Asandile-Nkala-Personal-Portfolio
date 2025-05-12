import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/asandilenkala/repos')
      .then((response) => response.json())
      .then((data) => {
        const sortedRepos = data.sort((a, b) =>
          new Date(b.updated_at) - new Date(a.updated_at)
        );
        setRepos(sortedRepos);
      })
      .catch((error) => console.error('Error fetching GitHub repos:', error));
  }, []);

  return (
    <div className="projects-container">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {repos.map((repo) => (
          <div className="project-card" key={repo.id}>
            <h3 className="project-title">{repo.name}</h3>
            <p className="project-description">
              {repo.description || 'No description provided.'}
            </p>
            <div className="project-meta">
              <span className="project-language">{repo.language}</span>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
