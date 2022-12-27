let idealSleep = [["Monday"], ["Tuesday"], ["Wednesday"], ["Thursday"], ["Friday"]];
let actualSleep = [[1,2], [1,2], [1,2], [1,2], [1,2]];

for (let step = 0; step < 5; step++) {
  console.log("Enter ideal sleep hours for " + idealSleep[step] + ':');
  idealSleep[step][1] = Math.floor(Math.random() * (13-6) + 6);
}
console.log(idealSleep);

for (let step = 0; step < 5; step++) {
  console.log('Enter actual sleep hours for ' + idealSleep[step][0] + ':');
  actualSleep[step][0] = idealSleep[step][0];
  actualSleep[step][1] = Math.floor(Math.random() * 13);
}
console.log(actualSleep);

function calculateSleep(ideal, actual) {
  let total = ideal - actual;
  if (total > 0) {
    let result = `you missed ${total} hours of sleep.`;
    return result;
  } else if (total === 0) {
    let result = `you got the ideal amount of sleep.`;
    return result;
  } else if (total < 0) {
    total = Math.abs(total);
    let result = `you over-slept ${total} hours.`;
    return result;
  } else {
    console.log('Invalid self-destruct initiated!');
  }
}

for (let step = 0; step < 5; step++) {
  console.log('On ' + idealSleep[step][0] + ' ' + calculateSleep(idealSleep[step][1], actualSleep[step][1]));
}