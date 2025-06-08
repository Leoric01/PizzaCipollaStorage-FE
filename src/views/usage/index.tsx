import { Chart } from '@components';
import { Typography } from '@mui/material';
import { FC } from 'react';

export const Usage: FC = () => {
  return (
    <>
      <Typography variant="h4">Spotřeba surovin</Typography>
      <Chart />
    </>
  );
};
