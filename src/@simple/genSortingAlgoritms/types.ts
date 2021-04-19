export interface objectForSort {
    readonly index: number,                     
    readonly value: any,                        
};

export interface SortingGenerator<T = Array<objectForSort>, TReturn = Array<objectForSort>, TNext = Array<objectForSort>> extends Iterator<T, TReturn, TNext> {
    // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
    return(value: TReturn): IteratorResult<T, TReturn>;
    throw(e: any): IteratorResult<T, TReturn>;
    [Symbol.iterator](): Generator<T, TReturn, TNext>;
}