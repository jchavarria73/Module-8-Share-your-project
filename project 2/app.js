let data = [
  {
    name: 'Big Mac',
    price: '$5.09'
  },
  {
    name: 'Quareter Pounder with Cheese',
    price: '$5.69'
  },
  {
    name: 'Cheeseburger',
    price: '$2.09'
  },
  {
    name: 'Hamburger',
    price: '$1.79'
  },
  {
    name: 'McChicken',
    price: '$2.19'
  },
  {
    name: 'Filet-O-Fish',
    price: '$4.79'
  },
  {
    name: 'Medium French Fries',
    price: '$3.89'
  },
  {
    name: 'Medium Coke',
    price: '$1.69'
  }
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
  return '<div>' + item.name + ': ' + item.price + '</div>';
});

info.innerHTML = details.join('\n');
