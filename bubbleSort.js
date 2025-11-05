/**
 * Sorts an array using the bubble sort algorithm.
 *
 * The function does not mutate the original array. You may optionally pass a
 * comparator that follows the same contract as Array.prototype.sort.
 *
 * @template T
 * @param {T[]} array - The values to sort.
 * @param {(a: T, b: T) => number} [compareFn] - Optional comparator.
 * @returns {T[]} A new, sorted array.
 */
function bubbleSort(array, compareFn) {
  const arr = Array.isArray(array) ? array.slice() : [];
  const compare =
    typeof compareFn === 'function'
      ? compareFn
      : (a, b) => {
          if (a === b) return 0;
          return a > b ? 1 : -1;
        };

  let swapped = false;
  let end = arr.length;

  if (end < 2) {
    return arr;
  }

  do {
    swapped = false;
    for (let i = 1; i < end; i += 1) {
      if (compare(arr[i - 1], arr[i]) > 0) {
        const temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
        swapped = true;
      }
    }
    end -= 1;
  } while (swapped);

  return arr;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = bubbleSort;
} else if (typeof window !== 'undefined') {
  window.bubbleSort = bubbleSort;
}

