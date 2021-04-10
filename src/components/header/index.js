import React from 'react';
import { useHistory, useLocation } from "react-router";
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const Root = styled('header')({
  display: 'flex',
  justifyContent: 'center'
})

const Buttons = styled('div')({
  margin: '16px',
  height: '15%',
  justifyContent: 'center',
  display: 'flex',
  flexWrap: 'wrap'
})

const buttonStyles = {
  fontSize: '19px',
  marginLeft: '10px',
  marginRight: '10px'
}

const Header = () => {
    const { pathname } = useLocation();
    const history = useHistory();

    const getActiveButtonsProps = name => {
      if (name === pathname) {
        return {
          color: "primary", 
          variant: "contained",
        }
      }
    };
 
    return(
      <Root>
        <Buttons>
          <div className="lg:mr-48">
            <Button style={buttonStyles} onClick={() => history.push('/about')} {...getActiveButtonsProps('/about')}>
              About
            </Button>
          </div>
            <Button style={buttonStyles} onClick={() => history.push('/animations')}  {...getActiveButtonsProps('/animations')}>
              Animations
            </Button>
            <Button style={buttonStyles} onClick={() => history.push('/canvas-interaction')} {...getActiveButtonsProps('/canvas-interaction')}>
              Canvas Interaction
            </Button>
            <Button style={buttonStyles} onClick={() => history.push('/features')} {...getActiveButtonsProps('/features')}>
              Features
            </Button>
        </Buttons>
      </Root>
    )
}

export default Header;