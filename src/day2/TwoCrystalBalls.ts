//given two crystal balls, find the lowest floor that will break the ball
//if the ball breaks, it will break for all floors above it

//to improve a linear search time complexity,
//we can jump the squart root of N instead of halving it


export default function two_crystal_balls(breaks: boolean[]): number {

    //the constant jmpAmount will jump Sqrt(the length of "breaks" array)
    //to avoid the worst case of O(N) time complexity
    //using Math.floor to round down and avoid out of bounds
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    //we set the first jump to the square root of N
    let i = jmpAmount;
    
    
    //check for breaks and jump by the jmpAmount
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    //if the ball breaks at the first floor, return to 0
    //we jump back by the jmpAmount to find the floor that breaks the ball
    i -= jmpAmount;

    //we then linear search from that floor to find the lowest floor that breaks the ball
    for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i){
        if (breaks[i]) {
            return i; //return i, the lowest floor that breaks the ball
        }
    }

    return -1;
}

//Big O: O(sqrt(N))
//Space Complexity: O(1)