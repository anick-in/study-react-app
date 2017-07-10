import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';


export default props => {

  const Images = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
`;

  const Img = styled.img`
    width: 280px;
	  height: 380px;
  `;

  const ImgBig = styled.img`
	  height: 380px;
  `;

  const ButtonArea = styled.div`
    position: absolute;
    margin: -3.725rem 0 0 1.3rem;
  `;

  const Button = styled.button`
    padding: 0.5rem 1rem 0.5rem 1rem;
    background-color: #618de8;
	  color: white;
	  box-shadow: none;
	  border: 1px solid;
	  font-size: 0.8rem;
	  font-family: inherit;
  `;

    return(
      <div>
      <Images>
        <Img src={props.photo1} alt="House" />
        <Img src={props.photo2} alt="House"/>
        <ImgBig src={props.photo3} alt="House" />
        <Img src={props.photo4} alt="House" />
        <Img src={props.photo5} alt="House"/>
      </Images>  
        <Row>
        <ButtonArea> 
          <Button>41 Фотография</Button>
        </ButtonArea>
        </Row>
        </div>
    );
};