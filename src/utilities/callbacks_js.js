export default {
  name: "JavaScript Callbacks",
  data: [
    {
      id: 0,
      name: "Callbacks",
      language: "js",
      tabs: [
        {
          name: "Callbacks",
          data:
`// Code Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
`
        },
        {
          name: "Promises",
          data:
`// Code Source: https://scotch.io/tutorials/javascript-promises-for-dummies
/_ ES6 _/
const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise((resolve, reject) => { // fat arrow
  if (isMomHappy) {
    const phone = { brand: 'Samsung', color: 'black' };
    resolve(phone);
  } else {
    const reason = new Error('mom is not happy');
    reject(reason);
  }
});

const showOff = function (phone) {
    const message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';
    return Promise.resolve(message);
};

// call our promise
const askMom = function () {
  willIGetNewPhone
    .then(showOff)
    .then(fulfilled => console.log(fulfilled)) // fat arrow
    .catch(error => console.log(error.message)); // fat arrow
};

askMom();
`
        },
        {
          name: "Async/Await",
          data:
`// Code Source: https://scotch.io/tutorials/javascript-promises-for-dummies
/_ ES7 _/
const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    const phone = { brand: 'Samsung', color: 'black' };
    resolve(phone);
  } else {
    const reason = new Error('mom is not happy');
    reject(reason);
  }
});

// 2nd promise
async function showOff(phone) {
  return new Promise((resolve, reject) => {
    var message = 'Hey friend, I have a new ' +
        phone.color + ' ' + phone.brand + ' phone';
    resolve(message);
  });
};

// call our promise
async function askMom() {
  try {
    console.log('before asking Mom');
    let phone = await willIGetNewPhone;
    let message = await showOff(phone);
    console.log(message);
    console.log('after asking mom');
  }
  catch (error) {
    console.log(error.message);
  }
}

(async () => {
    await askMom();
})();
`
        }
      ]
    }
  ]
};
