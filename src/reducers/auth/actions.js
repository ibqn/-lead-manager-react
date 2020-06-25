import axios from 'axios'

import {
  USER_LOADING,
  USER_LOADED,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from './action-types'
import { setError } from '../errors/actions'

const loadUser = (token) => async (dispatch) => {
  dispatch({ type: USER_LOADING })

  const config = {
    headers: { 'content-Type': 'application/json' },
  }

  if (token) {
    config.headers['Authorization'] = `Token ${token}`
  }

  try {
    const response = await axios.get('/api/auth/user', config)
    dispatch({ type: USER_LOADED, payload: response.data })
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE })
  }
}

const loginUser = (userData) => async (dispatch) => {
  const config = {
    headers: { 'content-Type': 'application/json' },
  }

  try {
    const response = await axios.post('/api/auth/login', userData, config)
    dispatch({ type: LOGIN_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch(
      setError({
        message: 'Incorrect Credentials',
        timestamp: Date.now(),
      })
    )
    dispatch({ type: LOGIN_FAILURE })
  }
}

const logoutUser = (token) => async (dispatch) => {
  const config = {
    headers: { 'content-Type': 'application/json' },
  }

  if (token) {
    config.headers['Authorization'] = `Token ${token}`
  }

  try {
    await axios.post('/api/auth/logout', null, config)
    dispatch({ type: LOGOUT_SUCCESS })
  } catch (error) {
    const { data: message, status } = error.response
    dispatch(
      setError({
        message: JSON.stringify(message),
        status,
        timestamp: Date.now(),
      })
    )
    dispatch({ type: LOGOUT_FAILURE })
  }
}

export { loadUser, loginUser, logoutUser }
