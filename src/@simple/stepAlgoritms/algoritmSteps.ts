import bubbleSort from "./bubble";
import selectionSort from "./selection";
import { IndexedValueType, SortingGeneratorInterface, StepPointType } from "./types";
import { getRandKeyProperty } from "./utils";

type MixedTypes = 'random' | 'reverse'; // ...

type AlgoritmsTypes =  // ...
    | 'bubble' 
    | 'selection';

type StepSortTypes = 
    | 'random' 
    | AlgoritmsTypes;

type AlgoritmsTypesObject = Record<AlgoritmsTypes, (array: Array<IndexedValueType>, stepPoint: StepPointType) => SortingGeneratorInterface>;

const sortingGenerators = {  // ...
    selection: selectionSort, // { name , alg}
    bubble:    bubbleSort,
};
// const sortingGenerators = [
//     {
//         algoritm: selectionSort,
//         name: 'Selection'
//     },
//     {
//         algoritm: bubbleSort,
//         name: 'Bubble'
//     }
// ]

export class AlgoritmSteps {
    _indexedInitStr: Array<IndexedValueType>; // private readonly
    _sortingGenerators: AlgoritmsTypesObject; // private
    _stepSort: Array<Array<IndexedValueType>>; // private
    _sortName: string | null;

    constructor(initStr: Array<string>) {
        this._indexedInitStr = initStr.map((el, i) => ({ value: el, index: i }));

        this._sortingGenerators = sortingGenerators;

        this._stepSort = [];
        this._sortName = null;
    }

    stepSortString = (type: StepSortTypes): this => {
        this._stepSort.length = 0;
        let sortGen: SortingGeneratorInterface;

        if (type === 'random') {
            const { key, property} = getRandKeyProperty(this._sortingGenerators)
    
            sortGen = property(this._indexedInitStr, 'n');
            this._sortName = key;
        } else {
            sortGen = this._sortingGenerators[type](this._indexedInitStr, 'n');
            this._sortName = type;
        }


        this._stepSort.push(this._indexedInitStr);
        let step = sortGen.next();

        while (!step.done) {
            this._stepSort.push(step.value);  

            step = sortGen.next();
        };

        return this;
    }

    mixString = (type: MixedTypes): this => {
        // this._stepSort.length = 0;

        switch (type) {
            case 'reverse':

                break;
            case 'random':

                this.randomMix();

                break;
        }

        return this;
    };

    getStringSteps = (): Array<string> => this._stepSort.map((el: IndexedValueType[]): string => el.map(el => el.value).join(''));

    // getStringSteps = (): any => this._stepSort;

    getSortAlgName = (): string | null => this._sortName;

    randomMix = () => {
        this._indexedInitStr.sort(() => Math.random() - 0.5);
    }
}