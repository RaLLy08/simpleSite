import { IndexedValueType, SortingGeneratorInterface, StepPointType } from "./types";


function* bubbleSort(array: Array<IndexedValueType>, stepPoint: StepPointType = 'n'): SortingGeneratorInterface {
    const newState = [...array];
    let swapped;

    while (!swapped) {
        swapped = true;
        for (let i = 0; i < newState.length - 1; i++) {

            if (newState[i + 1].index < newState[i].index) {
                [ newState[i], newState[i + 1] ] = [ newState[i + 1], newState[i] ];
                swapped = false;
                
                if (stepPoint === 'n^2&swap') yield [...newState];
            }

            if (stepPoint === 'n^2') yield [...newState];
        }
        if (stepPoint === 'n') yield [...newState];
    }

    return newState;
}

export default bubbleSort;