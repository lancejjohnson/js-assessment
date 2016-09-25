exports = typeof window === 'undefined' ? global : window;

function divisibleBy(dividend, divisor) {
  return dividend % divisor === 0;
}

exports.flowControlAnswers = {
  fizzBuzz: function(num) {
    if (typeof num !== 'number') {
      return false;
    }

    var answer;

    if (divisibleBy(num, 3) && divisibleBy(num, 5)) {
      answer = 'fizzbuzz';
    } else if (divisibleBy(num, 3)) {
      answer = 'fizz';
    } else if (divisibleBy(num, 5)) {
      answer = 'buzz';
    } else {
      answer = num;
    }

    return answer;
  }
};
