import React from 'react'
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Button } from '@material-ui/core';
import { useHistory, useParams } from 'react-router';

import Header from '../../components/header';
import Footer from '../../components/footer';
import SimplePage from '../../@simple/pages/SimplePage';
import { featuresPageRoutes } from './routes';

const useStyles = makeStyles(theme => ({
    content: {
    },
}))

const FeaturesPage = () => {
    const { name } = useParams();
    const classes = useStyles();
    const history = useHistory();

    const Component = featuresPageRoutes[name];

    return (
        <SimplePage 
            header={<Header/>}
            content={
                <div className="py-32 w-full">
                    {Component}
                </div>
            }
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
                    <div className="m-2">
                        <Button onClick={() => history.push('/features/word-to-code')}>
                           Word To Code
                        </Button>
                    </div>
                </div>
            }
            footer={<Footer/>}
        />
    )
};

export default FeaturesPage;
