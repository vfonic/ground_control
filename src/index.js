import './styles.css';
import { stateMachine } from './stateMachine.js'
import { checkoutStepsReducer } from './checkoutStepsReducer.js'

const store = stateMachine(checkoutStepsReducer)

const STEPS = ['personal-details', 'social-profiles', 'email-and-password']

const render = () => {
  const state = store.getState()

  document.querySelectorAll('.js-checkoutStep').forEach(stepEl => stepEl.classList.remove('is-active'))
  document.querySelector('.js-checkoutStep[data-step="' + STEPS[state.currentStep] + '"]').classList.add('is-active')

  if (['NEXT_STEP', 'PREV_STEP'].includes(state.lastAction)) {
    window.scrollTo(0, 0)
  }
}

store.subscribe(render)
render()

document.querySelectorAll('.js-checkoutStep-next').forEach(nextStepTriggerEl => {
  nextStepTriggerEl.addEventListener('click', () => store.dispatch({ type: 'NEXT_STEP' }))
})

document.querySelectorAll('.js-checkoutStep-previous').forEach(previousStepTriggerEl => {
  previousStepTriggerEl.addEventListener('click', () => store.dispatch({ type: 'PREV_STEP' }))
})

document.querySelectorAll('.js-checkoutStep-input').forEach(inputEl => {
  inputEl.addEventListener('input', () => {
    store.dispatch({
      type: 'SET_VALUE',
      payload: { name: inputEl.name, value: inputEl.value }
    })
  })
})
