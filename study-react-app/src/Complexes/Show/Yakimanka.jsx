import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default props => {

  const Section = styled.section`
    background-color: #454545;
  `;

  const Header = styled.h6`
    color:#bfbbbb;
	  font-size: 16pt;
    font-family: Philosopher;
    margin-left: 50px;
  `;

  const Paragraph = styled.p`
    color: white;
	  font-size: 28pt;
    white-space: pre-line;
    font-family: Philosopher;
    margin-left: 50px;
  `;

  const Link = styled.a`
    text-decoration: none;
	  font-size: 0.9rem;
	  color: #128ee5;
    font-family: Philosopher;
    margin-left: 50px;
  `;

  const Img = styled.img`
    width: 580px;
	  height: 380px;
	  margin-top: 40px;
	  margin-bottom: 40px;
    margin-left: -50px;
  `;

  const ImgShape = styled.img`
    margin-left: 5px;
  `;
    return(
      
      <Section>
        <Grid>
          <Row>
            <Col lg={6}>
              <Header>{props.header}</Header>
              <Paragraph>{props.title}</Paragraph>
              <Link href="#">Гид по Якиманке</Link>
              <ImgShape src={props.shape}/>
            </Col>
            <Col lg={6}>
              <Img src={props.src} alt="Yakimanka"/>
            </Col>
          </Row>
        </Grid>  
      </Section>
    );
};