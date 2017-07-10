import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

export  default props => {

  const Cards = styled.div`
    background-color: #f7f7f7;
    margin-top: 30px;
  `;

  const Header = styled.h4`
    text-align: center;
	  font-size: 18pt;
    margin-top: 40px;
  `;

  const Info = styled.div`
    margin-left: 25px;
  `;

  const Card = styled.div`
    background-color: white;
	  margin-top: 32px;
	  margin-bottom: 50px;
	  font-size: 11pt;
  `;

  const CardHeader = styled.h5`
    font-size: 1.125rem;
  `;

  const Paragraph = styled.p`
    color: grey;
  `;

  const ButtonArea = styled.div`
    text-align: center;
  `;
  const Button = styled.button`
    border: 0px solid;
	  background-color: black;
	  color: white;
	  font-size: 11pt;
	  width: 208px;
	  height: 36px;
	  font-family: inherit;
	  font-weight: bold;

	  margin-top: 10px;
	  margin-bottom: 20px;
  `;

  return (
       <Cards>
        <Grid>
          <Row> 
            <Col xs={4} xsOffset={4}>
              <Header>Предложения в ЖК «Поляна/44»</Header>
            </Col>  
          </Row>

          <Row>
            <Col xs={4}>
              <Card>
              <Info>
                <CardHeader>{props.cardHeader}</CardHeader>
                <Paragraph>Площадь</Paragraph>
                <p>{props.square}</p>
                <Paragraph>Стоимость</Paragraph>
                <p>{props.price}</p>
              </Info>
              <ButtonArea>
                <Col xs={12}>
                  <Button>Посмотреть предложения</Button>
                </Col>
              </ButtonArea>
              </Card>
            </Col>
            
            <Col xs={4}>
              <Card>
              <Info>
                <CardHeader>{props.cardHeader}</CardHeader>
                <Paragraph>Площадь</Paragraph>
                <p>{props.square}</p>
                <Paragraph>Стоимость</Paragraph>
                <p>{props.price}</p>
              </Info>
              <ButtonArea>
                <Button>Посмотреть предложения</Button>
              </ButtonArea>
              </Card>
            </Col>

            <Col xs={4}>
              <Card>
              <Info>
                <CardHeader>{props.cardHeader}</CardHeader>
                <Paragraph>Площадь</Paragraph>
                <p>{props.square}</p>
                <Paragraph>Стоимость</Paragraph>
                <p>{props.price}</p>
              </Info>
              <ButtonArea>
                <Button>Посмотреть предложения</Button>
              </ButtonArea>
              </Card>
            </Col>

          </Row>
        </Grid>
      </Cards>
  );  
};