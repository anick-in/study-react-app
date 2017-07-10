import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default props => {

  const Header = styled.h4`
    font-size: 1.5rem;
  `;

  const Infrastructure = styled.div`
    margin-bottom: 40px;
  `;

  const Data = styled.div``;

    return (
        <Grid>
          <Row>
            <Col xs={2}>
              <Header>Инфраструктура</Header>
            </Col>
          </Row>
          
          <Infrastructure>
          <Row>  
            <Col xs={2}>
              <Data>
                <p>{props.pool}</p>
                <p>{props.school}</p>
              </Data>
            </Col>
          <Col xs={2}>
              <Data>
                <p>{props.pool}</p>
                <p>{props.school}</p>
              </Data>
            </Col>
          <Col xs={2}>
              <Data>
                <p>{props.pool}</p>
                <p>{props.school}</p>
              </Data>
            </Col>
          <Col xs={2}>
              <Data>
                <p>{props.pool}</p>
                <p>{props.school}</p>
              </Data>
            </Col>
          <Col xs={2}>
              <Data>
                <p>{props.pool}</p>
                <p>{props.school}</p>
              </Data>
            </Col>
          <Col xs={2}>
              <Data>
                <p>{props.pool}</p>
                <p>{props.school}</p>
              </Data>
            </Col>
          </Row>
        </Infrastructure>
      </Grid>
    );
};