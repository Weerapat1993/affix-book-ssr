const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const random = (mn, mx) => Math.floor(Math.random() * (mx - mn + 1) + mn);
const randomInArray = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  } else if (arr.length === 0) {
    return null;
  }
  return arr[random(1, arr.length) - 1];
};
export {
  numberWithCommas as n,
  randomInArray as r
};
