import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLeads, deleteLead } from '../../reducers/leads/actions'

const Leads = () => {
  const leads = useSelector((state) => state.leads)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('get leads')
    dispatch(getLeads())
  }, [dispatch])

  return (
    <>
      <h1>Leads List</h1>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {leads.leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.message}</td>
              <td>
                <button
                  onClick={() => dispatch(deleteLead(lead.id))}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Leads
