import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLeads } from '../../reducers/leads/actions'

const Leads = () => {
  const leads = useSelector((state) => state.leads)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('get leads')
    dispatch(getLeads())
  }, [dispatch])

  return (
    <>
      <h1>Leads</h1>
      {JSON.stringify(leads)}
    </>
  )
}

export default Leads
