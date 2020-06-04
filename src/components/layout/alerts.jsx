import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

const Alerts = () => {
  const [show, setShow] = useState(true)
  const error = useSelector((state) => state.error)

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    )
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>
}

export default Alerts
