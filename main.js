myArray = [
  "hello",
  "world",
  14,
  true,
  "My work",
  null,
  "Ukraine",
  241,
  "457",
  false,
];
function filterBy(arr, type) {
  const newArray = arr.filter((item) => typeof item !== type);
  return newArray;
}
console.log(filterBy(myArray,"string"));
