import React, { Component } from 'react';

import Title from './title';
import Characteristics from './characteristics';
import Description from './description';
import Images from './images';
import Info from './info-1';
import Infrastructure from './infrastructere';
import Suggest from './suggest';
import Yakimanka from './Yakimanka';

import photo1 from '../../img/1.jpg';
import photo2 from '../../img/12.jpg';
import photo3 from '../../img/1234.jpg';
import photo4 from '../../img/123.jpg';
import photo5 from '../../img/12345.jpg';
import yakimanka_photo from '../../img/yakimanka.jpg';
import shape from '../../combined-shape.png';

import BodyClassName from 'react-body-classname';


class Complex extends Component {

  render() {

    const YakimankaTitle = 
    "Исторический центр \n Москвы в двух \n киллометрах от Кремля";

    return (

  <BodyClassName className="body-complex">
 
      <div>
      
      <Title head="Жилой комплекс «Поляна/44»"
       address="Район Якиманка, улица Большая Полянка, дом 44"/>
      
      <Images photo1={photo1} photo2={photo2}
       photo3={photo3} photo4={photo4} photo5={photo5}
       />

      <Info sentence="950" architect="John McAslan + Partner"
       builder="Группа «ПСН»" />

      <Characteristics flats="1 503" status="Квартиры"
      price="от 5,3 млн до 143 млн"/>

      <Description  />

      <Infrastructure pool="Бассейн" school="Частная школа" />

      <Suggest cardHeader="1-комнатные квартиры" square="от 59 до 120 м"
       price="от 20.3 до 84 млн руб"/>

      <Yakimanka src={yakimanka_photo} header="Якиманка"
       title={YakimankaTitle} shape={shape} />
        
      </div>
      
    </BodyClassName>
    );
  };
};

export default Complex;
