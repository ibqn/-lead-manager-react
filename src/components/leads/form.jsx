import React, { useState } from 'react'
import { dispatch, useDispatch } from 'react-redux'

import { addLead } from '../../reducers/leads/actions'

const initLead = {
  name: '',
  email: '',
  message: '',
}

const Form = () => {
  const [lead, setLead] = useState(initLead)

  const dispatch = useDispatch()

  const handleChange = (name) => ({ target: { value } }) =>
    setLead({ ...lead, [name]: value })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(lead)
    dispatch(addLead(lead))
    setLead(initLead)
  }

  return (
    <div className="card card-body mt-4 mb-4">
      <h1>Add Lead</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={handleChange('name')}
            value={lead.name}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            onChange={handleChange('email')}
            value={lead.email}
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            className="form-control"
            name="message"
            onChange={handleChange('message')}
            value={lead.message}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
