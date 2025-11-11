const projectsData = [
  {
    id: 1,
    title: 'DigiQ',
    tech: 'Built using the MERN stack',
    github: 'https://github.com/Dravingupta/digiQ',
    live: 'https://digi-q-ivory.vercel.app/' ,
  },
  // ...add more projects
];

export default function Projects() {
  const isSingle = projectsData.length === 1;

  return (
    <section id="projects" className="project-container container">
      <div className="division"></div>
      <div className="content-text">
        <h2>Projects</h2>
        <p>Check out some of my personal and paid projects</p>
      </div>

      <article className={isSingle ? "project single" : "project"}>
        {projectsData.map((project) => (
          <div key={project.id} className="card">
            {/* overlay for better text contrast */}

            <div className="project-info">
              <div className="project-bio">
                <h3>{project.title}</h3>
                <p>{project.tech}</p>
              </div>
              <div className="project-link">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href={project.live} target="_blank" rel="noreferrer">
                  <i className="fas fa-globe"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
