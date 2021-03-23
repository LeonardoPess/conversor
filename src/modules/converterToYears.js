export default function initConverterToYears() {
  const formCalc = document.querySelector('#daysToYears');
  const dias = formCalc.querySelector('#dias2');
  const resultBox = formCalc.querySelector('.result');
  const button = formCalc.querySelector('.button');

  function loading(isLoading) {
    (isLoading) ? button.setAttribute('disabled', true) : button.removeAttribute('disabled');
  }

  function converter() {
    let diasValue = Number(dias.value);
    if (diasValue < 30) {
      (diasValue === 1) ? diasValue += ' DIA' : diasValue += ' DIAS';
    } else if (diasValue >= 30 && diasValue < 365) {
      let dias = diasValue % 30;
      if (dias !== 0) {
        (dias === 1) ? dias = ' E ' + diasValue % 30 + ' DIA' : dias = ' E ' + diasValue % 30 + ' DIAS';
      } else {
        dias = '';
      }
      let meses = Math.floor(diasValue / 30);
      (meses === 1) ? meses += ' MES' : meses += ' MESES';
      diasValue = meses + dias;
    } else if (diasValue >= 365) {      
      let anos =  Math.floor(diasValue / 365);
      (anos === 1) ? anos += ' ANO' : anos += ' ANOS';
      let meses = Math.floor((diasValue % 365) / 30);
      if (meses !== 0) {
        (meses === 1) ? meses = ' E ' + meses + ' MES' : meses = ' E ' + meses + ' MESES';
      } else {
        meses = '';
      }
      let dias = Math.floor((diasValue % 365) % 30);
      if (dias !== 0) {
        (dias === 1) ? dias = ' E ' + dias + ' DIA' : dias = ' E ' + dias + ' DIAS';
      } else {
        dias = '';
      }
      diasValue = anos + meses + dias;
    }
    return diasValue;
  }

  function handleSubmit(event) {
    event.preventDefault();
    loading(true);
    let result = converter();
    resultBox.innerHTML = result;
    loading(false);
  }

  formCalc.addEventListener('submit', handleSubmit);
}
