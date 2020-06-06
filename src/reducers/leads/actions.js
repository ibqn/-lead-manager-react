import axios from 'axios'

import { setError } from '../errors/actions'
import { setMessage } from '../messages/actions'

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './action-types'

const getLeads = () => async (dispatch) => {
  try {
    const resp = await axios.get('/api/leads')
    const leads = resp.data
    dispatch({
      type: GET_LEADS,
      payload: leads,
    })
  } catch (error) {
    const { statusText, status } = error.response
    const errorState = {
      message: `Can't retrieve a list of leads due to ${statusText}`,
      status,
      timestamp: Date.now(),
    }
    dispatch(setError(errorState))
  }
}

const deleteLead = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/leads/${id}/`)
    dispatch({
      type: DELETE_LEAD,
      payload: id,
    })
    dispatch(setMessage({ message: 'Lead was removed' }))
  } catch (error) {
    const { statusText, status } = error.response
    const errorState = {
      message: `Can't remove lead due to ${statusText}`,
      status,
      timestamp: Date.now(),
    }
    dispatch(setError(errorState))
  }
}

const addLead = (lead, actionId) => async (dispatch) => {
  try {
    const resp = await axios.post('api/leads', lead)
    const newLead = resp.data
    console.log('add lead', resp.data)
    dispatch({
      type: ADD_LEAD,
      payload: newLead,
      uniqueId: actionId,
    })
    dispatch(setMessage({ message: 'A new lead was added' }))
  } catch (error) {
    const { statusText, status } = error.response
    const errorState = {
      message: `Can't add lead due to ${statusText}`,
      status,
      timestamp: Date.now(),
    }
    dispatch(setError(errorState))
  }
}

export { getLeads, deleteLead, addLead }
