import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router';

export interface ItemCardProps {
  pizza: {
    id: string;
    name: string;
    ingredients: string[];
  };
}

export const ItemCard: FC<ItemCardProps> = ({ pizza }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ width: 300 }}>
      <CardMedia component="img" image="images/pizza.png" alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pizza.name}
        </Typography>
        <Stack spacing={1}>
          {pizza.ingredients.map(
            (item, index) =>
              index < 3 && (
                <Typography key={index} variant="body1">
                  • {item}
                </Typography>
              ),
          )}
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => navigate('/items/' + pizza.id)}
        >
          Detail
        </Button>
      </CardActions>
    </Card>
  );
};
