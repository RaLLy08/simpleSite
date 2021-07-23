export const timeSleep = (ms: number): Promise<void> => new Promise((resolve, reject) => setTimeout(resolve, ms)); 
export const getRandKeyProperty = (obj: object): { key: string; property: any } => {
    const propsArr: Array<any> = Object.values(obj);
    const keysArr: Array<string> = Object.keys(obj);

    const randInx: number = Math.round(Math.random() * (keysArr.length - 1));

    return {
        key: keysArr[randInx],
        property: propsArr[randInx]
    }
} 