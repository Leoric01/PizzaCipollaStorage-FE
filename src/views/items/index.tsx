import { Grid } from '@mui/material';
import { ItemCard } from 'components/itemCard';
import { FC } from 'react';

export const pizzas = [
  {
    id: '1',
    name: 'Margherita',
    ingredients: ['tomato', 'mozzarella', 'basil'],
  },
  {
    id: '2',
    name: 'Salame',
    ingredients: ['tomato', 'mozzarella', 'Italian spicy salami'],
  },
  {
    id: '3',
    name: 'Vesuvio',
    ingredients: ['tomato', 'mozzarella', 'ham on the bone'],
  },
  {
    id: '4',
    name: 'Capricciosa',
    ingredients: ['tomato', 'mozzarella', 'ham on the bone', 'mushrooms'],
  },
  {
    id: '5',
    name: 'Quattro Formaggi',
    ingredients: [
      'cream',
      'mozzarella',
      'mascarpone',
      'gorgonzola',
      'parmesan',
    ],
  },
  {
    id: '6',
    name: 'Alla Crema',
    ingredients: ['cream', 'mozzarella', 'ham on the bone', 'parmesan'],
  },
  {
    id: '7',
    name: 'Mascarpone',
    ingredients: [
      'tomato',
      'mozzarella',
      'mascarpone',
      'Italian spicy salami',
      'jalapeños',
    ],
  },
  {
    id: '8',
    name: 'Piccante',
    ingredients: [
      'tomato',
      'mozzarella',
      'Italian spicy salami',
      'bell pepper',
      'egg',
      'jalapeños',
    ],
  },
  {
    id: '9',
    name: 'Prosciutto Crudo',
    ingredients: ['tomato', 'mozzarella', 'Parma ham', 'arugula'],
  },
  {
    id: '10',
    name: 'Don Corleone',
    ingredients: [
      'tomato',
      'mozzarella',
      'ham on the bone',
      'Italian spicy salami',
      'pancetta',
      'mushrooms',
    ],
  },
  {
    id: '11',
    name: 'Hawai',
    ingredients: ['tomato', 'mozzarella', 'ham on the bone', 'pineapple'],
  },
  {
    id: '12',
    name: 'Papa Cipolla',
    ingredients: [
      'cream',
      'mozzarella',
      'pancetta',
      'red onion',
      'leek',
      'Parma ham',
      'egg',
    ],
  },
  {
    id: '13',
    name: 'Mexicana',
    ingredients: [
      'tomato',
      'mozzarella',
      'pancetta',
      'beans',
      'red onion',
      'jalapeños',
    ],
  },
  {
    id: '14',
    name: 'Spinaci e Pollo',
    ingredients: [
      'cream',
      'mozzarella',
      'spinach',
      'grilled chicken breast',
      'cracked pepper',
    ],
  },
  {
    id: '15',
    name: 'Siciliana',
    ingredients: ['tomato', 'mozzarella', 'tuna', 'red onion'],
  },
  {
    id: '16',
    name: 'Funghi',
    ingredients: ['tomato', 'mozzarella', 'mushrooms'],
  },
  {
    id: '17',
    name: 'Spinaci',
    ingredients: ['tomato', 'mozzarella', 'spinach', 'egg'],
  },
  {
    id: '18',
    name: 'Napoletana',
    ingredients: [
      'tomato',
      'mozzarella',
      'anchovy fillets',
      'tomatoes',
      'black olives',
    ],
  },
  {
    id: '19',
    name: 'Dolce Banana',
    ingredients: ['cream', 'mascarpone', 'Nutella', 'banana', 'vanilla sugar'],
  },
  {
    id: '20',
    name: 'Bandiera',
    ingredients: ['cream', 'mozzarella', 'tomatoes', 'arugula', 'garlic'],
  },
  {
    id: '21',
    name: 'Marco Polo',
    ingredients: [
      'tomato',
      'mozzarella',
      'grilled chicken breast',
      'tomatoes',
      'parmesan',
    ],
  },
];

export const Items: FC = () => {
  return (
    <>
      <Grid container spacing={3}>
        {pizzas.map((data) => (
          <ItemCard key={data.id} pizza={data} />
        ))}
      </Grid>
    </>
  );
};
