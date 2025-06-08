import { Chart } from '@components';
import { Typography } from '@mui/material';
import { FC } from 'react';

export const State: FC = () => {
  return (
    <>
      <Typography variant="h4">Stav zásob</Typography>
      <Typography variant="body1">Hlavní suroviny za poslední týden</Typography>
      <Chart />
    </>
  );
};
