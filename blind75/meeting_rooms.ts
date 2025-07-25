/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        // we need to check if intervals overlap
        // so we can go through each pair of numbers
        // check each pair if they have an overlap with another pair
        // each pair defines a range, and check if another pair
        // falls within that range

        //iterate through array of intervals
        for (let i = 0; i < intervals.length ; i++){
            //check if any other intervals share an overlap
            for(let j = i + 1; j < intervals.length; j++){
                if (intervals[i].start === intervals[j].start ){
                    return false
                }
                if (intervals[i].start < intervals[j].start && intervals[i].end > intervals[j].start){
                    return false
                }
               
            }
        }

        return true

        
    }
}
