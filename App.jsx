import React, { useState, useEffect } from 'react'
import SummaryCard from './components/SummaryCard'
import EntryForm from './components/EntryForm'
import EntryList from './components/EntryList'
import GoalList from './components/GoalList'
import TipOfTheDay from './components/TipOfTheDay'
import EmptyState from './components/EmptyState'
import './styles.css'

const STORAGE_KEY = 'sfm-data'

const SAMPLE_DATA = [
  { id: 's1', type: 'income', source: 'Parents', amount: 800, date: '2026-09-01', note: 'Monthly allowance' },
  { id: 's2', type: 'expense', category: 'Food', amount: 42.50, date: '2026-09-03', method: 'TNG e-wallet', note: 'Lunch with friends' },
  { id: 's3', type: 'expense', category: 'Transport', amount: 18.00, date: '2026-09-05', method: 'Cash', note: 'Bus pass' },
  { id: 's4', type: 'expense', category: 'Entertainment', amount: 65.00, date: '2026-09-07', method: 'Card', note: 'Movie night' },
  { id: 's5', type: 'goal', name: 'New headphones', targetAmount: 350, currentAmount: 120, deadline: '2026-11-30' },
]

const uid = () => 'id-' + Math.random().toString(36).slice(2, 9)

const EMPTY_FORM = { category: '', amount: '', date: '', method: '', note: '', source: '', name: '', targetAmount: '', currentAmount: '', deadline: '' }

function loadEntries() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return SAMPLE_DATA
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return SAMPLE_DATA
    return parsed.map((e) => ({
      ...e,
      amount: Number(e.amount),
      targetAmount: e.targetAmount != null ? Number(e.targetAmount) : 0,
      currentAmount: e.currentAmount != null ? Number(e.currentAmount) : 0,
    }))
  } catch {
    return SAMPLE_DATA
  }
}

export default function App() {
  const today = new Date()
  const monthLabel = today.toLocaleString('en-US', { month: 'long', year: 'numeric' })

  const [entries, setEntries] = useState(loadEntries)
  const [mode, setMode] = useState('Expense')
  const [form, setForm] = useState(EMPTY_FORM)
  const [editingId, setEditingId] = useState(null)

  const todayStr = today.toISOString().slice(0, 10)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
  }, [entries])

  const thisMonth = entries.filter((e) => e.type !== 'goal' && e.date && e.date.slice(0, 7) === today.toISOString().slice(0, 7))
  const income = thisMonth.filter((e) => e.type === 'income').reduce((s, e) => s + Number(e.amount), 0)
  const expenses = thisMonth.filter((e) => e.type === 'expense').reduce((s, e) => s + Number(e.amount), 0)
  const remaining = income - expenses
  const savingsRate = income > 0 ? Math.round((remaining / income) * 100) : 0

  const nonGoal = entries.filter((e) => e.type !== 'goal')
  const goals = entries.filter((e) => e.type === 'goal')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const buildEntry = () => {
    if (mode === 'Expense') {
      return {
        id: uid(),
        type: 'expense',
        category: form.category,
        amount: Number(form.amount),
        date: form.date || todayStr,
        method: form.method,
        note: form.note || '',
      }
    }
    if (mode === 'Income') {
      return {
        id: uid(),
        type: 'income',
        source: form.source,
        amount: Number(form.amount),
        date: form.date || todayStr,
        note: form.note || '',
      }
    }
    return {
      id: uid(),
      type: 'goal',
      name: form.name,
      targetAmount: Number(form.targetAmount),
      currentAmount: form.currentAmount ? Number(form.currentAmount) : 0,
      deadline: form.deadline || '',
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEntry = buildEntry()

    if (editingId) {
      setEntries((prev) => prev.map((entry) => entry.id === editingId ? { ...entry, ...newEntry, id: editingId } : entry))
    } else {
      setEntries((prev) => [...prev, newEntry])
    }

    setForm(EMPTY_FORM)
    setEditingId(null)
  }

  const handleEdit = (entry) => {
    setEditingId(entry.id)
    setMode(entry.type === 'expense' ? 'Expense' : entry.type === 'income' ? 'Income' : 'Goal')
    setForm({
      category: entry.type === 'expense' ? entry.category : '',
      amount: entry.amount,
      date: entry.date,
      method: entry.type === 'expense' ? entry.method : '',
      note: entry.note || '',
      source: entry.type === 'income' ? entry.source : '',
      name: entry.type === 'goal' ? entry.name : '',
      targetAmount: entry.type === 'goal' ? entry.targetAmount : '',
      currentAmount: entry.type === 'goal' ? entry.currentAmount : '',
      deadline: entry.type === 'goal' ? entry.deadline || '' : '',
    })
  }

  const handleDelete = (entry) => {
    setEntries((prev) => prev.filter((e) => e.id !== entry.id))
  }

  const handleCancel = () => {
    setForm(EMPTY_FORM)
    setEditingId(null)
  }

  const handleLoadSample = () => {
    setEntries(SAMPLE_DATA)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header__inner">
          <div>
            <h1 className="app-title">Student Financial Manager</h1>
            <p className="app-subtitle">{monthLabel}</p>
          </div>
        </div>
      </header>

      <main className="section">
        <div className="summary-row">
          <SummaryCard label="Income" value={`RM ${income.toFixed(2)}`} accent="var(--color-success)" />
          <SummaryCard label="Expenses" value={`RM ${expenses.toFixed(2)}`} accent="var(--color-error)" />
          <SummaryCard label="Remaining" value={`RM ${remaining.toFixed(2)}`} accent="var(--color-text-primary)" />
          <SummaryCard label="Savings rate" value={`${savingsRate}%`} accent="var(--color-accent)" />
        </div>

        <EntryForm
          mode={mode}
          setMode={setMode}
          form={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
          submitLabel={editingId ? 'Update' : 'Add'}
          editingId={editingId}
          onCancel={handleCancel}
        />

        {nonGoal.length === 0 && goals.length === 0 ? (
          <EmptyState onAddSample={handleLoadSample} />
        ) : (
          <>
            <EntryList entries={nonGoal} onEdit={handleEdit} onDelete={handleDelete} />
            <GoalList goals={goals} onEdit={handleEdit} onDelete={handleDelete} />
          </>
        )}

        <TipOfTheDay />
      </main>
    </div>
  )
}