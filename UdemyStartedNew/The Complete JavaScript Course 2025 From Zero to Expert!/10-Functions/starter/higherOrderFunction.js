const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');

  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original String ${str}`);
  console.log(`Tranformed string ${fn(str)}`);
};

transformer('Javascript is the Best', upperFirstWord);
transformer('Javascript is the Best', oneWord);

const greet = function (greetings) {
  return function (name) {
    console.log(`${greetings} ${name}`);
  };
};

const greetHey = greet('Hey');
greetHey('Jonas');

greet('Hello')('Modi');

const greetingArray = greetings => name => console.log(`${greetings} ${name}`);

greetingArray('Howdy')('Modi');
