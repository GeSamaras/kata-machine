function walk(
    graph: WeightedAdjacencyList, 
    curr: number, 
    needle: number, 
    seen: boolean[], 
    path: number[]): boolean {
        if (seen[curr]) {
            return false;
        }
        seen[curr] = true;
        path.push(curr);
        
        
        if (curr === needle) {
            return true;
        }


        const list = graph[curr];
        for (let i = 0; i < list.length; ++i) {
            const edge = list[i];
            if (walk(graph, edge.to, needle, seen, path)) {
                return true;
            }
        }

        path.pop();

        return false;
    }



    export default function dfs(
    graph: WeightedAdjacencyList,
    source: number, 
    needle: number): number[] | null {
    
    const seen: boolean[] = new Array(graph.length).fill(false);
    const path: number[] = [];

    walk(graph, source, needle, seen, path);

    if (path.length === 0) {
        return null;
    }
    return path;
}

//brief recursion explanation
// 3 values in a recursive functions
// 1st is the return address: everytime you call a function, you need to know where it came from
// 2nd is the return value: the value that the function returns
// 3rd is the arguments: the values that the function takes in

// after the function is called, the return address is pushed onto the call stack
// until the recursive calls meet the base case, the return value is not pushed onto the call stack
// then the values are pushed onto the call stack in the order of the arguments
// we stop recursing, undo the function stack, and return the value.

// important tool for pathing algorithms
// recursion can be broken down into 3 steps:
// 1. you can have a pre, which means you can do something before you recurse (i.e. n-- or n++)
// 2. we then recurse
// 3. we then have a post, which means we do something after we recurse (i.e. n-- or n++)
