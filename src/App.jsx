import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className={`container${dark ? ' dark' : ''}`}>
      <button className="dark-toggle" onClick={() => setDark(d => !d)} aria-label="Toggle dark mode">
        {dark ? '☀️' : '🌙'}
      </button>
      <header>
        <div className="badge">
          <span className="badge-dot" />
          AI-Powered Demo
        </div>
        <h1>Hi, Welcome to Frank's Random First Demo</h1>
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

        <div className="dragon-section">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 160" width="200" height="160" aria-label="Dragon">
            {/* Body */}
            <ellipse cx="100" cy="100" rx="45" ry="28" fill="#4f7942" />
            {/* Tail */}
            <path d="M145 105 Q170 115 185 100 Q175 108 165 100 Q178 95 180 85" stroke="#4f7942" strokeWidth="8" fill="none" strokeLinecap="round"/>
            {/* Neck */}
            <path d="M75 82 Q65 65 70 50" stroke="#4f7942" strokeWidth="14" fill="none" strokeLinecap="round"/>
            {/* Head */}
            <ellipse cx="72" cy="44" rx="18" ry="13" fill="#4f7942" />
            {/* Snout */}
            <ellipse cx="58" cy="47" rx="10" ry="7" fill="#3d6235" />
            {/* Eye */}
            <circle cx="67" cy="39" r="4" fill="#f59e0b" />
            <circle cx="67" cy="39" r="2" fill="#1f2937" />
            {/* Nostril */}
            <circle cx="51" cy="46" r="2" fill="#2d4a28" />
            {/* Fire */}
            <path d="M48 48 Q38 42 35 35 Q40 40 42 37 Q37 30 42 25 Q44 32 48 30 Q45 22 52 18 Q50 27 55 28 Q53 20 60 17 Q56 26 58 32 Q63 28 63 35 Q58 35 55 42 Z" fill="#f97316" opacity="0.9"/>
            <path d="M50 46 Q42 40 40 34 Q44 38 45 36 Q42 30 46 26 Q47 32 50 31 Q49 24 54 22 Q52 29 56 30 Q55 38 52 42 Z" fill="#fbbf24" opacity="0.8"/>
            {/* Left wing */}
            <path d="M85 80 Q60 50 45 55 Q55 65 50 72 Q62 62 70 75 Q75 60 80 72 Z" fill="#3d6235" opacity="0.85"/>
            {/* Right wing */}
            <path d="M115 80 Q140 50 155 55 Q145 65 150 72 Q138 62 130 75 Q125 60 120 72 Z" fill="#3d6235" opacity="0.85"/>
            {/* Belly */}
            <ellipse cx="100" cy="108" rx="28" ry="14" fill="#6aaa5e" opacity="0.6"/>
            {/* Legs */}
            <line x1="82" y1="122" x2="75" y2="142" stroke="#3d6235" strokeWidth="7" strokeLinecap="round"/>
            <line x1="118" y1="122" x2="125" y2="142" stroke="#3d6235" strokeWidth="7" strokeLinecap="round"/>
            {/* Feet */}
            <path d="M70 143 Q75 148 80 143" stroke="#2d4a28" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M120 143 Q125 148 130 143" stroke="#2d4a28" strokeWidth="3" fill="none" strokeLinecap="round"/>
            {/* Spines */}
            <path d="M100 72 L97 62 L103 62 Z" fill="#2d4a28"/>
            <path d="M110 74 L108 64 L114 64 Z" fill="#2d4a28"/>
            <path d="M90 74 L88 64 L94 64 Z" fill="#2d4a28"/>
          </svg>
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
