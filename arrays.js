var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray() {
  const fish = [1];
  return ['foo', ...fish];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}
