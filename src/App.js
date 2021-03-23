import initConverterToDays from './modules/converterToDays.js';
import initConverterToYears from './modules/converterToYears.js';
import initConverterToFraction from './modules/converterToFraction.js';
import initConverterToPercentage from './modules/converterToPercentage.js';
import initCalculateDateAndDays from './modules/calculateDateAndDays.js';
import initCalculateDateDifferences from './modules/calculateDateDifferences.js';
import initChangeForm from './modules/changeForm.js';
import initChangeSlide from './modules/changeSlide.js';

const url = window.location.pathname;

if (url === '/conversor-projeto/' || url === '/conversor-projeto/index.html') {
  initConverterToDays();
  initConverterToYears();
  initConverterToFraction();
  initConverterToPercentage();
  initCalculateDateAndDays();
  initCalculateDateDifferences();
  initChangeForm();
  initChangeSlide();
}
