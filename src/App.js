import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h2>i like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: 'natto',
    image:
      'https://cdn.pixabay.com/photo/2013/08/01/07/17/natto-169229_960_720.jpg',
  },
  {
    name: 'kimchi',
    image:
      'https://media.istockphoto.com/photos/plate-full-of-kimchi-and-chopsticks-on-side-picture-id158554261?s=612x612',
  },
  {
    name: 'greensarada',
    image:
      'https://cdn.pixabay.com/photo/2016/10/02/20/02/green-1710328_960_720.jpg',
  },
  {
    name: 'yariika',
    image:
      'https://media.istockphoto.com/photos/-picture-id820227544?s=612x612',
  },
  {
    name: 'iwashi',
    image:
      'https://cdn.pixabay.com/photo/2019/04/30/16/45/restaurant-4168987_960_720.jpg',
  },
  {
    name: 'daigakuemo',
    image:
      'https://cdn.pixabay.com/photo/2016/09/13/08/51/sweet-potato-1666707_960_720.jpg',
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}
export default App;
