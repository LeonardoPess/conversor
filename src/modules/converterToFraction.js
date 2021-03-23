export default function initConverterToFraction() {
  const formCalc = document.querySelector('#fracoes');
  const dias = formCalc.querySelector('#dias3');
  const button = formCalc.querySelector('.button');
  const fra1 = document.querySelector('#fra16');
  const fra2 = document.querySelector('#fra15');
  const fra3 = document.querySelector('#fra14');
  const fra4 = document.querySelector('#fra13');
  // const fra5 = document.querySelector('#fra38');
  // const fra6 = document.querySelector('#fra25');
  // const fra7 = document.querySelector('#fra512');
  // const fra8 = document.querySelector('#fra1124');
  // const fra9 = document.querySelector('#fra12');
  // const fra10 = document.querySelector('#fra35');
  // const fra11 = document.querySelector('#fra23');

  function loading(isLoading) {
    (isLoading) ? button.setAttribute('disabled', true) : button.removeAttribute('disabled');
  }

  function converter() {
    let diasValue = Number(dias.value);
    fra1.innerHTML = Math.floor(diasValue / 6) + ' Dias';
    fra2.innerHTML = Math.floor(diasValue / 5) + ' Dias';
    fra3.innerHTML = Math.floor(diasValue / 4) + ' Dias';
    fra4.innerHTML = Math.floor(diasValue / 3) + ' Dias';
    // fra5.innerHTML = Math.floor((diasValue * 3) / 8);
    // fra6.innerHTML = Math.floor((diasValue * 2) / 5);
    // fra7.innerHTML = Math.floor((diasValue * 5) / 12);
    // fra8.innerHTML = Math.floor((diasValue * 11) / 24);
    // fra9.innerHTML = Math.floor(diasValue / 2);
    // fra10.innerHTML = Math.floor((diasValue * 3) / 5);
    // fra11.innerHTML = Math.floor((diasValue * 2) / 3);
  }

  function handleSubmit(event) {
    event.preventDefault();
    loading(true);
    converter();
    loading(false);
  }

  formCalc.addEventListener('submit', handleSubmit);
}
