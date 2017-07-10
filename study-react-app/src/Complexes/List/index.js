import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';

import CompassDev from './compass-dev';
import DiscoverOurNew from './Discover-Our-New';
import Card from './card';


import CardPhoto1 from '../../img/bitmap.png';
import CardPhoto2 from '../../img/123.jpg';
import CardPhoto3 from '../../img/1234.jpg';
import CardPhoto4 from '../../img/12345.jpg';


class Complexes extends Component {
  render() {
    const CardInformaton1 = '152 Elizabeth is an ultra-luxury condominium building—the first in \n New York City designed by Japanese master architect Tadao Ando. \n Located at the corner of Kenmare and Elizabeth Streets in Nolita, \n the 32,000-square-foot building will stand as a profound \n architectural...';
    const CardInformaton2 = 'Beautifully appointed residences perched atop Rincon Hill, The \n Harrison offers unparalleled Bay Bridge and city views within steps of \n San Francisco’s greatest restaurants, shops, and The Embarcadero. \n With gracious interiors curated by acclaimed San Francisco- \n based...';

    return (

      <div>
                
        <CompassDev/>
        <DiscoverOurNew />
        <Grid>
        <Card src={CardPhoto1} headding="152 Elizabeth" information={CardInformaton1} />
        <Card src={CardPhoto2} headding="The Harrison" information={CardInformaton2} />
        <Card src={CardPhoto3} headding="Park Place" information={CardInformaton1} />
        <Card src={CardPhoto4} headding="Manhattan Avenue" information={CardInformaton1} />
        </Grid>
        
      </div>
    );
  };
};

export default Complexes;
