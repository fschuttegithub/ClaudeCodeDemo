import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to the Demo</h1>
        <p className="subtitle">This app is powered by Claude — tag @Claude in Slack to change anything here.</p>
      </header>

      <main>
        <button className="cta-button">Get Started</button>

        <div className="status-section">
          <p className="status-label">Status</p>
          <p className="status-value">Live and deployed via GitHub Actions</p>
        </div>
      </main>
    </div>
  )
}

export default App
