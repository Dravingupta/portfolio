import profileImg from '../assets/image.png';

export default function Hero() {
  return (
    <header id="hero">
      <section className="header-container">
        <img className="profile-image" src={profileImg} alt="Profile" />
        <h1>Hi I'm Dravin Gupta</h1>

        <div className="content-text">
          <h2>I build complete digital experiences</h2>
            <h2>using the MERN stack.</h2>

          <p>
              A Full-Stack Web Developer passionate about creating scalable backend systems, intuitive UI/UX, and modern web applications.
            </p>
        </div>
        <a
            href="https://www.linkedin.com/in/dravingupta"
            className="btn btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            Connect With Me
          </a>
         
      </section>
    </header>
  );
}
