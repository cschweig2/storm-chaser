export default function randomStorm(response) {
  let i = Math.floor(Math.random() * response.events.length);
  return i;
}