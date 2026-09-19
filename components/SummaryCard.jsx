import React from 'react'
import '../styles.css'

function SummaryCard({ label, value, accent }) {
  return (
    <div className="summary-card">
      <span className="summary-card__label">{label}</span>
      <span className="summary-card__value" style={{ color: accent || 'var(--color-text-primary)' }}>
        {value}
      </span>
    </div>
  )
}

export default SummaryCard