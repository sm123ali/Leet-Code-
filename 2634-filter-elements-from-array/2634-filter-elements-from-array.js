/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */function filter(arr, fn) {
    const filteredArr = []; // Initialize an empty array to store results.
    
    for (let i = 0; i < arr.length; i++) { // Loop through each element in the input array.
        if (fn(arr[i], i)) { // Call the filtering function with the current element and its index.
            filteredArr.push(arr[i]); // If fn returns true, add the element to the filtered array.
        }
    }
    
    return filteredArr; // Return the final filtered array.
}
