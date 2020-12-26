export default function converter(temperature) {
  return Math.round((temperature * 9) / 5 + 32);
}
