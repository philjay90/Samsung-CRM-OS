import { useState, useEffect, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const STEPS = [
  {
    route: '/rewards-epp',
    title: 'Rewards & EPP Hub',
    stepLabel: 'Where the program is losing people',
    body: `Samsung has two high-value audiences: Rewards members and EPP participants. But they're managed separately and both have dropout problems. This hub brings them together. It shows you where members are falling off, which EPP visitors hit a dead end at the eligibility wall, and what offers are working versus which ones are being ignored. The research question here is: where is the program losing people, and why?`,
    highlightSelector: '.page-container',
  },
  {
    route: '/customer-intelligence',
    title: 'Customer Intelligence Layer',
    stepLabel: 'Are SmartThings users more valuable?',
    body: `SmartThings already gives Samsung a signal into how customers use their products at home, but that data lives outside the loyalty CRM. This layer pulls it in. We're trying to answer a simple but important question: are SmartThings users more valuable customers? If yes, that changes how we build the entire loyalty strategy. This is also where we stitch anonymous site visitors to known profiles, turning invisible traffic into addressable audiences.`,
    highlightSelector: '.page-container',
  },
  {
    route: '/rewards-epp',
    title: 'Offer Prioritization Matrix',
    stepLabel: 'Why people aren\'t making the jump',
    body: `There's a dead zone in Samsung's tier structure: a big gap between the top free tier and the paid VIP membership, with nothing in between to pull people forward. This module helps us diagnose why people aren't making that jump. Is it awareness? Does the VIP value proposition not land? Is it just the wrong offer at the wrong moment? We use this to test bridge offers and measure what actually moves behavior versus what just feels good.`,
    highlightSelector: '.section:nth-child(4)',
    scrollTo: true,
  },
  {
    route: '/customer-intelligence',
    title: 'Anonymous Traffic Identity Mapping',
    stepLabel: 'Connecting visits to people',
    body: `A lot of people visit Samsung.com without logging in. Samsung can see that traffic but can't act on it. This part of the platform monitors the stitch rate: how often we're successfully connecting an anonymous visit to a known customer profile. That number tells us how effective the personalization on .com actually is, and where we're still leaving intent signals on the table.`,
    highlightSelector: '.kpi-row',
  },
  {
    route: '/journey-orchestration',
    title: 'Cross-LOB Journey Map',
    stepLabel: 'Does a phone buyer become a TV buyer?',
    body: `Does someone who buys a Galaxy phone eventually buy a Samsung TV? How long does that take? Right now Samsung probably can't answer that cleanly because the data lives in separate systems. This journey map surfaces those cross-category patterns across the full customer lifecycle. It's what turns CLV from a theoretical metric into something you can actually plan around and build journeys toward.`,
    highlightSelector: '.page-container',
  },
  {
    route: '/experimentation',
    title: 'Experimentation & Value Validation',
    stepLabel: 'Proof that the right moves are working',
    body: `Everything we've looked at so far generates hypotheses. This is where we test them. We run holdout groups, measure incrementality, and track which interventions actually grow customer value versus which ones just generate short-term noise. This is also how we build the internal case at Samsung, because Brian needs proof that the right moves are working, not just activity metrics.`,
    highlightSelector: '.page-container',
  },
]

export default function GuidedTour({ active, onClose }) {
  const [step, setStep] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()
  const prevActive = useRef(active)

  const goToStep = useCallback((idx) => {
    if (idx < 0 || idx >= STEPS.length) return
    setAnimating(true)
    const scrollToTop = () => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      const content = document.querySelector('.content-area')
      if (content) content.scrollTop = 0
    }
    scrollToTop()
    setTimeout(() => {
      setStep(idx)
      navigate(STEPS[idx].route)
      setTimeout(() => {
        setAnimating(false)
        scrollToTop()
        if (STEPS[idx].scrollTo) {
          setTimeout(() => {
            scrollToTop()
            setTimeout(() => {
              const el = document.querySelector(STEPS[idx].highlightSelector)
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }, 100)
          }, 200)
        }
      }, 100)
    }, 200)
  }, [navigate])

  useEffect(() => {
    if (active && !prevActive.current) {
      setStep(0)
      setVisible(true)
      navigate(STEPS[0].route)
      setTimeout(() => {
        const content = document.querySelector('.content-area')
        if (content) content.scrollTop = 0
      }, 100)
    } else if (!active && prevActive.current) {
      setVisible(false)
    }
    prevActive.current = active
  }, [active, navigate])

  if (!active) return null

  const current = STEPS[step]
  const isLast = step === STEPS.length - 1
  const isFirst = step === 0

  return (
    <>
      {/* Tour Panel */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '440px',
        maxWidth: 'calc(100vw - 48px)',
        zIndex: 1000,
        opacity: visible && !animating ? 1 : 0,
        transform: visible && !animating ? 'translateY(0)' : 'translateY(12px)',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        {/* Progress bar */}
        <div style={{
          display: 'flex',
          gap: '4px',
          marginBottom: '12px',
        }}>
          {STEPS.map((_, i) => (
            <div key={i} style={{
              flex: 1,
              height: '3px',
              borderRadius: '2px',
              background: i <= step ? 'var(--accent)' : 'rgba(255,255,255,0.2)',
              transition: 'background 0.3s',
            }} />
          ))}
        </div>

        {/* Card */}
        <div style={{
          background: 'var(--dark-nav)',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,178,255,0.1)',
          overflow: 'hidden',
          position: 'relative',
        }}>
          {/* Close X */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              zIndex: 2,
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)',
              border: 'none',
              color: 'rgba(255,255,255,0.5)',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.15s',
              lineHeight: 1,
              padding: 0,
            }}
            onMouseEnter={e => { e.target.style.background = 'rgba(255,255,255,0.18)'; e.target.style.color = 'white' }}
            onMouseLeave={e => { e.target.style.background = 'rgba(255,255,255,0.08)'; e.target.style.color = 'rgba(255,255,255,0.5)' }}
          >×</button>

          {/* Header */}
          <div style={{
            padding: '20px 24px 16px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '6px',
            }}>
              <span style={{
                fontSize: '0.68rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--accent)',
                fontFamily: 'var(--font-body)',
              }}>
                Step {step + 1} of {STEPS.length}
              </span>
            </div>
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              color: 'white',
              margin: 0,
              fontFamily: 'var(--font-display)',
            }}>
              {current.title}
            </h3>
          </div>

          {/* Body */}
          <div style={{
            padding: '16px 24px 20px',
          }}>
            <p style={{
              fontSize: '0.85rem',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.78)',
              margin: 0,
              fontFamily: 'var(--font-body)',
            }}>
              {current.body}
            </p>
          </div>

          {/* Footer */}
          <div style={{
            padding: '12px 24px 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}>
            <button
              onClick={() => !isFirst && goToStep(step - 1)}
              disabled={isFirst}
              style={{
                background: 'none',
                border: '1px solid rgba(255,255,255,0.15)',
                color: isFirst ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.8)',
                borderRadius: '8px',
                padding: '8px 18px',
                fontSize: '0.82rem',
                fontWeight: 500,
                cursor: isFirst ? 'default' : 'pointer',
                fontFamily: 'var(--font-body)',
                transition: 'all 0.15s',
              }}
            >
              Back
            </button>

            <div style={{
              display: 'flex',
              gap: '6px',
            }}>
              {STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToStep(i)}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: i === step ? 'var(--accent)' : 'rgba(255,255,255,0.2)',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => {
                if (isLast) {
                  onClose()
                  navigate('/')
                } else {
                  goToStep(step + 1)
                }
              }}
              style={{
                background: isLast ? 'var(--accent)' : 'var(--samsung-blue)',
                border: 'none',
                color: 'white',
                borderRadius: '8px',
                padding: '8px 20px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                transition: 'all 0.15s',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              }}
              onMouseEnter={e => { e.target.style.filter = 'brightness(1.15)' }}
              onMouseLeave={e => { e.target.style.filter = 'none' }}
            >
              {isLast ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
