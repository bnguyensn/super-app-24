export function getRandomUserName() {
  const min = 114564;
  const max = 857029;
  const n = Math.floor(min + Math.random() * (max - min));

  return `Anon${n}`;
}
