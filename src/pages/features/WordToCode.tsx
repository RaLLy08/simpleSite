import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { TextField, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    content: {
    },
}))

const WordToCode = () => {
    const classes = useStyles();
    const [ inpValue, setInpValue ] = React.useState<string>('');
    const [ errHelperText, setErrHelperText ] = React.useState<string>('');
    const [ language, setLanguage ] = React.useState<string>('Js');

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const expected = e.target.value.match(/[A-z .,\/#!$%\^&\*;:{}=\-_`~()]/g) || []; 
    
        if (expected.length === e.target.value.length) {
            setInpValue(expected.join('').toLowerCase());

            if (errHelperText) setErrHelperText('');
        } else {
            setErrHelperText('Use only english language please');
        }
    } 
    
    
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
                <TextField fullWidth multiline value={inpValue} onChange={changeValue} error={!!errHelperText} helperText={errHelperText}/>
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
