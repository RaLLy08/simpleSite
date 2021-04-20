export interface WordForSortType {
    readonly index: number,                     
    readonly value: string,                        
};


// add for new algorinm
type algoritmsTypes =   
    | 'bubble' 
    | 'selection'



export type SortingTypesType = 
    | 'random' 
    | algoritmsTypes


export type SortingAlgoritmsType = { [K in algoritmsTypes]: any };
    

export interface AnimateTextInterface {
    readonly speed?: number,
    readonly text: string,
    readonly type: SortingTypesType,
}