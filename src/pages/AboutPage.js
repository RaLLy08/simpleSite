import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Header from '../components/header';
import clsx from 'clsx';
import Footer from '../components/footer';
import SimplePage from '../@simple/pages/SimplePage';

const useStyles = makeStyles(theme => ({
    content: {
    },
}))

const AboutPage = () => {
    const classes = useStyles();

    return (
        <SimplePage 
            header={<Header/>}
            content={
                <div className={clsx(classes.content, 'flex items-center')}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            }
            footer={<Footer/>}
        />
    )
};

export default AboutPage;
