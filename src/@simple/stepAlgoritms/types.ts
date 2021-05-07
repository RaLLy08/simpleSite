export interface SortingGeneratorInterface<T = Array<IndexedValueType>, TReturn = Array<IndexedValueType>, TNext = Array<IndexedValueType>> extends Iterator<T, TReturn, TNext> {
    // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
    return(value: TReturn): IteratorResult<T, TReturn>;
    throw(e: any): IteratorResult<T, TReturn>;
    [Symbol.iterator](): Generator<T, TReturn, TNext>;
}

export type StepPointType = 
    | 'n'
    | 'n^2'
    | 'n^2&swap';


export type IndexedValueType = {
    readonly index: number,
    readonly value: any,
}