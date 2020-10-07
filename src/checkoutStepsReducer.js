import { jsonCopy } from './util.js'

const checkoutStepsReducer = (state, action) => {
  if (!state) {
    return { currentStep: 0 }
  }

  var newState = jsonCopy(state)
  newState.lastAction = action.type

  switch(action.type) {
    case 'NEXT_STEP':
      return { ...newState, currentStep: newState.currentStep + 1 }
    case 'PREV_STEP':
      return { ...newState, currentStep: newState.currentStep - 1 }
    case 'SET_VALUE':
      return { ...newState, values: { ...newState.values, [action.payload.name]: action.payload.value } }
    default:
      return state
  }
}

export { checkoutStepsReducer }
