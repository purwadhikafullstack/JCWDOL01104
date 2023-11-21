export const generateOtp = () => {
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let num = [];
  for (let i = 0; i < 6; i++) {
    num.push(randomIntFromInterval(0, 9));
  }
  return num.join("");
};
