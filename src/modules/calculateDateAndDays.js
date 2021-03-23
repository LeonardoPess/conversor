export default function initCalculateDateAndDays() {
  const formCalc = document.querySelector('#formDate');
  const data = formCalc.querySelector('#data');
  const dias = formCalc.querySelector('#dias4');
  const resultBox = document.querySelector('.resultDateAndDays');
  const button = document.querySelector('[form="formDate"]');
  const changeCalculate = document.querySelector('#changeCalculate');

  function loading(isLoading) {
    (isLoading) ? button.setAttribute('disabled', true) : button.removeAttribute('disabled');
  }

  function converter() {
    let inicial = data.value;
    let diasVal = parseInt(dias.value);
    let partes = inicial.split("-");
    let ano = partes[0];
    let mes = partes[1] - 1;
    let dia = partes[2];

    inicial = new Date(ano, mes, dia);
    let final = new Date(inicial);
    if (changeCalculate.value === 'sum') {
      final.setDate(final.getDate() + diasVal)
    } else {
      final.setDate(final.getDate() - diasVal);
    }

    let dd = ("0" + final.getDate()).slice(-2);
    let mm = ("0" + (final.getMonth() + 1)).slice(-2);
    let y = final.getFullYear();

    let dataformatada = dd + '/' + mm + '/' + y;
    return dataformatada;
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
