import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { useRef } from 'react';

import { AnimateTextInterface, SortingTypesType, WordForSortType, SortingAlgoritmsType } from './types';
import { bubbleSort, selectionSort } from '../genSortingAlgoritms';
import { SortingGenerator } from '../genSortingAlgoritms/types';


const AnimateText = (props: AnimateTextInterface) => {
    const { text, speed = 100, type } = props;
    // by words speed / 10 or word math
    const sortedText: Array<WordForSortType> = Array.from(text).map((el, i) => ({ value: el, index: i }));
    const mixedText: Array<WordForSortType> = sortedText.sort(() => Math.random() - 0.5);

    const [animText, setAnimText] = useState<Array<WordForSortType>>(mixedText);
    const [isDone, setDone] = useState<boolean>(true);
    const timeoutRef = useRef<any>();

    const getSortingAlgoritms = (mixedText: Array<WordForSortType>): SortingAlgoritmsType => ({
        selection: selectionSort(mixedText),
        bubble:    bubbleSort(mixedText),
    });

    const getSortingAlgoritm =  (mixedText: Array<WordForSortType>, type: SortingTypesType): SortingGenerator => {
        const algoritms = getSortingAlgoritms(mixedText);
 
        if (type === 'random') {
            const algsArr = Object.values(algoritms);
            
            return algsArr[Math.round(Math.random() * (algsArr.length - 1))]; // random from array
        }

        return algoritms[type];
    };

    const init = () => {
        const gen = getSortingAlgoritm(mixedText, type);
        setDone(false);

        const update = () => {
            setAnimText(gen.next().value);

            if (!gen.next().done) {
                timeoutRef.current = setTimeout(() => {
                    update()
                }, speed);
            } else {
                setDone(true);
            };

        }
        update();
    }

    useEffect(() => {
        init();

        return () => clearTimeout(timeoutRef.current);
    }, [])
    
    return <div style={{wordBreak: "break-all"}}>
        {animText.map((el: WordForSortType) => el.value)}
        <Button disabled={!isDone} onClick={() => { init()}}>
            Refresh
        </Button>
    </div>;
}

export default AnimateText;
