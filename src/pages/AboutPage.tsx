import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Header from '../components/header';
import clsx from 'clsx';
import Footer from '../components/footer';
import SimplePage from '../@simple/pages/SimplePage';
import AnimateText from '../@simple/components/AnimateText';
import { Button } from '@material-ui/core';
import { AlgoritmSteps } from '../@simple/stepAlgoritms/algoritmSteps';


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
    const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    
    // generate animation schema
    const algoritmSteps = new AlgoritmSteps(text)
        .mixString('random')
        .stepSortString('random') // separation word and swaping use!!! random scheme use!!!

    // also add panel of manegment in triple click!

    
    console.log(algoritmSteps);
    
    // console.log(Alg._sortName);
    
    // const schema = gene(text, )

    /**
        * @param {Array<{index: number, value: string}>}
    */
   

    return (
        <SimplePage 
            header={<Header />}
            content={
                <div className={clsx(classes.content, 'flex items-center')}>
                   <AnimateText
                        speed={20}
                        // text={text}
                        // type="random"
                        frames={algoritmSteps.getStringSteps()}
                        // or schema ['a', 'aaa']
                   />

                </div>
            }
            footer={<Footer/>}
        />
    )
};

export default AboutPage;
