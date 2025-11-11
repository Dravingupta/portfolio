import linkedinIcon from '../assets/linkedin-icon.svg';
import githubIcon from '../assets/github-icon.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: linkedinIcon, url: 'https://www.linkedin.com/in/dravingupta', alt: 'Linkedin' },
    { icon: githubIcon, url: 'https://github.com/Dravingupta', alt: 'GitHub' },
  ];

  return (
    <footer id="footer">
      <div className="container">

        <div className="social">
          {socialLinks.map((link, idx) => (
            <a key={idx} href={link.url} target="_blank" rel="noreferrer">
              <img src={link.icon} alt={link.alt} />
            </a>
          ))}
        </div>

        <div className="attribution"></div>
        <p>Copyright &copy; Dravin Gupta {currentYear}, All rights reserved</p>
      </div>
    </footer>
  );
}
