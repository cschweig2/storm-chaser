export function startDate(response, i) {
  let startDate = response.events[i].geometry[0].date.slice(0, 10);
  return startDate;
}

export function endDate(response, i) {
  let arrayLength = response.events[i].geometry["length"];
  let endDate = response.event[i].geometry[arrayLength - 1].date.slice(0, 10);
  return endDate;
}