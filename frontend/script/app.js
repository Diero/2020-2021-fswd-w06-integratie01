'use strict';
let currentDestinationID; // is geen DOM reference maar globale variabele

//#region ***  DOM references                           ***********
let htmlDestination, htmlRoute, htmlSelectedCity, htmlDestinationSelect, htmlAdaptTrain;
//#endregion

//#region ***  Callback-Visualisation - show___         ***********
//#endregion

//#region ***  Callback-No Visualisation - callback___  ***********
//#endregion

//#region ***  Data Access - get___                     ***********
//#endregion

//#region ***  Event Listeners - listenTo___            ***********
//#endregion

//#region ***  Init / DOMContentLoaded                  ***********
const init = function () {
  console.log('🚂', 'https://www.youtube.com/watch?v=8oVTXSntnA0');

  // Get some DOM, we created empty earlier.
  htmlDestination = document.querySelector('.js-destinations');
  htmlRoute = document.querySelector('.js-trajects');
  htmlSelectedCity = document.querySelector('.js-departure');
  htmlDestinationSelect = document.querySelector('.js-add-bestemming');
  htmlAdaptTrain = document.querySelector('.js-adapttrain');
};

document.addEventListener('DOMContentLoaded', init);
//#endregion
