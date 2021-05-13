import { IndexedValueType, SortingGeneratorInterface, StepPointType } from "./types";

export function* selectionSort(array: Array<IndexedValueType>, stepPoint: StepPointType = 'n'): SortingGeneratorInterface {
    const newState = [...array];

    for (let i = 0; i < newState.length; i++) {
        for (let j = i + 1; j < newState.length; j++) {
            if (newState[j].index < newState[i].index) {
                
                [ newState[j], newState[i] ] = [ newState[i], newState[j] ];
                
                if (stepPoint === 'n^2&swap') yield [...newState];
            }

            if (stepPoint === 'n^2') yield [...newState];
        }
        if (stepPoint === 'n') yield [...newState];
    }
    return newState;
}

export function* bubbleSort(array: Array<IndexedValueType>, stepPoint: StepPointType = 'n'): SortingGeneratorInterface {
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
