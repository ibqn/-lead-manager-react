import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { addLead } from '../../reducers/leads/actions'

const initLead = {
  name: '',
  email: '',
  message: '',
}

const AddLeadForm = () => {
  const [lead, setLead] = useState(initLead)
  const [validated, setValidated] = useState(false)

  const dispatch = useDispatch()

  const handleChange = (name) => ({ target: { value } }) =>
    setLead({ ...lead, [name]: value })

  const handleSubmit = (event) => {
    const { currentTarget: form } = event

    event.preventDefault()

    if (form.checkValidity() === false) {
      event.stopPropagation()
      setValidated(true)
      return
    }

    setValidated(false)
    dispatch(addLead(lead))
    setLead(initLead)
  }

  return (
    <Card body className="mt-4 mb-4">
      <h1>Add Lead</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange('name')}
            value={lead.name}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please choose a name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange('email')}
            value={lead.email}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please choose an Email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            onChange={handleChange('message')}
            value={lead.message}
          />
          <Form.Control.Feedback>
            Message field is optional!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Card>
  )
}

export default AddLeadForm
