exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    return arr.reduce((sum, value) => sum + value, 0);
  },

  remove: function(arr, item) {
    return arr.filter((elem) => elem !== item);
  },

  removeWithoutCopy: function(arr, item) {
    while( arr.indexOf(item) !== -1 )
      arr.splice(arr.indexOf(item), 1);

    return arr;
  },

  append: function(arr, item) {
    return arr.push(item) && arr;
  },

  truncate: function(arr) {
    return arr.pop() && arr;
  },

  prepend: function(arr, item) {
    return arr.unshift(item) && arr;
  },

  curtail: function(arr) {
    return arr.shift() && arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    return arr.reduce(function(result, elem, idx) {
      idx == index ? result.push(item, elem) : result.push(elem);
      return result;
    }, []);
  },

  count: function count(arr, item) {
    return arr.reduce(function(count, element) {
      if (item == element) count++;
      return count;
    }, 0);
  },

  duplicates: function(arr) {
    return arr.reduce(function(dups, element) {
      var count = arr.reduce(function(count, item) {
        if (item == element) count++;
        return count;
      }, 0);

      if (count > 1 && dups.indexOf(element) == -1)
        dups.push(element);

      return dups;
    }, []);
  },

  square: function(arr) {
    return arr.map((elem) => elem * elem);
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce(function(occurrences, elem, idx) {
      if (target == elem) occurrences.push(idx);
      return occurrences;
    }, []);
  }
};
