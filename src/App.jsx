import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <div className="badge">
          <span className="badge-dot" />
          AI-Powered Demo
        </div>
        <h1>Welcome to the Demo</h1>
        <p className="subtitle">This app is powered by Claude — tag @Claude in Slack to change anything here.</p>
      </header>

      <main>
        <div className="button-row">
          <button className="cta-button">Get Started</button>
          <button className="secondary-button">Learn More</button>
        </div>

        <div className="cards">
          <div className="card">
            <div className="card-icon">⚡</div>
            <div className="card-title">Fast Deploys</div>
            <div className="card-desc">Changes go live in under 60 seconds via GitHub Actions.</div>
          </div>
          <div className="card">
            <div className="card-icon">🤖</div>
            <div className="card-title">AI Driven</div>
            <div className="card-desc">Just tag @Claude in Slack with what you want changed.</div>
          </div>
          <div className="card">
            <div className="card-icon">🎨</div>
            <div className="card-title">Fully Editable</div>
            <div className="card-desc">Colors, text, layout — everything is a Slack message away.</div>
          </div>
        </div>

        <div className="status-section">
          <div className="status-left">
            <span className="status-indicator" />
            <span className="status-label">Deployed</span>
          </div>
          <span className="status-value">Live via GitHub Actions</span>
        </div>
      </main>
    </div>
  )
}

export default App
