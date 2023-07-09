/* merge sort: 
* combination of two things: merging and sorting 
* it breaks down array into two until 1 element in each and then sort them while backtracking in recursion
*/

// this funtion would merge two sorted arrays
function merge(arr1,arr2) {
    let results = []
    let pointer1 = 0
    let pointer2 = 0
    while(pointer1 < arr1.length && pointer2 < arr2.length) {
        if(arr1[pointer1] <= arr2[pointer2]) {
            results.push(arr1[pointer1])
            pointer1++
        }
        else {
            results.push(arr2[pointer2])
            pointer2++
        }
    }
    // if odd length of any merge remaining
    results = [...results,...arr1.slice(pointer1),...arr2.slice(pointer2)]
    return results
}

// this would break an array into two recursively
function mergeSort(arr) {
    if(arr.length <= 1) {return arr}
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left,right)
}

mergeSort([10,20,40,15,30])
