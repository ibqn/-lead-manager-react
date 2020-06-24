import axios from 'axios'

import { USER_LOADING, USER_LOADED, AUTH_FAILURE } from './action-types'
import { setError } from '../errors/actions'

const loadUser = (token) => async (dispatch) => {
  dispatch({ action: USER_LOADING })

  const config = {
    headers: { 'content-Type': 'application/json' },
  }

  if (token) {
    config.headers['Authorization'] = `Token ${token}`
  }

  try {
    response = await axios.get('/api/auth/user', config)
    dispatch({ type: USER_LOADED, payload: response.data })
  } catch (error) {
    const { data: message, status } = error.response
    dispatch(setError({ message, status, timestamp: Date.now() }))
    dispatch({ action: AUTH_FAILURE })
  }
}
