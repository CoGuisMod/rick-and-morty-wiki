export default function getRandomLocationIds() {
  const min = 1;
  const max = 126;
  const numbers = [];

  for (let index = 0; index < 15; index++) {
    const number = Math.floor(Math.random() * (max - min) + min);
    numbers.push(number);
  }

  return numbers;
}
