// ============================================================
// pages/Login.jsx — Authentication Page (Demo Mode Fixed)
// ============================================================

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const [tab, setTab] = useState('login')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [loginData, setLoginData] = useState({ email: '', password: '' })

  const [signupData, setSignupData] = useState({
    name: '', email: '', password: '', age: '',
    medicalHistory: '', emergencyName: '', emergencyPhone: '',
  })

  // ✅ DEMO LOGIN (BYPASS BACKEND)
  const handleLogin = (e) => {
    e.preventDefault()

    // Store demo user (optional)
    localStorage.setItem("user", JSON.stringify({
      name: "Demo User",
      email: loginData.email
    }))

    // Navigate to dashboard
    navigate("/dashboard")
  }

  // ❌ Disable real signup (optional safe demo)
  const handleSignup = (e) => {
    e.preventDefault()
    alert("Signup disabled in demo mode. Please use login.")
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '2rem',
      background: 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 70%), var(--bg)',
    }}>
      <div style={{ width: '100%', maxWidth: '420px' }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: 56, height: 56,
            background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
            borderRadius: '14px',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '12px',
          }}>
            <svg width="30" height="30" viewBox="0 0 28 28" fill="none">
              <path d="M4 14h4l3-8 4 16 3-10 2 4h4" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <h1>Sentinel<span style={{ color: '#06b6d4' }}>+</span></h1>
          <p style={{ fontSize: '13px', color: '#888' }}>
            AI-Powered Smart Healthcare Monitoring
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          borderRadius: '10px',
          overflow: 'hidden',
          marginBottom: '1rem'
        }}>
          <button onClick={() => setTab('login')}
            style={{ flex: 1, padding: '10px', background: tab==='login'?'#3b82f6':'#222', color:'#fff', border:'none' }}>
            Sign In
          </button>
          <button onClick={() => setTab('signup')}
            style={{ flex: 1, padding: '10px', background: tab==='signup'?'#3b82f6':'#222', color:'#fff', border:'none' }}>
            Create Account
          </button>
        </div>

        {/* Card */}
        <div style={{ padding: '20px', borderRadius: '10px', background: '#111' }}>

          {/* LOGIN */}
          {tab === 'login' && (
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                required
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
              />

              <input
                type="password"
                placeholder="Password"
                required
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
              />

              <button type="submit" style={{
                width: '100%',
                padding: '10px',
                background: '#06b6d4',
                color: '#fff',
                border: 'none'
              }}>
                Access Dashboard
              </button>
            </form>
          )}

          {/* SIGNUP (DEMO) */}
          {tab === 'signup' && (
            <form onSubmit={handleSignup}>
              <input placeholder="Name" style={{ width:'100%', padding:'10px', marginBottom:'10px' }} />
              <input placeholder="Email" style={{ width:'100%', padding:'10px', marginBottom:'10px' }} />
              <input placeholder="Password" style={{ width:'100%', padding:'10px', marginBottom:'10px' }} />

              <button type="submit" style={{
                width: '100%',
                padding: '10px',
                background: '#06b6d4',
                color: '#fff',
                border: 'none'
              }}>
                Create Account
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  )
}