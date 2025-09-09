'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = ` <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    }${mov}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}€</div>
        </div>`;

    // console.log(value, key);
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const calcPrintBalance = movements => {
  const balance = movements.reduce((acc, currentElement, index, array) => {
    console.log(`Iteration ${index} :${acc}`);
    return acc + currentElement;
  }, 0);
  // return balance;
  labelBalance.textContent = `${balance} Euro`;
};

console.log(calcPrintBalance(account1.movements));

// const calcDisplaySummary = movements => {
//   const incomes = movements
//     .filter(movement => movement > 0)
//     .reduce((acc, mov) => {
//       return acc + mov, 0;
//     });

//   labelSumIn.textContent = `${incomes}`;
// };
const calcDisplaySummary = movements => {
  const incomes = movements
    .filter(movement => movement > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}`;

  //   const interest = movements
  //     .filter(mov => mov > 0)
  //     .map(deposit => (deposit * 1.2) / 100)
  //     .reduce((acc, int => acc + int, 0));
  //   labelSumInterest.textContent = interest;
  // };
  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = interest;
};
calcDisplaySummary(account1.movements);
// calcPr
// intBalance(account1.movements);
////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
//slice
console.log(array.slice(0, 2));

console.log(array.slice(-2));
//splice
console.log(array.slice(1, -3));
console.log(array.splice(1, 2));

//Reverse
const array1 = ['j', 'i', 'h', 'g', 'f'];

console.log(array1.reverse());
//Concat

const letters = array.concat(array1);
console.log(letters);

//Join
const array2 = [23, 45, 67];
//at
console.log(array2[0]);
console.log(array.at(-1));
console.log(array2.at(0));
//length
console.log(array1.length);
console.log('Rahul'.at(0));

//Lopping
console.log('---------------------For Of------------------');
for (const movement of movements) {
  console.log('Movement', movement);

  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You With drew ${Math.abs(movement)}`);
  }
}
console.log('---------------------For Of------------------');
for (const [i, movement] of movements.entries()) {
  console.log('Movement', movement);

  if (movement > 0) {
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  } else {
    console.log(` Movement ${i + 1} You With drew ${Math.abs(movement)}`);
  }
}
console.log('----------------------For Each-----------');

movements.forEach(movement => {
  console.log(movement);

  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You With drew ${Math.abs(movement)}`);
  }
});
movements.forEach((movement, index, array) => {
  console.log(array);
  console.log(movement);

  if (movement > 0) {
    console.log(`Movement ${index + 1} You deposited ${movement}`);
  } else {
    console.log(`You With drew ${Math.abs(movement)}`);
  }
});

const currencies1 = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies1.forEach((value, key, map) => {
  console.log('Value', value);
  console.log('Key', key);
  console.log('Map', map);
});

const euroToUsd = 1.1;
const movementsUsd = movements.map(
  (movement, index, array) => movement * euroToUsd
);

// console.log(movementsUsd);

const createUserNames = accs => {
  accs.forEach(acc => {
    console.log(acc);

    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => {
        return name[0];
      })
      .join('');
    // const user = acc
    //   .toLowerCase()
    //   .split(' ')
    //   .map(name => {
    //     return name[0];
    //   })
    //   .join('');

    // return user;
  });
};

createUserNames(accounts);
console.log(accounts);

// console.log(createUserNames(accounts));
// console.log(createUserNames('Steven William Thomas'));

// const user = userName
//   .toLowerCase()
//   .split(' ')
//   .map(name => {
//     return name[0];
//   })
//   .join('');

// console.log(user);

const deposit = movements.filter(movement => {
  return movement > 0;
});

console.log('Deposits', deposit);

console.log('Movements', movements);

// const balance = movements.reduce(
//   acc,
//   currentElement,
//   index,
//   array => {
//     return acc + currentElement;
//   },
//   0
// );
const balance = movements.reduce((acc, currentElement, index, array) => {
  console.log(`Iteration ${index} :${acc}`);
  return acc + currentElement;
}, 0);
console.log(balance);
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

console.log(max);
//const max = movements.reduce((acc, mov) => (acc > mov ? acc : mov), movements[0]);

// const max = movements.reduce((acc, mov) => Math.max(acc, mov), movements[0]);
const finalData = movements
  .filter(movement => movement > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);

// console.log('Final Data', finalData);
