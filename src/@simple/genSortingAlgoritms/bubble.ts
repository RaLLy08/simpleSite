import { wordForSort } from '../types';

function* bubbleSort(array: Array<wordForSort>) {
    const newState = [...array];
    let swapped;

    while (!swapped) {
        swapped = true;
        for (let i = 0; i < newState.length - 1; i++) {

            if (newState[i + 1].index < newState[i].index) {
                [ newState[i], newState[i + 1] ] = [ newState[i + 1], newState[i] ];
                swapped = false;
                
                yield [...newState];
            }
        }
    }

    return newState;
}

export default bubbleSort;