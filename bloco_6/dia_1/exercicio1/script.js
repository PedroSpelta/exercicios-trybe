/* eslint-disable require-jsdoc */

const estados = {
  'Acre': 'AC',
  'Alagoas': 'AL',
  'Amapá': 'AP',
  'Amazonas': 'AM',
  'Bahia': 'BA',
  'Ceará': 'CE',
  'Distrito Federal': 'DF',
  'Espírito Santo': 'ES',
  'Goiás': 'GO',
  'Maranhão': 'MA',
  'Mato Grosso': 'MT',
  'Mato Grosso do Sul': 'MS',
  'Minas Gerais': 'MG',
  'Pará': 'PA',
  'Paraíba': 'PB',
  'Paraná': 'PR',
  'Pernambuco': 'PE',
  'Piauí': 'PI',
  'Rio de Janeiro': 'RJ',
  'Rio Grande do Norte': 'RN',
  'Rio Grande do Sul': 'RS',
  'Rondônia': 'RO',
  'Roraima': 'RR',
  'Santa Catarina': 'SC',
  'São Paulo': 'SP',
  'Sergipe': 'SE',
  'Tocantins': 'TO',
};

function verifyDate() {
  const date = document.querySelector('#data');
  const dateL = date.value.split('/');
  let errorMsg = '';
  if (dateL[0].length!==2 || dateL[1].length!==2 || dateL[2].length!==4) {
    errorMsg += 'Formato incorreto de data\nLembre que deve ser do tipo (dd/mm/aaaa)';
  } else {
    if (dateL[0] > 31 || dateL[0] < 1) {
      console.log('dateL[0]');
      errorMsg += 'O seu dia não está no formato correto\n';
    }
    if (dateL[1] > 12 || dateL[1] < 1) {
      console.log('mes');
      errorMsg += 'O seu mês não está no formato correto\n';
    }
    if (dateL[2] < 1) {
      console.log('ano');
      errorMsg += 'O seu ano não está no formato correto';
    }
    console.log(errorMsg.length);
  }
  return errorMsg;
  // if (errorMsg.length > 0) {
  //   window.alert(errorMsg);
  // }
}

function verifyEmail() {
  const mail = document.querySelector('#email');
  const mR = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (mail.match(mR) === null) {
    return 'O seu email não é válido';
  }
}

function verifyAll(event) {
  event.preventDefault();
  verifyDate();
  verifyEmail();
  verifyRequired();
}

function createStates() {
  const selectState = document.querySelector('#input-estado');
  Object.entries(estados).map((item) =>{
    const estado = document.createElement('option');
    estado.value = item[1];
    estado.innerText = item[0];
    selectState.appendChild(estado);
  });
}

function verifyRequired() {

}

window.onload = () => {
  createStates();
};
