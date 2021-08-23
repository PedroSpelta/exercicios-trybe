const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

reducer = ( state = ESTADO_INICIAL, action) => {
  const {index} = state;
  switch (action.type) {
    case 'NEXT_COLOR':
      if ( index === 5) {
        return {...state, index: 0};
      }
      return {...state, index: state.index + 1};
    case 'PREVIOUS_COLOR':
      if (index === 0 ) {
        return {...state, index: 5};
      }
      return {...state, index: state.index - 1};
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

const changeColor = () => {
  const colorText = document.querySelector('#value');
  const {colors, index} = store.getState();
  colorText.innerHTML = colors[index];
  const container = document.querySelector('#container');
  container.style.backgroundColor = colors[index];
};

const handlePrev = () => {
  store.dispatch({type: 'PREVIOUS_COLOR'});
  changeColor();
};

const handleNext = () => {
  store.dispatch({type: 'NEXT_COLOR'});
  changeColor();
};
