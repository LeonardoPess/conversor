export default function initChangeSlide() {
  const changeSlide = document.querySelector('.select-slides');
  const changeFra = document.querySelector('.select-fra');
  const changePer = document.querySelector('.select-per');
  const fra = document.querySelector('.fracao');
  const per = document.querySelector('.porcentagem');

  function handleClick(target) {
    const el =  Array.from(changeSlide.children);
    el.forEach(item => item.classList.remove('active'));
    target.classList.add('active');
  }

  function handleFra({ target }) {
    handleClick(target);
    per.style.display = "none";
    fra.style.display = "flex";
  }
  
  function handlePer({ target }) {
    handleClick(target);
    fra.style.display = "none";
    per.style.display = "flex";
  }

  changeFra.addEventListener('click', handleFra);
  changePer.addEventListener('click', handlePer);
}
