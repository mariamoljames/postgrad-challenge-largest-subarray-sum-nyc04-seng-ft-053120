
function largestSubarraySum(arr){
    let maxSum = 0 
    let currentSum = 0
    for (let i=0; i<arr.length; i++){
        if (currentSum <= 0){
            currentSum = arr[i]
        }else{
        currentSum += arr[i]
        }
    if (currentSum > maxSum){
        maxSum = currentSum
    }
    }      
    return maxSum
}