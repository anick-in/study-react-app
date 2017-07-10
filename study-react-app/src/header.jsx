import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

import logo from './compass-logo.png';

export default () => {

    const Header = styled.header``;

    const Line = styled.div`
      border-bottom: 1px solid #e0d9d9;
    `;

    const Img = styled.img`
      padding-bottom: 20px; 
	    padding-top: 20px; 
	    width: 179px; 
	    height: 24px; 
    `;

    const Navigation = styled.nav`
      float: right;
	    margin-top: 24px;
    `;

    const Link = styled.a`
      text-decoration: none;
	    margin-right: 32px;
	    font-size: 10pt;
	    color: black;
    `;

    return (
        <Header>
          <Grid>
            <Img src={logo} alt="Logo"/>
            <Navigation>
			  <Link href="#">Купить</Link>
			  <Link href="#">Снять</Link>
			  <Link href="#">Наши агенты</Link>
		    </Navigation>
          </Grid>
          <Line />
        </Header>
    );
};

