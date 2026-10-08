
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">CI Dashboard</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#pipeline">Pipeline</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <span className="badge">● CI Pipeline Active</span>

          <h1>
            Build. Test.
            <br />
            <span>Deploy.</span>
          </h1>

          <p>
            A simple React frontend for demonstrating
            Continuous Integration and deployment.
          </p>

          <div className="hero-buttons">
            <button onClick={() => setCount(count + 1)}>
              Test Button ({count})
            </button>

            <a href="#pipeline" className="outline-btn">
              View Pipeline
            </a>
          </div>
        </div>
      </section>

      <section className="pipeline" id="pipeline">
        <h2>CI Pipeline</h2>

        <p className="section-description">
          Automated steps executed whenever you push your code.
        </p>

        <div className="pipeline-grid">
          <div className="pipeline-card">
            <div className="icon">📦</div>
            <h3>Install</h3>
            <p>Install project dependencies.</p>
            <span className="status">✓ Completed</span>
          </div>

          <div className="pipeline-card">
            <div className="icon">🧪</div>
            <h3>Test</h3>
            <p>Run automated application tests.</p>
            <span className="status">✓ Completed</span>
          </div>

          <div className="pipeline-card">
            <div className="icon">🔨</div>
            <h3>Build</h3>
            <p>Create the production build.</p>
            <span className="status">✓ Completed</span>
          </div>

          <div className="pipeline-card">
            <div className="icon">🚀</div>
            <h3>Deploy</h3>
            <p>Deploy the application automatically.</p>
            <span className="status">✓ Ready</span>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <span className="small-title">ABOUT</span>

        <h2>React + CI/CD</h2>

        <p>
          This React project can be connected to GitHub Actions,
          GitLab CI, Jenkins, or another CI/CD platform.
        </p>
      </section>

      <footer>
        <p>CI Dashboard • React Demo</p>
      </footer>
    </div>
  );
}

export default App;