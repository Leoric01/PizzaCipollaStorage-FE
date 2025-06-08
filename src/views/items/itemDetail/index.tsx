import { FC } from 'react';
import { useParams } from 'react-router';
import { pizzas } from '..';
import { Stack, Typography } from '@mui/material';

export const ItemDetail: FC = () => {
  const { id } = useParams();

  const pizza = pizzas.find((item) => item.id === id);
  return (
    <>
      <Stack spacing={1}>
        {pizza!.ingredients.map((item, index) => (
          <Typography key={index} variant="body1">
            • {item}
          </Typography>
        ))}
      </Stack>
    </>
  );
};
