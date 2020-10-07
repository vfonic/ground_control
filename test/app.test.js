import { checkoutStepsReducer } from '../src/checkoutStepsReducer.js'

describe('checkoutStepsReducer', () => {
  test('initialization', () => {
    expect(checkoutStepsReducer()).toStrictEqual({ currentStep: 0 })
  })

  test('going to next step', () => {
    const initialState = { currentStep: 1 }

    const result = checkoutStepsReducer(initialState, { type: 'NEXT_STEP' })

    expect(result.currentStep).toBe(2)
  })

  test('going to previous step', () => {
    const initialState = { currentStep: 2 }

    const result = checkoutStepsReducer(initialState, { type: 'PREV_STEP' })

    expect(result.currentStep).toBe(1)
  })
})
