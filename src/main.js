import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import NASAService from './services/NASAService.js';

function getElements(response) {
  if (response.events) {
    $('.showCoordinates').text(`The coordinates are ${response.events[0].geometry[0].coordinates}`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  } 
}

async function makeApiCall() {
  const response = await NASAService.getNASA();
  getElements(response);
}

$(document).ready(function() {
  $('#trackStorm').click(function() {
    makeApiCall();
  });
});