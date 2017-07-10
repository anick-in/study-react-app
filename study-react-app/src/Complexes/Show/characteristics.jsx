import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default props => {


  const Header = styled.h4`
   	font-size: 1.5rem;
  `;

  const KindData = styled.nav``;

  const Data = styled.nav`
    font-weight: bold;
  `;

    return (

      <Grid>
        <Row>
          <Col xs ={2}>
            <Header>Характеристики</Header>
          </Col>
        </Row>
        <Row>  
          <Col xs={2}>
            <KindData>
              <p>Количество квартир:</p>
              <p>Статус:</p>
              <p>Цены:</p>
            </KindData>
          </Col>
          <Col xs={2}>
            <Data>
              <p>{props.flats}</p>
              <p>{props.status}</p>
              <p>{props.price}</p>
            </Data>  
          </Col>
          <Col xs={2}>
            <KindData>
              <p>Количество квартир:</p>
              <p>Количество квартир:</p>
              <p>Количество квартир:</p>
            </KindData>
          </Col>
          <Col xs={2}>
            <Data>
              <p>{props.flats}</p>
              <p>{props.status}</p>
              <p>{props.price}</p>
            </Data>  
          </Col>
          <Col xs={2}>
            <KindData>
              <p>Количество квартир:</p>
              <p>Количество квартир:</p>
              <p>Количество квартир:</p>
            </KindData>
          </Col>
          <Col xs={2}>
            <Data>
              <p>{props.flats}</p>
              <p>{props.status}</p>
              <p>{props.price}</p>
            </Data>  
          </Col>
        </Row>
      </Grid>
    );
};