function scokbli(x) {
  let string = "";
  const one = "()";
  const two = "({})";
  const three = "({[]})";
  const threes = Math.floor(x / 3);
  const twos = Math.floor((x - threes * 3) / 2);
  const ones = Math.floor((x - twos * 2 - threes * 3) / 1);
  for (let i = 0; i < threes; i++) {
    string += three;
  }
  for (let i = 0; i < twos; i++) {
    string += two;
  }
  for (let i = 0; i < ones; i++) {
    string += one;
  }
  return string;
}

console.log(scokbli(5));
