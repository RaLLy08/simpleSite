import { selectionSort, bubbleSort} from "./sortAlgs";
import { IndexedValueType, SortingGeneratorInterface, StepPointType } from "./types";
import { getRandKeyProperty } from "./utils";

type MixedTypes = 'reverseMix' | 'randomMix'; // ...

type StepMixedTypes = 'random' | MixedTypes;

type AlgoritmsTypes =  // ...
    | 'bubble' 
    | 'selection';

type StepSortTypes = 
    | 'random' 
    | AlgoritmsTypes;

type StepAlgoritm = (array: Array<IndexedValueType>, stepPoint?: StepPointType) => SortingGeneratorInterface;

type MixAlgoritm = (indexedArr: Array<IndexedValueType>) => Array<IndexedValueType>;

type AlgoritmsTypesObject = Record<AlgoritmsTypes, StepAlgoritm>;

type MixAlgoritmsTypesObject = Record<MixedTypes, MixAlgoritm>;

const sortingGenerators: AlgoritmsTypesObject = {  // ...
    selection: selectionSort, // { name , alg}
    bubble:    bubbleSort,
};


const mixAlgoritms: MixAlgoritmsTypesObject  = {
    randomMix: (indexedArr) => {
        const newState = [...indexedArr];

        newState.sort(() => Math.random() - 0.5);

        return newState;
    },
    reverseMix: (indexedArr) => {
        const newState = [...indexedArr];

        newState.reverse();

        return newState;
    } 
}


type SplitParamsType = {
    splitBy: 'letter' | 'word', // ...
    value: number
}

export class AlgoritmSteps {
    _indexedInitStr: Array<IndexedValueType>; // private readonly
    _sortingGenerators: AlgoritmsTypesObject; // private readonly
    _mixAlgoritms: MixAlgoritmsTypesObject; // private readonly
    _stepSort: Array<Array<IndexedValueType>>; // private 
    _mixedStr: Array<IndexedValueType>; // private readonly
    sortName: string | null;

    static splitInitTextBy(str: string, splitParams: SplitParamsType): Array<IndexedValueType> {
        const { value, splitBy } = splitParams;
        const toArr = Array.from(str);

        let result: Array<IndexedValueType> = [];

        switch (splitBy) {
            case 'letter':
                toArr.forEach((el, i) => result.push({ value: el, index: i }));
                break;
            case 'word':
                str.split(/(\s+)/).map((el, i) => result.push({ value: el, index: i }) );

                break;
        }

        return result;
    }

    constructor(initStr: string, splitParams?: SplitParamsType) {
        const defaultSplitParams: SplitParamsType = { value: 1, splitBy: 'letter'}; 
        
        this._indexedInitStr = AlgoritmSteps.splitInitTextBy(initStr, splitParams || defaultSplitParams);

        // external readonly
        this._sortingGenerators = sortingGenerators; 
        this._mixAlgoritms = mixAlgoritms;
        // 

        // changeble
        this._mixedStr = [];
        this._stepSort = [];
        this.sortName = null;
        // 
    }
    
    stepSortString = (type: StepSortTypes): this => {
        this._stepSort.length = 0;
        
        let stepAlgoritm: StepAlgoritm;

        if (type === 'random') {
            const { key, property }: { key: string, property: StepAlgoritm} = getRandKeyProperty(this._sortingGenerators);
    
            stepAlgoritm = property;
            this.sortName = key;
        } else {
            stepAlgoritm = this._sortingGenerators[type];
            this.sortName = type;
        }

        this._stepSort.push(this._mixedStr);
        const sortGen: SortingGeneratorInterface = stepAlgoritm(this._mixedStr); 

        let step = sortGen.next();

        while (!step.done) {
            this._stepSort.push(step.value);  

            step = sortGen.next();
        };

        return this;
    }
    // ...
    mixString = (type: StepMixedTypes): this => {
        // this._stepSort.length = 0;
        // this.sortName = null;
        let mixAlg: MixAlgoritm; 

        if (type === 'random') {
            const { key, property }: { key: string, property: MixAlgoritm} = getRandKeyProperty(this._mixAlgoritms);

            mixAlg = property;
        } else {
            mixAlg = this._mixAlgoritms[type];
        }

        this._mixedStr.push(
            ...mixAlg(this._indexedInitStr)
        );

        return this;
    };

    getStringSteps = (): Array<string> => this._stepSort.map((el: IndexedValueType[]): string => el.map(el => el.value).join(''));

    // toSteps = (): 
    // getStringSteps = (): any => this._stepSort;

    getSortAlgName = (): string | null => this.sortName;
}