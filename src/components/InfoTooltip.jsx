import { useState, useRef, useEffect } from 'react'

export default function InfoTooltip({ text }) {
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState('below')
  const ref = useRef(null)
  const tipRef = useRef(null)

  useEffect(() => {
    if (open && ref.current) {
      const rect = ref.current.getBoundingClientRect()
      // If too close to bottom, show above
      if (rect.bottom + 120 > window.innerHeight) {
        setPos('above')
      } else {
        setPos('below')
      }
    }
  }, [open])

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  return (
    <span ref={ref} style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', marginLeft: '6px' }}>
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        style={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          background: open ? 'var(--samsung-blue)' : '#e0e2ea',
          color: open ? 'white' : 'var(--text-muted)',
          border: 'none',
          fontSize: '0.6rem',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.15s',
          flexShrink: 0,
          lineHeight: 1,
        }}
      >?</button>
      {open && (
        <div ref={tipRef} style={{
          position: 'absolute',
          [pos === 'below' ? 'top' : 'bottom']: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '280px',
          padding: '12px 14px',
          background: 'var(--dark-nav)',
          color: 'rgba(255,255,255,0.9)',
          fontSize: '0.78rem',
          lineHeight: 1.55,
          textTransform: 'none',
          letterSpacing: 'normal',
          fontWeight: 400,
          borderRadius: '8px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
          zIndex: 200,
          animation: 'tipFadeIn 0.15s ease',
          pointerEvents: 'none',
        }}>
          {text}
          <div style={{
            position: 'absolute',
            [pos === 'below' ? 'top' : 'bottom']: '-5px',
            left: '50%',
            transform: 'translateX(-50%) rotate(45deg)',
            width: '10px',
            height: '10px',
            background: 'var(--dark-nav)',
          }} />
        </div>
      )}
      <style>{`@keyframes tipFadeIn { from { opacity: 0; transform: translateX(-50%) translateY(${pos === 'below' ? '-4px' : '4px'}) } to { opacity: 1; transform: translateX(-50%) translateY(0) } }`}</style>
    </span>
  )
}
