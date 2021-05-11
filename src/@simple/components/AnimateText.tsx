import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { makeStyles } from '@material-ui/styles';

import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    textBox: {
        wordBreak: "break-all",
        userSelect: 'none'
    },
}));

export interface AnimateTextInterface {
    speed?: number,
    frames: Array<string>,
};

const AnimateText = (props: AnimateTextInterface) => {
    const classes = useStyles();

    const { frames, speed = 100 } = props;
    // by words speed / 10 or word math
    // const sortedText: Array<WordForSortType> = Array.from(text).map((el, i) => ({ value: el, index: i }));
    // const mixedText: Array<WordForSortType> = sortedText.sort(() => Math.random() - 0.5);

    const [animText, setAnimText] = useState<string>(frames[0]);
    // const [isDone, setDone] = useState<boolean>(true);
    const timeoutRef = useRef<any>();
    const countRef = useRef<number>(1);

    
    // const cb = React.useCallback(someFunction, [])
    // const cbRef = React.useRef(someFunction);
    // const cbMemo = React.useMemo(() => ({current: someFunction}),[]);

 
    // const algNameRef = useRef<string>(); 
    
    // const getSortingAlgoritms = (mixedText: Array<WordForSortType>): SortingAlgoritmsType => ({
    //     selection: selectionSort(mixedText),
    //     bubble:    bubbleSort(mixedText),
    // });

    // const onRefresh = () => {
    //     if (!isDone) {
    //         clearTimeout(timeoutRef.current);
    //         setDone(true);
    //     };

    //     init();
    // }

    // const getSortingAlgoritm =  (mixedText: Array<WordForSortType>, type: SortingTypesType): SortingGenerator => {
    //     const algoritms = getSortingAlgoritms(mixedText);
 
    //     if (type === 'random') {
    //         const algsArr = Object.values(algoritms);
    //         const algsNamesArr = Object.keys(algoritms);

    //         const randInx: number = Math.round(Math.random() * (algsArr.length - 1));
    //         algNameRef.current = algsNamesArr[randInx];

    //         return algsArr[randInx]; // random from array
    //     }
    //     algNameRef.current = type;

    //     return algoritms[type];
    // };

    // const init = () => {
    //     // algNameRef
    //     setDone(false);

        // const update = () => {
        //     setAnimText(gen.next().value);

        //     if (!gen.next().done) {
        //         timeoutRef.current = setTimeout(() => {
        //             update()
        //         }, speed);
        //     } else {
        //         setDone(true);
        //     };

        // }
        // update();
    // }

    useEffect(() => {
        countRef.current = 0;
        // init();
        const update = () => {
            
            setAnimText(frames[countRef.current]);
            
            if (countRef.current < frames.length - 1) {
                timeoutRef.current = setTimeout(() => {
                    update()
                }, speed);

                countRef.current += 1;
            } else {
                countRef.current = 0;
            };
        }

        update();
        
        return () => clearTimeout(timeoutRef.current);
    }, [frames])
    // clsx(!isDone && classes.textBox, 'flex')
    return <div className="flex flex-col">
        <div className={clsx(classes.textBox, 'flex')}>
            {animText}
        </div>
        {/* <div className="flex justify-end">
            <Button size="small" onClick={() => { onRefresh()}}>
                {!isDone ? algNameRef.current : <RefreshIcon/>} 
            </Button>
        </div> */}
    </div>;
}

export default AnimateText;
