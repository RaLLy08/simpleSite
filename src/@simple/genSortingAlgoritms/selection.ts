import { objectForSort, SortingGenerator } from "./types";


// Array<wordForSort>
function* selectionSort(array: Array<objectForSort>): SortingGenerator {
    const newState = [...array];

    for (let i = 0; i < newState.length; i++) {
        for (let j = i + 1; j < newState.length; j++) {
            if (newState[j].index < newState[i].index) {
                
                [ newState[j], newState[i] ] = [ newState[i], newState[j] ];
                
                yield [...newState];
            }
        }
    }
    return newState;
}

export default selectionSort;