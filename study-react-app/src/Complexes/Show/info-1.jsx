import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default props => {

  const Line = styled.div`
    border-bottom: 1px solid #e0d9d9;
    margin-top: 23px;
  `;

  const Section = styled.div``;

  const MarginTop = styled.div`
    margin-top: -10px;
  `;

  const Header = styled.h3`
    font-size: 1.5rem;
  `;

    return(
      <Grid>
        <Row>
          <Col xs={2}>
            <Section>  
              <Header>{props.sentence}</Header>
              <MarginTop>Предложений</MarginTop>
            </Section>
          </Col>

          <Col xs={3}>
            <Section>  
              <Header>{props.architect}</Header>
              <MarginTop>архитектор</MarginTop>
            </Section>
          </Col>

          <Col xs={3}>
            <Section>  
              <Header>{props.builder}</Header>
              <MarginTop>застройщик</MarginTop>
            </Section>
          </Col>
        </Row>
        <Line/>
      </Grid>
    );
};