import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Header from '../components/header';


const useStyles = makeStyles({
    root: {
        backgroundColor: '#03c6fc',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentBox: {
        height: '98%',
        width: '60%'
    }
})

const MainPage = () => {
    const classes = useStyles();

    return (
       <>
        <Header/>
        <div className={classes.root}>
            <div className={classes.contentBox}>
                Hi! My name is Azad
            </div>
        </div>
       </>
    );
};

export default MainPage;
