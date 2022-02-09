const clientName = [
  {
    name: "Mr Jalish",
    birthYear: 1993,
    currentYear: 2022,
    district: "Dhaka",
    postNo: 3456,
    priority: 1,
  },
  {
    name: "Mr Danish",
    birthYear: 1994,
    currentYear: 2022,
    district: "Sylhet",
    postNo: 3460,
    priority: 2,
  },
  {
    name: "Mrs Taslima",
    birthYear: 1998,
    currentYear: 2022,
    district: "Borishal",
    postNo: 1215,
    priority: 3,
  },
  {
    name: "Mrs Tamanna",
    birthYear: 1991,
    currentYear: 2022,
    district: "Sylhet",
    postNo: 1212,
    priority: 4,
  },
  {
    name: "Mr Khalid",
    birthYear: 2005,
    currentYear: 2022,
    district: "Rajshahi",
    postNo: 2012,
    priority: 5,
  },
];
const cardDistribution = (clientName) => {
  const cardsNumber = clientName.map((card, i) => {
    const count = ++i;
    const srtLength = String(count).length;
    const numbers = 6 - srtLength;
    const zeros = Array(numbers).fill(0).join("");
    const newZeros = String(zeros) + String(count);

    return {
      cardNumber: card.district
        .substring(0, 2)
        .toUpperCase()
        .concat(card.currentYear.toString().substr(-2))
        .concat(card.postNo.toString().substr(0, 2))
        .concat(card.birthYear)
        .concat(newZeros),
      gift: count % 2 == 0 ? "R" : "W",
      priority: card.priority,
    };
  });
  return cardsNumber;
};
const cards = cardDistribution(clientName);
console.log(cards);
