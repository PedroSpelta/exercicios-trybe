const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

reducer = (state = ESTADO_INICIAL, action) => {
  const {index, colors} = state;
  switch (action.type) {
    case 'NEXT_COLOR':
      if (index === colors.length - 1) {
        return {...state, index: 0};
      }
      return {...state, index: state.index + 1};
    case 'PREVIOUS_COLOR':
      if (index === 0) {
        return {...state, index: colors.length - 1};
      }
      return {...state, index: state.index - 1};
    case 'RANDOM_COLOR':
      const {newColor} = action;
      return {
        ...state,
        colors: [...state.colors, newColor],
      };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

criarCor = () => {
  const oneChar = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    cor += oneChar[aleatorio()];
  }
  return cor;
};

const changeColor = (color) => {
  const colorText = document.querySelector('#value');
  colorText.innerHTML = color;
  const container = document.querySelector('#container');
  container.style.backgroundColor = color;
};

const handlePrev = () => {
  store.dispatch({type: 'PREVIOUS_COLOR'});
  const {colors, index} = store.getState();
  changeColor(colors[index]);
};

const handleNext = () => {
  store.dispatch({type: 'NEXT_COLOR'});
  const {colors, index} = store.getState();
  changeColor(colors[index]);
};

const handleRandom = () => {
  const color = criarCor();
  store.dispatch({type: 'RANDOM_COLOR', newColor: color});
  changeColor(color);
};
