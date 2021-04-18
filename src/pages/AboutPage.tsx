import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Header from '../components/header';
import clsx from 'clsx';
import Footer from '../components/footer';
import SimplePage from '../@simple/pages/SimplePage';
import AnimateText from '../@simple/components/AnimateText';
import { bubbleSort, selectionSort } from '../@simple/genSortingAlgoritms';
import { Button } from '@material-ui/core';
import { wordForSort } from '../@simple/types';


const useStyles = makeStyles(theme => ({
    content: {
    },
}))

const AboutPage = () => {
    const classes = useStyles();
    // const animatedText = useAnimateText({ 
    //     speed: 34,
    //     text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    // });
    // use componenet instead hook! keep hook for example 
    const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`

    /**
        * @param {Array<{index: number, value: string}>}
    */

    const sortedText = Array.from(text).map((el, i) => ({value: el, index: i}));
    const mixedText = sortedText.sort(() => Math.random() - 0.5);

    const getSortingAlgoritms = (textForSort: Array<wordForSort>) => [
        {
            gen: selectionSort(textForSort),
            speed: 10
        },
        {
            gen: bubbleSort(textForSort),
            speed: 10
        }
    ];
 
    const getRandFromArray = (array: Array<any>) => array[Math.round(Math.random() * (array.length - 1))];

    const randAlgoritm = getRandFromArray(getSortingAlgoritms(mixedText));

    React.useEffect(() => {
        // console.log(bubble.gen.next());
        
    } , [])

    return (
        <SimplePage 
            header={<Header />}
            content={
                <div className={clsx(classes.content, 'flex items-center')}>
                   <AnimateText
                        speed={randAlgoritm.speed}
                        initState={mixedText}
                        frame={(state, stop) => {
                            if (randAlgoritm.gen.next().done) {
                                stop();

                                return state;
                            };

                            return randAlgoritm.gen.next().value;
                        }}
                   />
                   <Button >
                        Refresh
                   </Button>
                </div>
            }
            footer={<Footer/>}
        />
    )
};

export default AboutPage;
