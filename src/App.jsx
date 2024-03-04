import "./App.css";

function App() {
  const name = "Keerthi";
  const description = "";
  const profilePhotoUrl = "";
  return (
    <main className="main-container">
      <header className="header-container">
        <nav className="nav-container">
          <a href="#about" id="about">
            About
          </a>
          <a href="#experience" id="experience">
            Experience
          </a>
          <a href="#education" id="education">
            Education
          </a>
          <a href="#projects" id="projects">
            Projects
          </a>
          <a href="#achievements" id="achievements">
            Achievements
          </a>
          <a href="#contact" id="contact">
            Contact
          </a>
        </nav>
      </header>
      <main className="body-container">
        <div className="">
          <div>
            <p>Hi there! Im {name}</p>
            <p>{description}</p>
            <div className="body-container-buttons">
              <button>Resume</button>
              <button>linkedin</button>
              <button>github</button>
              <button>Instagram</button>
            </div>
          </div>
          <img src={profilePhotoUrl} alt="The users profile photo"></img>
        </div>
      </main>
    </main>
  );
}

export default App;
