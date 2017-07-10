import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

export default props => {

  const Header = styled.h1`
    font-size: 22pt;
	  font-family: 'Comfortaa', cursive;
	  text-transform: uppercase;
    letter-spacing: 1px;
  `;

  const Paragraph = styled.p`
    font-size: 0.8rem;
    color: grey;
  `;

  const Button = styled.button`
    background-color: white;
	  color: #618de8;
	  box-shadow: none;
	  border: 1px solid;
	  font-size: 0.8rem;
	  width: 140px;
	  height: 28px;
	  font-family: inherit;

	  float: right;
	  margin-top: -73px;
  `;

  return(

    <Grid>
      <Header>{props.head}</Header>
      <Paragraph>{props.address}</Paragraph>
      <Button>
        В избранное
      </Button>
    </Grid>
  );
};
