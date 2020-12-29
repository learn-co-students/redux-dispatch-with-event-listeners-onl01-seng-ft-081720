// add code snippets from README
let state 

function reducer(state = {count: 0}, action) {
  switch(action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }
}

function dispatch(action) {
  state = reducer(state, action);
  renderState()
}

function renderState() {
  let container = document.getElementById('container')
  container.textContent = state.count
  // document.body.textContent = state.count
}
dispatch({type: '@@INIT'})

let button = document.getElementById('button')

button.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
})

