export default function bs_list(haystack: number[], needle: number): boolean {

    let lo = 0;
    let hi = haystack.length;



    do {
        //getting the middle index (high - low) and adding the offset (low)
        const m  = Math.floor(lo + (hi - lo) / 2);
        const v = haystack[m];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            hi = m;
        } else {
            //low has to be at least 1 more than the middle
            //low is always inclusive, high is always exclusive
            lo = m + 1;
        } 
        
    } while(lo < hi){
        
    }
    return false;
}