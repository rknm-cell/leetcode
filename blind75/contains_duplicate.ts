class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // take the first number
        for (let i = 0; i < nums.length; i++){
            let arr = nums.slice(i)
            for (let j = i + 1; j < nums.length; j++){
                if (nums[i] === nums[j]){
                    return true
                }
            }
        }
        return false
    }
}