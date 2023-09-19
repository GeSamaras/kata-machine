export default function bubble_sort(arr: number[]): void {

    //we iterate through the array
    //each iteration will always have the largest element at the end
    //we can then reduce the size of the array by 1
    for (let i = 0; i < arr.length; ++i) {

        //this inner loop will go to N-1, where the largest element is
        //and since the last item is sorted, we can reduce the size of the array by 1
        for (let j = 0 ; j < arr.length - 1 - i; ++ j){
            //if the current element is greater than the next element
            //we swap them
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j + 1] = tmp;
            }
        }
    }
//Big O: O(N^2)
//Space Complexity: O(1)
}