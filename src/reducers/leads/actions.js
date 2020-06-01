import axios from 'axios'

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './action-types'

const getLeads = () => async (dispatch) => {
  try {
    const resp = await axios.get('/api/leads')
    const leads = resp.data
    console.log('get leads', leads)
    dispatch({
      type: GET_LEADS,
      payload: leads,
    })
  } catch (error) {
    console.log(error)
    // dispatch(getErrors(errors));
  }
}

const deleteLead = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/leads/${id}/`)
    dispatch({
      type: DELETE_LEAD,
      payload: id,
    })
  } catch (error) {
    console.log(`error ${error}`)
  }
}

const addLead = (lead) => async (dispatch) => {
  try {
    const resp = await axios.post('api/leads', lead)
    const newLead = resp.data
    console.log('add lead', resp.data)
    dispatch({
      type: ADD_LEAD,
      payload: newLead,
    })
  } catch (error) {
    console.log(error)
  }
}

export { getLeads, deleteLead, addLead }
