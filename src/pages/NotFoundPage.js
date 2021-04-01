import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles';
import Space from '../components/canvas/Space';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles({
    root: {
  
    },
    notFound: {
        height: '100%',
        width: '100%',
        color: 'white',
        position: 'absolute'
    }
});

const NotFoundPage = props => {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <Space />
            <div className={clsx(classes.notFound, "flex items-center justify-center")}>
                <Typography variant="display2" color="inherit">
                    404 Page not found :(  
                </Typography>
            </div>
        </div>
    )
};

export default NotFoundPage;
