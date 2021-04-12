import React, { useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';

const AnimateText = props => {
    const { text, speed = 100, done, type } = props;

    if (done) return text;

    let step = 0;

    const getInitialState = () => {
        switch (type) {
            case 'mix':
                return Array.from(text).sort(() => Math.random() - 0.5).join('')
            default:
                return '';
        }
    }

    const getNewState = (old) => {
        const newState = [...old];

        switch (type) {
            case 'mix':
                const expectedSymbol = text[step];
                const currentSymbol = old[step];
                // debugger
                const expectedIndex = Array.from(old).slice(step).findIndex(el => el === expectedSymbol) + step

                newState[step] = expectedSymbol;
                
                newState[expectedIndex] = currentSymbol;

                // console.log(currentSymbol);
                break;
            default:
                newState[step] = text[step];
                break
        }


        return newState;
    }

    const [animText, setAnimText] = useState(getInitialState());
    
    useEffect(() => {
        const update = setInterval(() => {

            setAnimText(old => {
                return getNewState(old)
            });

            step += 1;
            if (step >= text.length) clearInterval(update);
        }, speed);


        return () => clearInterval(update);
    }, [])
  
    return <div style={{wordBreak: "break-all"}}>
        {animText}
    </div>;
}

AnimateText.propTypes = {
    text: PropTypes.string,
    speed: PropTypes.number,
}


export default AnimateText;
