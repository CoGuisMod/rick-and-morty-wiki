export default function getRandomCharacterIds() {
  const min = 1;
  const max = 826;
  const numbers = [];

  for (let index = 0; index < 10; index++) {
    const number = Math.floor(Math.random() * (max - min) + min);
    numbers.push(number);
  }

  return numbers;
}
