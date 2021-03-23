export default function initConverterToDays() {
  const formCalc = document.querySelector('#yearsToDays');
  const anos = formCalc.querySelector('#anos');
  const meses = formCalc.querySelector('#meses');
  const dias = formCalc.querySelector('#dias');
  const resultBox = formCalc.querySelector('.result');
  const button = formCalc.querySelector('.button');

  function loading(isLoading) {
    (isLoading) ? button.setAttribute('disabled', true) : button.removeAttribute('disabled');
  }

  function converter() {
    let anosValue = Number(anos.value * 365);
    let mesesValue = Number(meses.value * 30);
    let diasValue = Number(dias.value);
    return anosValue + mesesValue + diasValue + ' DIAS';
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('hi');

    loading(true);
    let result = converter();
    resultBox.innerHTML = result;
    loading(false);
  }

  formCalc.addEventListener('submit', handleSubmit);
}
