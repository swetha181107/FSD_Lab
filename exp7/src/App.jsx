
import { useState } from 'react'
import './App.css'

function Icon({ type }) {
  const paths = {
    user: <><circle cx="12" cy="7" r="4" /><path d="M5 21v-2a7 7 0 0 1 14 0v2" /></>,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    lock: <><rect x="3" y="10" width="18" height="12" rx="2" /><path d="M7 10V7a5 5 0 0 1 10 0v3" /></>,
    course: <><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M4 16h16" /></>
  }

  return (
    <svg viewBox="0 0 24 24" className="field-icon"
      fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[type]}
    </svg>
  )
}

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    course: 'ReactJS Web Development',
    terms: false
  })

  const [message, setMessage] = useState('')

  function handleChange(e) {
    const { name, value, checked, type } = e.target

    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    setMessage('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    setMessage(`Application submitted successfully for ${form.name}!`)
  }

  function handleReset() {
    setForm({
      name: '',
      email: '',
      password: '',
      course: 'ReactJS Web Development',
      terms: false
    })
    setMessage('')
  }

  return (
    <main className="registration-card">
      <h2>Student Course Registration</h2>

      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <div className="input-box">
            <Icon type="user" />
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <div className="input-box">
            <Icon type="mail" />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-box">
            <Icon type="lock" />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              autoComplete="new-password"
              minLength={8}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="course">Select Course</label>
          <div className="input-box">
            <Icon type="course" />
            <select
              id="course"
              name="course"
              value={form.course}
              onChange={handleChange}
            >
              <option>ReactJS Web Development</option>
              <option>Java Programming</option>
              <option>Python Programming</option>
              <option>Full Stack Development</option>
              <option>Web Design</option>
            </select>
          </div>
        </div>

        <label className="terms">
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
            required
          />
          <span>I agree to the terms &amp; conditions</span>
        </label>

        <div className="buttons">
          <button type="submit" className="submit-button">
            Submit Application
          </button>
          <button type="reset" className="reset-button">
            Reset
          </button>
        </div>

        {message && <p className="success-message" role="status">{message}</p>}
      </form>
    </main>
  )
}

export default App
