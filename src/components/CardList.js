import React from 'react';
import Card from './Card';

export default ({ robots }) => {
  const cardsArray = robots.map((robot, i) => (
    <Card
      key={i}
      name={robots[i].name}
      email={robots[i].email}
      id={robots[i].id}
    />
  ));

  return <div>{cardsArray}</div>;
};
