import React from 'react';
import { styled } from '@material-ui/styles';
import { Button } from '@material-ui/core';

const HeaderSt = styled('header')({
  display: 'flex',
  justifyContent: 'center'
})

const ContentBox = styled('div')({
  margin: '20px',
  height: '15%',
})

const bottonStyles = {
  fontSize: '19px',
  marginLeft: '10px',
  marginRight: '10px'
}

const Header = () => {
    return(
      <HeaderSt>
        <ContentBox>
        <Button style={bottonStyles}>
          About
        </Button>
        <Button style={bottonStyles}>
          Contacts
        </Button>
        <Button style={bottonStyles}>
          Projects
        </Button>
        </ContentBox>
      </HeaderSt>
    )
}

export default Header;