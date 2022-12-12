export default function getRandomEpisodeIds() {
  const min = 1;
  const max = 51;
  const numbers = [];

  for (let index = 0; index < 15; index++) {
    const number = Math.floor(Math.random() * (max - min) + min);
    numbers.push(number);
  }

  return numbers;
}
