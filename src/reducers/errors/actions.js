import { SET_ERROR } from './action-types'

const setError = ({ message, status = null }) => ({
  type: SET_ERROR,
  payload: { message, status },
})

export { setError }
