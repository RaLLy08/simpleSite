export interface WordForSortType {
    readonly index: number,                     
    readonly value: string,                        
};


// add for new algorinm
type AlgoritmsTypes =   
    | 'bubble' 
    | 'selection'

export type SortingTypesType = 
    | 'random' 
    | AlgoritmsTypes


export type SortingAlgoritmsType =  Record<AlgoritmsTypes, any>;
    
export interface AnimateTextInterface {
    readonly speed?: number,
    readonly text: string,
    readonly type: SortingTypesType,
}