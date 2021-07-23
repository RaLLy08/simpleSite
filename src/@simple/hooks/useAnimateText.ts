import React, { useEffect, useRef, useState } from "react";

interface UseAnimateTextInterface {
    speed?: number,
    frames: Array<string>,
    onChange: (currentFrame: string) => void,
};


const useAnimateText = (props: UseAnimateTextInterface) => {
    const { frames, speed = 100, onChange } = props;
    const [frame, setFrame] = useState<string>(frames[0]);
    
    const timeoutRef = useRef<any>();
    const countRef = useRef<number>(1);
    console.log(frames);
    
    useEffect(() => {
        countRef.current = 0;
        // init();
        console.log('update');
        const update = () => {
            
            setFrame(frames[countRef.current]);
            
            if (countRef.current < frames.length - 1) {
                timeoutRef.current = setTimeout(() => {
                    update();
                    
                    
                }, speed);

                countRef.current += 1;
            } else {
                countRef.current = 0;
            };
        }

        update();
        
        return () => clearTimeout(timeoutRef.current);
    }, []) // [frames] ?

    useEffect(() => {
        onChange(frame);
    }, [frame])

    return frame;
};

export default useAnimateText;