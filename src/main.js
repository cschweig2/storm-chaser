import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import NASAService from './services/NASAService.js';
import randomStorm from './random.js';
import startDate from './getDates.js';
import MagStormService from './services/MagStormService.js';
// import getMap from './getMap.js';


function getElements(response) {
  if (response.events) {
    
    $('.showDates').text(`The coordinates are ${response.events[0].geometry[0].date}`);
    $('.showTitle').text(`${response.events[i].title}`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  } 
}

async function callNASA() {
  const response = await NASAService.getNASA();
  // chain promises somewhere around here 
  i = randomStorm(response);

  getElements(response);
}

async function makeApiCall() {
  const magStormResponse = await MagStormService.getMagStorm(startDate);
  getElements(magStormResponse);
}

$(document).ready(function() {
  // $('#map').push(`${map}`);
  let i;
  $('#trackStorm').click(function() {
    callNASA();
    makeApiCall();
  });
  
  let startDate = startDate(response, i);
  console.log(startDate);
});