import React from 'react'
import '../styles.css'

const tips = [
  'Track every small spend. Those RM 5 coffees add up faster than you think.',
  'Set a savings goal before you shop. It turns "I want" into "I planned".',
  'Paylater loans look tiny until the interest stacks. Ask: do I actually need it?',
  'Try the 24-hour rule for anything over RM 100. Sleep on it, then decide.',
  'A budget is just a plan for your money. It is not a punishment.',
]

function TipOfTheDay() {
  const tip = tips[new Date().getDate() % tips.length]
  return (
    <div className="tip">
      <span className="tip__badge">Daily tip</span>
      <p className="tip__text">{tip}</p>
    </div>
  )
}

export default TipOfTheDay