import { useState } from 'react'

const PASS_HASH = 'eecf49d5'

function simpleHash(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash |= 0
  }
  return (hash >>> 0).toString(16)
}

export default function PasswordGate({ children }) {
  const [authenticated, setAuthenticated] = useState(
    () => sessionStorage.getItem('crm-auth') === 'true'
  )
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [shaking, setShaking] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (simpleHash(password) === PASS_HASH) {
      sessionStorage.setItem('crm-auth', 'true')
      setAuthenticated(true)
    } else {
      setError(true)
      setShaking(true)
      setTimeout(() => setShaking(false), 500)
    }
  }

  if (authenticated) return children

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0A0F2C',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '380px',
        padding: '0 24px',
        animation: shaking ? 'shake 0.4s ease' : 'fadeIn 0.5s ease',
      }}>
        {/* Brand */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.6rem',
            fontWeight: 700,
            color: 'white',
            letterSpacing: '0.1em',
          }}>SAMSUNG</div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.7rem',
            fontWeight: 600,
            color: '#00B2FF',
            letterSpacing: '0.15em',
            marginTop: '4px',
          }}>CRM OS</div>
        </div>

        {/* Login Card */}
        <form onSubmit={handleSubmit} style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '32px 28px',
          backdropFilter: 'blur(12px)',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            fontWeight: 600,
            color: 'white',
            marginBottom: '6px',
          }}>Welcome</h2>
          <p style={{
            fontSize: '0.82rem',
            color: 'rgba(255,255,255,0.45)',
            marginBottom: '24px',
          }}>Enter your password to access the platform.</p>

          <div style={{ marginBottom: '16px' }}>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false) }}
              placeholder="Password"
              autoFocus
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: error ? '1.5px solid #ff3b5c' : '1.5px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.06)',
                color: 'white',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'border-color 0.15s',
              }}
              onFocus={(e) => { if (!error) e.target.style.borderColor = '#00B2FF' }}
              onBlur={(e) => { if (!error) e.target.style.borderColor = 'rgba(255,255,255,0.12)' }}
            />
            {error && (
              <p style={{ fontSize: '0.78rem', color: '#ff3b5c', marginTop: '8px' }}>
                Incorrect password. Please try again.
              </p>
            )}
          </div>

          <button type="submit" style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            background: '#1428A0',
            color: 'white',
            fontSize: '0.88rem',
            fontWeight: 600,
            fontFamily: 'var(--font-body)',
            border: 'none',
            cursor: 'pointer',
            transition: 'background 0.15s',
          }}
            onMouseEnter={(e) => e.target.style.background = '#1e3abf'}
            onMouseLeave={(e) => e.target.style.background = '#1428A0'}
          >
            Sign In
          </button>
        </form>

        <p style={{
          textAlign: 'center',
          fontSize: '0.7rem',
          color: 'rgba(255,255,255,0.2)',
          marginTop: '24px',
        }}>Samsung CRM OS — Internal Use Only</p>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0) }
          20% { transform: translateX(-8px) }
          40% { transform: translateX(8px) }
          60% { transform: translateX(-6px) }
          80% { transform: translateX(6px) }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px) }
          to { opacity: 1; transform: translateY(0) }
        }
      `}</style>
    </div>
  )
}
