import React from 'react';
import styled from 'styled-components';


export default props => {

	const Card = styled.div`
	  display: flex;
	  background-color: white;
	  box-shadow: 0 2px 0 rgba(0,0,0,0.5);
	  margin-top: 20px;
	  margin-bottom: 30px;
		
	`;

	const Complex = styled.a `
	  text-decoration: none;
	  font: inherit;
	  color: black;
	`;

	const Photo = styled.img`

	  box-shadow: none;
	  margin-bottom: -6px;
		width: 30.25rem;
    height: 21.875rem;
	`;

	const Head = styled.div`
	  margin-left: 2rem;
	`;

	const Headding = styled.h2`
	  font-size: 36pt;
		font-family: Philosopher;
	`;

	const Paragraph = styled.p`
	  white-space: pre-line;
	`;

    return (

			 <Card>

				 <Complex href="complex.html">
	         <Photo src={props.src} alt="Photo" />
				 </Complex>
	          <Head>
	            <Headding>{props.headding}</Headding>
	            <Paragraph>{props.information}</Paragraph>
	          </Head>

	     </Card>

    );
}
