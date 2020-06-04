import { SET_ERROR } from './action-types'

const setError = (error) => ({ type: SET_ERROR, payload: error })

export { setError }
