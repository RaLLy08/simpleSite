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

const AnimationsPage = () => {
    const classes = useStyles();

    return (
        <SimplePage 
            header={<Header />}
            content={
                <div className={clsx(classes.content, 'flex items-center')}>
                 
                </div>
            }
            footer={<Footer/>}
        />
    )
};

export default AnimationsPage;
