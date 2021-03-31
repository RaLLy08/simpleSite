import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles';
import red from '@material-ui/core/colors/red';
import Space from '../components/canvas/Space';

const useStyles = makeStyles({
    root: {
        backgroundColor: red[500],
        height: '100vh',
        overflow: 'hidden'
    },
    linkBox: {
        display: 'flex',
        justifyContent: 'center',
    },
    canvas: {
        // height: '100%',
        // width: '100%',
        backgroundColor: '#000',
        backgroundImage: "radial-gradient(circle at top right, rgba(121, 68, 154, 0.13), transparent), radial-gradient(circle at 20% 80%, rgba(41, 196, 255, 0.13), transparent)"
    }
});

const StartPage = props => {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <div className={classes.linkBox}> 
                <Link to='/main-page'> Welcome to my site!</Link> 
            </div> 
            <Space />
        </div>
    )
};

export default StartPage;