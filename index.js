fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (!Array.isArray(collection)) {
        for (key in collection) {
          callback(collection[key], key, collection)
        }
      } else {
        for (el of collection) {
          callback(el, el.index, collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      if (!Array.isArray(collection)) {
        var newCollection = []
        for (key in collection) {
          newCollection.push(callback(collection[key], key, collection))
        }
      } else {
        var newCollection = []
        for (el of collection) {
          newCollection.push(callback(el, el.index, collection))
        }
      }
      return newCollection
    },

    reduce: function(collection, callback, accumulator=0) {
      for (element of collection) {
        accumulator = callback(accumulator, element, collection)
      }
      return accumulator
    },

    find: function(collection, predicate) {
      if (!Array.isArray(collection)) {
        for (key in collection) {
          if (predicate(collection[key])) {
            return collection[key]
          }
        }
      } else {
        for (el of collection) {
          if (predicate(el)) {
            return el
          }
        }
      }
    },

    filter: function(collection, predicate) {
      let newArr = []
      for (el of collection) {
        if (predicate(el)) {
          newArr.push(el)
        }
      }
      return newArr
    },

    size: function (collection) {
      let counter = 0
      if (!Array.isArray(collection)) {
        for (key in collection) {
          ++counter
        }
      } else {
        for (el of collection) {
          ++counter
        }
      }
      return counter
    },

    first: function (collection, n) {
      if (n) {
        return collection.slice(0, n)
      }
      return collection[0]
    },

    last: function (collection, n) {
      if (n) {
        return collection.slice(-n)
      }
      return collection[collection.length - 1]
    },

    compact: function (collection) {
      let newArr = []
      for (el of collection) {
        if (el) {
          newArr.push(el)
        }
      }
      return newArr
    },

    sortBy: function (array, callback) {
      let newArr = [...array]
      newArr = newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
      return newArr
    },

    uniq: function (array, isSorted=false, callback=((x)=>x)) {
      let newArr = []
      let callbackValues = []
      if (isSorted) {
        for (let i = 0; i < array.length; i++) {
          const currentIndex = i
          const prevIndex = i - 1
          if (callback(array[currentIndex]) === callback(array[prevIndex])) {
            array[currentIndex].remove()
          }
        }
      } else {
        for (el of array) {
          if (callbackValues.indexOf(callback(el)) > -1) {
          } else {
            callbackValues.push(callback(el))
            newArr.push(el)
          }
        }
      }
      return newArr
    },

    keys: function (object) {
      let keys = []
      for (key in object) {
        keys.push(key)
      }
      return keys
    },

    values: function (object) {
      let values = []
      for (key in object) {
        values.push(object[key])
      }
      return values
    },

    functions: function (object) {
      let functions = []
      for (key in object) {
        if (typeof object[key] === 'function') {
          functions.push(key)
        }
      }
      let sortedFunctions = functions.sort( (a, b) => a - b)
      return sortedFunctions
    },

    // flatten: function(array){
    //   let flat = []
    //   function recursiveIterator(array){
    //     for (el of array){
    //       if (Array.isArray(el)) {
    //         recursiveIterator(el)
    //       } else {
    //         flat.push(el)
    //         recursiveIterator(el)
    //       }
    //     }
    //   }
    //   return flat
    // }
  }
})()

fi.libraryMethod()
