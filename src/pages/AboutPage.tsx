import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Header from '../components/header';
import clsx from 'clsx';
import Footer from '../components/footer';
import SimplePage from '../@simple/pages/SimplePage';
import AnimateText from '../@simple/components/AnimateText';
import selectionSort from '../@simple/sortingAlgoritms/selection';

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

    /* array
    [
        {
            index: Number,
            value: String
        }
    ]
    */
    const sortedText = Array.from(text).map((el, i) => ({value: el, index: i}));
    const mixedText = sortedText.sort(() => Math.random() - 0.5);

    return (
        <SimplePage 
            header={<Header />}
            content={
                <div className={clsx(classes.content, 'flex items-center')}>
                   <AnimateText
                        speed={50}
                        initState={mixedText}
                        frame={(state, count, stop) => {
                            // selection 
                            if (count >= state.length ) {
                                stop();
                                return state;
                            }
                            
                            return selectionSort(state, count);
                            //
                            // binary sort 

                            // 
                        }}
                   />
                </div>
            }
            footer={<Footer/>}
        />
    )
};

export default AboutPage;
