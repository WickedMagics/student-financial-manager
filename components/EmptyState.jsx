import React from 'react'
import '../styles.css'

function EmptyState({ onAddSample }) {
  return (
    <div className="empty-state">
      <div className="empty-state__icon">💰</div>
      <h3 className="empty-state__title">No money moves yet</h3>
      <p className="empty-state__text">
        Add your first expense or income above. Or load some sample data so the dashboard is not so lonely.
      </p>
      <button type="button" className="btn btn--primary" onClick={onAddSample}>
        Load sample data
      </button>
    </div>
  )
}

export default EmptyState