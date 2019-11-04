import React, { useState } from 'react'
function Form() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const setters = {
    firstName: setFirstName,
    lastName: setLastName,
    email: setEmail,
    password: setPassword
  }
  const setFieldValue = (name, value) => {
    setters[name] ? setters[name](value) : console.error('missing name')
  }
  const Field = ({ name, value, text, type = 'text', required = true }) => (
    <div className="form-group field">
      <label htmlFor={name} className="control-label">
        {text}
      </label>
      <input
        className="form-control"
        value={value}
        onChange={e => setFieldValue(name, e.target.value)}
        placeholder={text}
        type={type}
        name={name}
        required={required}
      />
    </div>
  )
  return (
    <div className="container text-left">
      <form>
        <fieldset>
          <legend>Normal React Form</legend>
          <p>Normal React with React Hooks</p>
          <Field name="firstName" value={firstName} text="First name" />
          <Field name="lastName" value={lastName} text="Last name" />
          <Field name="email" value={email} text="Email address" />
          <Field
            name="password"
            value={password}
            text="Password"
            type="password"
          />
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  )
}
export default Form
