import { forwardRef } from 'react'

const StoryCard = forwardRef(function StoryCard({ results, top }, ref) {
  const max = Math.max(...results.map((r) => r.percent))

  return (
    <div
      ref={ref}
      style={{
        width: 360,
        height: 640,
        boxSizing: 'border-box',
        padding: '32px 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(160deg, #1e1b4b 0%, #4338ca 55%, #7c3aed 100%)',
        color: '#ffffff',
        fontFamily: "system-ui, 'Segoe UI', Roboto, sans-serif",
        overflow: 'hidden',
      }}
    >
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 0.5, color: '#c7d2fe', textTransform: 'uppercase' }}>
          Meu Estilo Pedagógico
        </div>
        <div style={{ fontSize: 12, color: '#a5b4fc', marginTop: 2 }}>UNIVALI &amp; E.B. João Paulo II</div>
      </div>

      <div>
        <div style={{ fontSize: 12, color: '#c7d2fe', textTransform: 'uppercase', letterSpacing: 1 }}>
          Predominância
        </div>
        <div style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.1, marginTop: 6 }}>{top.name}</div>
        <div style={{ fontSize: 15, marginTop: 10, color: '#e0e7ff', lineHeight: 1.35 }}>“{top.tagline}”</div>
        <div style={{ fontSize: 64, fontWeight: 900, marginTop: 12, lineHeight: 1 }}>{top.percent}%</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {results.map((r) => (
          <div key={r.key}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 600, marginBottom: 4 }}>
              <span>{r.key === 'C' ? 'Psicogênese da Pessoa Completa' : r.short}</span>
              <span>{r.percent}%</span>
            </div>
            <div style={{ height: 10, borderRadius: 5, background: 'rgba(255,255,255,0.18)' }}>
              <div
                style={{
                  height: 10,
                  borderRadius: 5,
                  width: `${(r.percent / max) * 100}%`,
                  background: r.hexSoft,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', fontSize: 16, fontWeight: 800, color: '#fde68a' }}>
        Descubra também o seu perfil!
      </div>
    </div>
  )
})

export default StoryCard
