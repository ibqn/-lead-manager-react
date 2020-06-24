import { USER_LOADING, USER_LOADED, AUTH_FAILURE } from './action-types'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return { ...state, isLoading: true }

    case USER_LOADED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
      }

    case AUTH_FAILURE:
      localStorage.removeItem('token')
      return { ...initialState, token: null }

    default:
      return state
  }
}

export default authReducer
