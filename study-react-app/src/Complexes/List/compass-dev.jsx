import React from 'react';
import styled from 'styled-components';
import CompassDevLogo from '../../CompassDev.svg';

export default () => {

	const Black = styled.div`
	  background-color: #161616; 
	  display: flex;
	  justify-content: center;
	`;
  const Logo2 = styled.img`
		width: 418.9px;
	  height: 131px;
	  padding-top: 80px;
	  padding-bottom: 80px;
	`;

    return (
		    <Black>
		      <Logo2 src={CompassDevLogo} alt="Logo"/>
		    </Black>
    );
};