import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Alert from 'react-bootstrap/Alert'
import Fade from 'react-bootstrap/Fade'

const Alerts = () => {
  const [show, setShow] = useState(false)
  const error = useSelector((state) => state.error)

  useEffect(() => {
    setShow(error.timestamp !== null)
    console.log(error)
  }, [error])

  return (
    <Alert
      show={show}
      transition={Fade}
      variant="danger"
      onClose={() => setShow(false)}
      dismissible
    >
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        {error.message}
        {error.status ? ` with response status of ${error.status}.` : '.'}
      </p>
    </Alert>
  )
}

export default Alerts
