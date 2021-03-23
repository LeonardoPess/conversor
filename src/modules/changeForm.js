export default function initChangeForm() {
  const changeConversor = document.querySelector('#changeConversor');
  const formYearsToDays = document.querySelector('#yearsToDays');
  const formDaysToYears = document.querySelector('#daysToYears');

  function handleChange(event) {
    event.preventDefault();
    if (event.target.value === 'daysToYears') {
      formYearsToDays.style.display = 'none';
      formDaysToYears.style.display = 'block';
    } else {
      formYearsToDays.style.display = 'block';
      formDaysToYears.style.display = 'none';
    }
  }

  changeConversor.addEventListener('change', handleChange);
}
