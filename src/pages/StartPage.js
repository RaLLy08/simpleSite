import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles';
import red from '@material-ui/core/colors/red';
import Space from '../components/canvas/Space';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        // backgroundColor: red[500],
        // height: '100vh',
        // overflow: 'hidden'
    },
    linkBox: {
        display: 'flex',
        justifyContent: 'center',
    },
});

const StartPage = props => {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <div className={classes.linkBox}> 
                <Link to='/'> Welcome to my site!</Link> 
            </div> 
            <Space />
        </div>
    )
};

export default StartPage;