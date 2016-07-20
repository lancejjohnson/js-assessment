exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return (/\d+/).test(str);
  },

  containsRepeatingLetter: function(str) {
  },

  endsWithVowel: function(str) {
    return (/[aeiou]$/i).test(str);
  },

  captureThreeNumbers: function(str) {
    var capture = (/(\d{3})/).exec(str);
    return capture ? capture[0] : false;
  },

  matchesPattern: function(str) {
    return (/^\d{3}-\d{3}-\d{4}$/).test(str);
  },

  isUSD: function(str) {

  }
};
