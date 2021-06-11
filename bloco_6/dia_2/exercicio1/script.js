/* eslint-disable require-jsdoc */
new window.JustValidate('.js-form', {
  rules: {
    checkbox: {
      required: true,
    },
    checkbox2: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
    cpf: {
      required: true,
      minLength: 14,
    },
  },
  messages: {
    name: 'O nome precisa ter 3 caracteres',
    email: 'Digite um e-mail válido',
    cpf: 'Digite um cpf válido',
  },

  focusWrongField: true,

  invalidFormCallback: function(errors) {
    console.log(errors);
  },
});


