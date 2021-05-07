    // const sortedText: Array<WordForSortType> = Array.from(text).map((el, i) => ({ value: el, index: i }));
    // const mixedText: Array<WordForSortType> = sortedText.sort(() => Math.random() - 0.5);

import { IndexedValueType } from "./types";

type MixedTypes = 'random' | 'reverse' // ...

const getIndexedString = (str: string): Array<IndexedValueType> => Array.from(str).map((el, i) => ({ value: el, index: i }));

export const getMixedIndexedString = (str: string, type: MixedTypes): Array<IndexedValueType> => {
    const indexedStr = getIndexedString(str);

    switch (type) {
        case 'reverse':
            
            break;
    
        case 'random':

            return randomMix(indexedStr);
    }
    return [];
} 

const randomMix = (arrayForSort: Array<IndexedValueType>) => arrayForSort.sort(() => Math.random() - 0.5)


const reverseMix = () => {
    
}

// ...