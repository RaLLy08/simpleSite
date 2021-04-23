import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { useRef } from 'react';
import { makeStyles } from '@material-ui/styles';
import RefreshIcon from '@material-ui/icons/Refresh';

import { AnimateTextInterface, SortingTypesType, WordForSortType, SortingAlgoritmsType } from './types';
import { bubbleSort, selectionSort } from '../genSortingAlgoritms';
import { SortingGenerator } from '../genSortingAlgoritms/types';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    textBox: {
        wordBreak: "break-all"
    },
}))


const AnimateText = (props: AnimateTextInterface) => {
    const classes = useStyles();

    const { text, speed = 100, type } = props;
    // by words speed / 10 or word math
    const sortedText: Array<WordForSortType> = Array.from(text).map((el, i) => ({ value: el, index: i }));
    const mixedText: Array<WordForSortType> = sortedText.sort(() => Math.random() - 0.5);

    const [animText, setAnimText] = useState<Array<WordForSortType>>(mixedText);
    const [isDone, setDone] = useState<boolean>(true);
    const timeoutRef = useRef<any>();
    const algNameRef = useRef<string>();

    const getSortingAlgoritms = (mixedText: Array<WordForSortType>): SortingAlgoritmsType => ({
        selection: selectionSort(mixedText),
        bubble:    bubbleSort(mixedText),
    });

    const onRefresh = () => {
        if (!isDone) {
            clearTimeout(timeoutRef.current);
            setDone(true);
        };

        init();
    }

    const getSortingAlgoritm =  (mixedText: Array<WordForSortType>, type: SortingTypesType): SortingGenerator => {
        const algoritms = getSortingAlgoritms(mixedText);
 
        if (type === 'random') {
            const algsArr = Object.values(algoritms);
            const algsNamesArr = Object.keys(algoritms);

            const randInx: number = Math.round(Math.random() * (algsArr.length - 1));
            algNameRef.current = algsNamesArr[randInx];

            return algsArr[randInx]; // random from array
        }
        algNameRef.current = type;

        return algoritms[type];
    };

    const init = () => {
        const gen = getSortingAlgoritm(mixedText, type);
        // algNameRef
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
    // clsx(!isDone && classes.textBox, 'flex')
    return <div className="flex flex-col">
        <div className={clsx(classes.textBox, 'flex')}>
            {animText.map((el: WordForSortType) => el.value)}
        </div>
        <div className="flex justify-end">
            {/* <Button size="small" onClick={() => { onRefresh()}}>
                {!isDone ? algNameRef.current : <RefreshIcon/>} 
            </Button> */}
        </div>
    </div>;
}

export default AnimateText;
