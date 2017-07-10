import React from 'react';
import styled from 'styled-components';

export default () => {

  const Link = styled.a`
	  color: #c9c9c9;
	  text-decoration: none;
	`;

	const Header = styled.h3`
	  color: grey;
	`;

	const List = styled.li`
	  margin-top: 18px;
	`;

    return (
        <div>
		  <hr color="grey" />
		  <Header>Жилые комплексы</Header>
		  <List><Link href="#">ВТБ Арена Парк</Link></List>
		  <List><Link href="#">Садовые кварталы</Link></List>
		  <List><Link href="#">Резиденция Монэ</Link></List>
        </div>
    );
};