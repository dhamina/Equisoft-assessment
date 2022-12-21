export const sortNumbers= (values)=>{
    return values.sort(function (a, b) {
        return a - b;
      });
}

export const filterNumbers = (type,sorted)=>{
    switch (type) {
        case "big":
          return [sorted[sorted.length - 1]];
        case "small":
          return [sorted[0]];
        case "even":
          let evens = sorted.filter((number) => number % 2 === 0);
          return evens;
        case "odd":
          let odds = sorted.filter((number) => number % 2 !== 0);
          return odds;
        case "positive":
          let positive = sorted.filter((number) => Math.sign(number) === 1);
          return positive;
        case "negative":
          let negative = sorted.filter((number) =>  Math.sign(number) === -1);
          return negative;
        default:
    }
}