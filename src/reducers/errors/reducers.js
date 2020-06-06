import { SET_ERROR } from './action-types'

const initialState = {
  message: null,
  status: null,
  timestamp: null,
}

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
        timestamp: action.payload.timestamp,
      }
    default:
      return state
  }
}

export default errorReducer
