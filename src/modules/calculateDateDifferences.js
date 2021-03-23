export default function initCalculateDateDifferences() {
  const formCalc = document.querySelector('#formDateDifferences');
  const data1 = formCalc.querySelector('#data1');
  const data2 = formCalc.querySelector('#data2');
  const resultBox = document.querySelector('.resultDateDifferences');
  const button = document.querySelector('[form="formDateDifferences"]');

  function loading(isLoading) {
    (isLoading) ? button.setAttribute('disabled', true) : button.removeAttribute('disabled');
  }

  function converter() {
    const data1Value = new Date(data1.value);
    const data2Value = new Date(data2.value);	

    const timeDiff = Math.abs(data1Value.getTime() - data2Value.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
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
