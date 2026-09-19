import React from 'react'
import '../styles.css'

function GoalCard({ goal, onEdit, onDelete }) {
  const pct = goal.targetAmount > 0
    ? Math.min(100, Math.round((goal.currentAmount / goal.targetAmount) * 100))
    : 0
  const remaining = goal.targetAmount - goal.currentAmount

  return (
    <div className="goal-card">
      <div className="goal-card__head">
        <div>
          <span className="goal-card__name">{goal.name}</span>
          {goal.deadline && <span className="goal-card__deadline">by {goal.deadline}</span>}
        </div>
        <div className="goal-card__actions">
          <button type="button" className="icon-btn" onClick={() => onEdit(goal)} aria-label="Edit goal">✎</button>
          <button type="button" className="icon-btn icon-btn--danger" onClick={() => onDelete(goal)} aria-label="Delete goal">🗑</button>
        </div>
      </div>

      <span className="progress__label">{pct}%</span>
      <div className="progress">
        <div className="progress__track">
          <div className="progress__fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="goal-card__amounts">
        <span>RM {Number(goal.currentAmount).toFixed(2)} saved</span>
        <span>RM {Number(remaining).toFixed(2)} to go</span>
      </div>
    </div>
  )
}

function GoalList({ goals, onEdit, onDelete }) {
  if (!goals || goals.length === 0) {
    return null
  }

  return (
    <div className="goal-list">
      <h2 className="section-title">Savings goals</h2>
      {goals.map((goal) => (
        <GoalCard key={goal.id} goal={goal} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default GoalList