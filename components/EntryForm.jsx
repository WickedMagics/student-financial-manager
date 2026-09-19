import React from 'react'
import '../styles.css'

function EntryForm({ mode, setMode, form, onChange, onSubmit, submitLabel, editingId, onCancel }) {
  return (
    <div className="entry-form">
      <div className="entry-form__tabs" role="tablist">
        {['Expense', 'Income', 'Goal'].map((tab) => (
          <button
            key={tab}
            type="button"
            className={`entry-form__tab ${mode === tab ? 'entry-form__tab--active' : ''}`}
            onClick={() => setMode(tab)}
            role="tab"
            aria-selected={mode === tab}
          >
            {tab}
          </button>
        ))}
      </div>

      <form className="entry-form__fields" onSubmit={onSubmit}>
        {mode === 'Expense' && (
          <>
            <label className="field">
              <span className="field__label">Category</span>
              <select name="category" value={form.category || ''} onChange={onChange}>
                <option value="">Select category</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Shopping">Shopping</option>
                <option value="Bills">Bills</option>
                <option value="Study">Study</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label className="field">
              <span className="field__label">Amount (RM)</span>
              <input type="number" name="amount" value={form.amount || ''} onChange={onChange} min="0" step="0.01" />
            </label>
            <label className="field">
              <span className="field__label">Date</span>
              <input type="date" name="date" value={form.date || ''} onChange={onChange} />
            </label>
            <label className="field">
              <span className="field__label">Payment method</span>
              <select name="method" value={form.method || ''} onChange={onChange}>
                <option value="">Select method</option>
                <option value="Cash">Cash</option>
                <option value="TNG e-wallet">TNG e-wallet</option>
                <option value="Card">Card</option>
                <option value="Bank transfer">Bank transfer</option>
              </select>
            </label>
            <label className="field">
              <span className="field__label">Note (optional)</span>
              <input type="text" name="note" value={form.note || ''} onChange={onChange} placeholder="What was this for?" />
            </label>
          </>
        )}

        {mode === 'Income' && (
          <>
            <label className="field">
              <span className="field__label">Source</span>
              <select name="source" value={form.source || ''} onChange={onChange}>
                <option value="">Select source</option>
                <option value="Parents">Parents</option>
                <option value="PTPTN">PTPTN</option>
                <option value="Part-time job">Part-time job</option>
                <option value="TNG e-wallet">TNG e-wallet</option>
                <option value="Scholarship">Scholarship</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label className="field">
              <span className="field__label">Amount (RM)</span>
              <input type="number" name="amount" value={form.amount || ''} onChange={onChange} min="0" step="0.01" />
            </label>
            <label className="field">
              <span className="field__label">Date</span>
              <input type="date" name="date" value={form.date || ''} onChange={onChange} />
            </label>
            <label className="field">
              <span className="field__label">Note (optional)</span>
              <input type="text" name="note" value={form.note || ''} onChange={onChange} placeholder="Where did this come from?" />
            </label>
          </>
        )}

        {mode === 'Goal' && (
          <>
            <label className="field">
              <span className="field__label">What are you saving for?</span>
              <input type="text" name="name" value={form.name || ''} onChange={onChange} placeholder="e.g. New headphones" />
            </label>
            <label className="field">
              <span className="field__label">Target amount (RM)</span>
              <input type="number" name="targetAmount" value={form.targetAmount || ''} onChange={onChange} min="0" step="0.01" />
            </label>
            <label className="field">
              <span className="field__label">Already saved (RM)</span>
              <input type="number" name="currentAmount" value={form.currentAmount || ''} onChange={onChange} min="0" step="0.01" />
            </label>
            <label className="field">
              <span className="field__label">Deadline (optional)</span>
              <input type="date" name="deadline" value={form.deadline || ''} onChange={onChange} />
            </label>
          </>
        )}

        <div className="entry-form__actions">
          {editingId && (
            <button type="button" className="btn btn--secondary" onClick={onCancel}>
              Cancel
            </button>
          )}
          <button type="submit" className="btn btn--primary entry-form__submit">
            {submitLabel}
          </button>
        </div>
      </form>
    </div>
  )
}

export default EntryForm