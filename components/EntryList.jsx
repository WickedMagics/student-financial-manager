import React from 'react'
import '../styles.css'

function EntryRow({ entry, onEdit, onDelete }) {
  const isExpense = entry.type === 'expense'
  const sign = isExpense ? '-' : '+'
  const amountColor = isExpense ? 'var(--color-error)' : 'var(--color-success)'
  const meta = isExpense
    ? `${entry.category} · ${entry.method}`
    : entry.source

  return (
    <div className="entry-row" style={{ borderLeft: `4px solid ${isExpense ? 'var(--color-error)' : 'var(--color-success)'}` }}>
      <div className="entry-row__main">
        <div className="entry-row__icon" style={{ background: isExpense ? 'rgba(220,38,38,0.1)' : 'rgba(22,163,74,0.1)' }}>
          {isExpense ? '↓' : '↑'}
        </div>
        <div className="entry-row__info">
          <span className="entry-row__title">{meta}</span>
          <span className="entry-row__date">{entry.date}</span>
          {entry.note && <span className="entry-row__note">{entry.note}</span>}
        </div>
      </div>
      <div className="entry-row__right">
        <span className="entry-row__amount" style={{ color: amountColor }}>
          {sign}RM {Number(entry.amount).toFixed(2)}
        </span>
        <div className="entry-row__actions">
          <button type="button" className="icon-btn" onClick={() => onEdit(entry)} aria-label="Edit">
            ✎
          </button>
          <button type="button" className="icon-btn icon-btn--danger" onClick={() => onDelete(entry)} aria-label="Delete">
            🗑
          </button>
        </div>
      </div>
    </div>
  )
}

function EntryList({ entries, onEdit, onDelete }) {
  if (!entries || entries.length === 0) {
    return null
  }

  const sorted = [...entries].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className="entry-list">
      <h2 className="section-title">Recent activity</h2>
      {sorted.map((entry) => (
        <EntryRow key={entry.id} entry={entry} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default EntryList