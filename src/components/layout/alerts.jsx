import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Alert from 'react-bootstrap/Alert'
import Fade from 'react-bootstrap/Fade'

import { uniqueId } from 'lodash'

const Alerts = () => {
  const [alertsPool, setAlertsPool] = useState([])

  const error = useSelector((state) => state.error)
  const info = useSelector((state) => state.message)

  const updatePool = (alert) => setAlertsPool([alert, ...alertsPool])

  useEffect(() => {
    if (error.message !== null) {
      updatePool({ ...error, variant: 'danger', show: true, id: uniqueId() })
    }
  }, [error])

  useEffect(() => {
    if (info.message !== null) {
      updatePool({ ...info, variant: 'info', show: true, id: uniqueId() })
    }
  }, [info])

  const removeAlert = (id) => {
    setAlertsPool(
      alertsPool.map((alert) =>
        alert.id === id ? { ...alert, show: false } : alert
      )
    )
  }

  return (
    <>
      {alertsPool.map((alert) => (
        <Alert
          key={alert.id}
          show={alert.show}
          transition={Fade}
          variant={alert.variant}
          dismissible
          onClose={() => removeAlert(alert.id)}
        >
          {alert.message}
          {alert.status ? ` with response status of ${alert.status}.` : '.'}
        </Alert>
      ))}
    </>
  )
}

export default Alerts
