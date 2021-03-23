export default function initConverterToPercentage() {
  const formCalc = document.querySelector('#fracoes');
  const dias = formCalc.querySelector('#dias3');
  const button = formCalc.querySelector('.button');
  const por1 = document.querySelector('#por16');
  const por2 = document.querySelector('#por20');
  const por3 = document.querySelector('#por25');
  const por4 = document.querySelector('#por30');
  // const por5 = document.querySelector('#por40');
  // const por6 = document.querySelector('#por50');
  // const por7 = document.querySelector('#por60');
  // const por8 = document.querySelector('#por70');

  function loading(isLoading) {
    (isLoading) ? button.setAttribute('disabled', true) : button.removeAttribute('disabled');
  }

  function converter() {
    let diasValue = Number(dias.value / 100);
    por1.innerHTML = (diasValue * 16).toFixed(2) + ' Dias';
    por2.innerHTML = (diasValue * 20).toFixed(2) + ' Dias';
    por3.innerHTML = (diasValue * 25).toFixed(2) + ' Dias';
    por4.innerHTML = (diasValue * 30).toFixed(2) + ' Dias';
    // por5.innerHTML = (diasValue * 40).toFixed(2);
    // por6.innerHTML = (diasValue * 50).toFixed(2);
    // por7.innerHTML = (diasValue * 60).toFixed(2);
    // por8.innerHTML = (diasValue * 70).toFixed(2);
  }

  function handleSubmit(event) {
    event.preventDefault();
    loading(true);
    converter();
    loading(false);
  }

  formCalc.addEventListener('submit', handleSubmit);
}
