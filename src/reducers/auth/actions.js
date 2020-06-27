import axios from 'axios'

import {
  USER_LOADING,
  USER_LOADED,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './action-types'

import { setError } from '../errors/actions'
import { makeConfig } from '../../utils'

const loadUser = () => async (dispatch, getState) => {
  dispatch({ type: USER_LOADING })

  const config = makeConfig(getState)

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

const registerUser = (userData) => async (dispatch) => {
  const config = {
    headers: { 'content-Type': 'application/json' },
  }

  try {
    const response = await axios.post('/api/auth/register', userData, config)
    dispatch({ type: REGISTER_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch(
      setError({
        message: 'Could not create new account',
        timestamp: Date.now(),
      })
    )
    dispatch({ type: REGISTER_FAILURE })
  }
}

const logoutUser = () => async (dispatch, getState) => {
  const config = makeConfig(getState)

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

export { loadUser, loginUser, logoutUser, registerUser }
