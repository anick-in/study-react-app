import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

export default  () => {

	const Title = styled.h1`
	  font-size: 18pt;
	  display: flex;
	  justify-content: center;
	  margin-top: 80px;
	`;

	const Button = styled.button`
		border: 1px solid;
	  background-color: black;
	  color: white;
	  font-size: 12pt;
	  width: 175px;
	  height: 43px;
	  font-family: inherit;
	`;
	
	const Discover = styled.div`
		margin-top: -20px;
	  padding-top: -20px;
	  text-align: center;
	  margin-bottom: 40px;
	`;

	const Paragraph = styled.p`
	  font-size: 12pt;
	`;

    return (
      <Grid>
	    <Discover>
		  <Title>Discover Our New Developments</Title>
		  <Paragraph> Compass brings a modern approach to new development marketing and sales.
				 From boutique rental <br /> conversions to luxurious ground-up condominiums,
				  browse our portfolio of current offerings.Contact the Team</Paragraph>
		  <Button> Contact the Team</Button>
	    </Discover>
	  </Grid>
    );
};