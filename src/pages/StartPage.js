import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles({
    root: {
        backgroundColor: red[500],
        height: '100vh'
    },
    linkBox: {
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
    }
});

const StartPage = props => {
    const classess = useStyles(props);

    return (
        <div className={classess.root}>
            <div className={classess.linkBox}> 
                <Link to='/main-page'> Welcome to my site!</Link> 
            </div> 
        </div>
    )
};

export default StartPage;