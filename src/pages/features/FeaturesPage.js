import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Header from '../../components/header';
import clsx from 'clsx';
import Footer from '../../components/footer';
import SimplePage from '../../@simple/pages/SimplePage';
import { Button } from '@material-ui/core';
import { useHistory, useParams } from 'react-router';
import { featuresPageRoutes } from './routes';

const useStyles = makeStyles(theme => ({
    content: {
    },
}))

const FeaturesPage = () => {
    const { name } = useParams();
    const classes = useStyles();
    const history = useHistory();

    return (
        <SimplePage 
            header={<Header/>}
            content={featuresPageRoutes[name]}
            rightSide={
                <div className="flex flex-col items-center flex-1 p-16">
                    <div className="m-2">
                        <Button onClick={() => history.push('/features/dynamic-list')}>
                            Dynamic List 
                        </Button>
                    </div>
                    <div className="m-2">
                        <Button onClick={() => history.push('/features/websocket-test')}>
                            Web Socket Test
                        </Button>
                    </div>
                </div>
            }
            footer={<Footer/>}
        />
    )
};

export default FeaturesPage;
