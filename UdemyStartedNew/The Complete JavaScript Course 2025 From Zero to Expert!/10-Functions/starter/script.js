'use strict';
const bookings = [];

const createBookings = function (flightNumber, numberPassengers = 134, price) {
  const bookings = { flightNumber, numberPassengers, price };
  console.log(bookings);
};

createBookings('LH123', 567);

const flight = 'LK357';
const jonas = {
  name: 'Jonas-Schemen',
  passport: 'B0071111',
};

const checkIn = function (flightNumber, passenger) {
  flightNumber = 'LH33';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 'B0071111') {
    console.log('Checked In');
  } else {
    console.log('Not Checked Ins');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const jessica = {
  firstName: 'Jesicca',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;

jessica.lastName = 'Davis';
console.log('Before', jessica);
console.log('After', marriedJessica);
