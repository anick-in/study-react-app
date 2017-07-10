import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import shape from './combined-shape.png';
import FooterList from './FooterList';

export default () => {
	
	const Footer = styled.footer`
	  background-color: #161616;
	`;

	const FirstCol = styled.div`
	  margin-top: 20px;
	  color: grey;
	`;

	const Nav = styled.nav`
	  margin-top: 30px;
	  list-style: none;
	  margin-bottom: 20px;
	`;

	const List = styled.li`
	  margin-top: 18px;
	`;

	const Link = styled.a`
	  color: #c9c9c9;
	  text-decoration: none;
	`;

	const Phone = styled.p`
	  margin-top: 30px;
	`;

	const LastList = styled.div`
	  margin-top: 30px;
	`;

	const Shape = styled.img`
	  margin-left: 5px;
	`;

	const LowText = styled.p`
	  color: #c9c9c9;
	  font-size: 0.75rem;
	  margin-bottom: 30px;
	  margin-top: 80px;
	`;


    return(
      <Footer>
		    <Grid>
			    <Row>
						<Col xs={3}>
			      <FirstCol>
			        <p><strong>ООО "Ярд"</strong></p>
				      <p>ОГРН 1175074002531</p>
				      <p>ИНН 5036165365</p>
				      <Phone>+7 (999) 821-14-88</Phone>
			      </FirstCol>
						</Col>
			      <Col xs={2} xsOffset={2}>
				      <Nav>
				        <FooterList />
				        <LastList>
					        <List>
					          <Link href="#">Все ЖК Москвы</Link>
					          <Shape src={shape}/>
					        </List>
				        </LastList>
				      </Nav>
			      </Col>
			       <Col xs={2}>
				      <Nav>
				        <FooterList />
              </Nav> 
			      </Col>						
		      </Row>
		      <Row>
		        <Col xs={8} xsOffset={4}>
			        <LowText>Любая информация, предоставленная на этом сайте, несет
								 исключительно информационный характер и ни при каких условиях не
								  является публичерй офертой, определяемой положениями статьи 437 ГК РФ.
									 (с) ООО "Ярд" 2017.</LowText>
		        </Col>	
		      </Row>	
	    </Grid>		
    </Footer>	

    );
};