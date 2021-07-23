import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { TextField, Select, MenuItem } from '@material-ui/core';
import useAnimateText from '../../@simple/hooks/useAnimateText';
import useInterval from '../../@simple/hooks/useInterval';
import _ from 'lodash';

const useStyles = makeStyles(theme => ({
    content: {
    },
}))

const phrases: Array<string> = [
    'life is wonderful!',
    'i love you...',
    'i love JavaScript',
    'welcome!',
    'be happy',
    'help me !',
    'write code there!',
    'this field wants text!',
    'we are all mistake',
    // ...
];

const WordToCode = () => {
    const classes = useStyles();

    const [ inpValue, setInpValue ] = React.useState<string>('');
    const [ errHelperText, setErrHelperText ] = React.useState<string>('');
    const [ language, setLanguage ] = React.useState<string>('Js');
    const stepInxRef = React.useRef<number>(0);
    const [ isInterrupted, setInterrupt] = React.useState(false);

    const changeStepTimerRef = React.useRef<any>(0);
    const inputFieldRef = React.useRef<HTMLInputElement>();

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const expected = e.target.value.match(/[A-z .,\/#!$%\^&\*;:{}=\-_`~()]/g) || []; 
    
        if (expected.length === e.target.value.length) {
            setInpValue(expected.join('').toLowerCase());

            if (errHelperText) setErrHelperText('');
        } else {
            setErrHelperText('Use only english language please');
        }
    } 
    // repeating code
    const toSteps = (text: string): Array<string> => {
        const result: Array<string> = [];

        result.push(text.split('').reduce((prev, curr) => {
            result.push(prev)
            return prev + curr
        }))

        return result;
    };

    const getRandFromArr = (arr: Array<string>): string => {
        const randInx: number = Math.round(Math.random() * (arr.length - 1));

        return arr[randInx];
    }
    // 
    const [ steps, setSteps ] = React.useState<Array<string>>(toSteps('hello world!'));

    const interruptAutoFilling = () => {
        setInterrupt(true);
        clearTimeout(changeStepTimerRef.current);

        setInpValue('');
    }

    const continueAutoFilling = () => {
        inputFieldRef.current && inputFieldRef.current.blur();
        setInpValue('');
        setInterrupt(false);
    }

    React.useEffect(() => {
        console.log(isInterrupted, 'isInterrupted');
        
        if (!isInterrupted) {
            const a = () => {
                setInpValue(steps[stepInxRef.current]);

                stepInxRef.current += 1;
                
            }
            const typeDelay = 80;
            const typeInterval = setInterval(() => {
                
                if (stepInxRef.current > steps.length - 1) {
                    clearInterval(typeInterval);

                    const nextTextDelay = 1000;

                    const nextText = setTimeout(() => {
                        
                        stepInxRef.current = 0;
                        setSteps(toSteps(getRandFromArr(phrases)));
                    } , nextTextDelay);

                } else {
                    a();
                }

            }, typeDelay);

            // setInterval(() => {
            //     setInpValue(steps[stepInxRef.current]);

            //     stepInxRef.current += 1;
            // }, 80)
        };
    }, [isInterrupted, steps])
    console.log(steps);
    
    // const nextText = (): null => {
    //     const delay = 2000;
    //     stepInxRef.current = 0;
    //     // must be cleared after intrupt   !!!
    //     changeStepTimerRef.current = setTimeout(() => {
    //         console.log('trigged');
    //         setSteps(toSteps(getRandFromArr(phrases)));
    //     }, delay)

    //     return null;
    // }

    // useInterval(() => {
    //     setInpValue(steps[stepInxRef.current]);

    //     stepInxRef.current += 1;
    // }, stepInxRef.current < steps.length - 1 && !isInterrupted ? 80 : nextText())


    const cipher = React.useMemo<any>(() => ({
        a: '(![] + [])[+!![]]',
        b: '(typeof (![]))[+![]]',
        c: '(typeof [])[+!![] +!![] +!![] +!![]]',
        d: '([][![]] + [])[+!![] +!![]]',
        e: '([] + ![])[+!![] + !![] + !![] + !![] ]',
        f: '(![] + [])[+[]]',
        g: '(typeof ([] + []))[+!![] +!![] +!![] +!![] +!![]]',
        h: '(Math + [])[(+!![] +!![] +!![])**(+!![] +!![]) + !![] + !![]]',
        i: '(((+!![])[+!![]]) + [])[+!![] + !![] + !![] + !![] + !![]]',
        j: '([] + {})[+!![] +!![] +!![]]',
        k: '(WeakMap + [])[(+!![] +!![] +!![])**(+!![] +!![]) + !![] + !![] + !![]]',
        l: '(![] + [])[+!![] +!![]]',
        m: '(typeof +[])[+!![] + !![]]',
        n: '([][![]] + [])[+[] + +!![]]',
        o: '(typeof{})[+[]]',
        p: '(parseInt + [])[(+!![] +!![] +!![])**(+!![] +!![])]',
        q: '(Request + [])[(+!![] +!![] +!![])**(+!![] +!![]  ) +!![] +!![]]',
        r: '(typeof +[])[+!![] +!![] +!![] +!![] +!![]]',
        s: '(![] + [])[+!![] + +!![] + +!![]]',
        t: '(typeof [])[+!![] +!![] +!![] +!![] +!![]]',
        u: '([][![]] + [])[+[]]',
        v: '(Array + [])[(+!![] +!![] +!![] +!![] +!![])**(+!![] +!![]) - +!![]]',
        w: '(DataView + [])[(+!![] +!![] +!![] +!![])**(+!![] +!![]  ) - +!![] +!![]]',
        x: '(Proxy + [])[(+!![] +!![] +!![])**(+!![] +!![]) + !![] + !![] + !![]]',
        y: '(Array + [])[(+!![] + !![] + !![]) * (+!![] + !![] + !![] + !![]) + +!![]]',
        z: '(XMLSerializer + [])[(+!![] +!![] )**(+!![] +!![] +!![] +!![] ) +!![] +!![] +!![]]',
        ' ': '([] + {})[(+!![] +!![])**(+!![]+!![]+!![]) - +!![]]'
    }), [])
    
    const enCodedValue = inpValue.split('').join('+').split('').map((el: string) => {
       if (el.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g)) return `'${el}'`
       if (el === '+') return el;

       return cipher[el];
    }).join('');
    
    return (
        <div className="flex flex-auto flex-col">
            <div className="flex flex-1 mb-4">
                <TextField  fullWidth multiline value={inpValue} onChange={changeValue} error={!!errHelperText} helperText={errHelperText}/>
            </div>
            <div className="flex flex-1 justify-end mb-16">
                <Select
                    id="demo-simple-select-helper"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                >
                <MenuItem value="Js">
                    JavaScript
                </MenuItem>
        </Select>
            </div>
            <div className="flex flex-1"> 
                <TextField fullWidth rowsMax={16} multiline value={enCodedValue} />
            </div>
        </div>
    )
};

export default WordToCode;
