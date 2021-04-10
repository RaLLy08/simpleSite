import React from 'react'
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
    },
    rightSide: {
    },
    leftSide: {
    },
    center: {
        width: '2000px',
    },
}))

const SimplePage = props => {
    const classes = useStyles();

    return (
        <>  
            <div className={classes.root}>
                {props.header}
                <div className="flex flex-1 flex-row">
                    <div className={clsx(classes.rightSide, 'flex w-full h-full')}>
                    </div>
                    <div className={clsx(classes.center, 'flex')}>
                        {props.content}
                    </div>
                    <div className={clsx(classes.leftSide, 'flex w-full h-full')}>
                    </div>
                </div>
                {props.footer}
            </div>
        </>
    );
};

export default SimplePage;
