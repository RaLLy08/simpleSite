import React, { useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';



const AnimateText = props => {
    const { text, speed, done, type } = props;
    const textArr = Array.from(text).map((el, i) => ({value: el, index: i}))
    /* 
        [
           {
                value: 'something',
                index: 0
           }
        ]
    */

    if (done) return text;

    let step = 0;

    const getInitialState = () => {
        switch (type) {
            case 'selection':
                return textArr.sort(() => Math.random() - 0.5)
            default:
                return '';
        }
    }

    const getNewState = (old) => {
        const newState = [...old];

        switch (type) {
            case 'selection':
                const section = newState.slice(step);
                let minElIndex = 0;

                for (let i = 0; i < section.length; i++) {
                    const el = section[i];
                    if (el.index < section[minElIndex].index) minElIndex = i;
                }

                const currentEl = newState[step];

                newState[step] = section[minElIndex];
                newState[minElIndex + step] = currentEl;
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
        {animText.map(el => el.value)}
    </div>;
}

AnimateText.defaultProps = {
    speed: 100,
}

AnimateText.propTypes = {
    text: PropTypes.string,
    speed: PropTypes.number,
}


export default AnimateText;
