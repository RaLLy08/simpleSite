import React, { useEffect, useState } from 'react';
import { wordForSort } from '../types';

interface AnimateTextInterface {
    frame: (oldState: Array<wordForSort>, stop: () => void) => Array<wordForSort>,
    speed?: number,
    initState: Array<wordForSort>,
}

const AnimateText = (props: AnimateTextInterface) => {
    const { initState, speed = 100, frame } = props;

    const [animText, setAnimText] = useState(initState);
    
    useEffect(() => {
        const stop = () => clearInterval(update);

        const update = setInterval(() => {

            setAnimText((oldState: Array<wordForSort>) => {
                return frame(oldState, stop);
            });
          
        }, speed);

        return () => clearInterval(update);
    }, [])
    
    return <div style={{wordBreak: "break-all"}}>
        {animText && animText.map((el: wordForSort) => el.value)}
    </div>;
}

export default AnimateText;
