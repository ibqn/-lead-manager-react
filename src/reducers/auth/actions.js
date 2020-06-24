import axios from 'axios'
import { useStore } from 'react-redux'

import {
  USER_LOADING,
  USER_LOADED,
  AUTH_FAILURE,
  AUTH_SUCCESS,
} from './action-types'
import { setError } from '../errors/actions'

const loadUser = (token) => async (dispatch) => {
  dispatch({ type: USER_LOADING })

  const config = {
    headers: { 'content-Type': 'application/json' },
  }

  console.log(token)

  if (token) {
    config.headers['Authorization'] = `Token ${token}`
  }

  try {
    const response = await axios.get('/api/auth/user', config)
    dispatch({ type: USER_LOADED, payload: response.data })
  } catch (error) {
    const { data: message, status } = error.response
    console.log('message', message, 'status', status)
    dispatch(
      setError({
        message: JSON.stringify(message),
        status,
        timestamp: Date.now(),
      })
    )
    dispatch({ type: AUTH_FAILURE })
  }
}

const loginUser = (data) => async (dispatch) => {
  const config = {
    headers: { 'content-Type': 'application/json' },
  }

  try {
    const response = await axios.post('/api/auth/login', data, config)
    dispatch({ type: AUTH_SUCCESS, payload: response.data })
  } catch (error) {
    const { data: message, status } = error.response
    dispatch(
      setError({
        message: JSON.stringify(message),
        status,
        timestamp: Date.now(),
      })
    )
    dispatch({ type: AUTH_FAILURE })
  }
}

export { loadUser, loginUser }
