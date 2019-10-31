import React, { useState } from "react";
function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container text-left">
      <form>
        <fieldset>
          <legend>Normal React Form</legend>
          <p>Normal React with React Hooks</p>
          <div className="form-group field">
            <label htmlFor="firstName" className="control-label">
              First name
            </label>
            <input
              className="form-control"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              placeholder="First name"
              type="text"
              name="firstName"
              required
            />
          </div>
          <div className="form-group field">
            <label htmlFor="lastName" className="control-label">
              Last name
            </label>
            <input
              className="form-control"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              placeholder="Last name"
              type="text"
              name="lastName"
              required
            />
          </div>
          <div className="form-group field">
            <label htmlFor="email" className="control-label">
              Email address
            </label>
            <input
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email address"
              type="email"
              name="email"
              required
            />
          </div>
          <div className="form-group field">
            <label htmlFor="password" className="control-label">
              Password
            </label>
            <input
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              name="password"
              required
            />
          </div>
          <button type="submit" className="btn btn-info">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}
export default Form;
