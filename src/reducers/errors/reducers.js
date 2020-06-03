import { SET_ERROR } from './action-types'

const initialState = {
  message: {},
  status: null,
}

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
      }
    default:
      return state
  }
}

export default errorReducer
