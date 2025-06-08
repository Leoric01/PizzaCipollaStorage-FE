import { Box } from '@mui/material';
import { FC, useState } from 'react';
import ReactApexChart, { Props } from 'react-apexcharts'; // Ensure this is installed

export const Chart: FC = () => {
  const [state, setState] = useState<Props>({
    series: [
      {
        name: 'Mozzarela',
        data: [23, 18, 22, 19, 24, 27, 23],
      },
      {
        name: 'Šunka',
        data: [3, 4, 2, 3, 5, 6, 4],
      },
      {
        name: 'Sugo',
        data: [5, 6, 5, 4, 5, 7, 5],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2025-05-19T00:00:00.000Z',
          '2025-05-20T00:30:00.000Z',
          '2025-05-21T00:30:00.000Z',
          '2025-05-22T00:30:00.000Z',
          '2025-05-23T00:30:00.000Z',
          '2025-05-24T00:30:00.000Z',
          '2025-05-25T00:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
      yaxis: {
        labels: {
          formatter: (value: number) => `${value} kg`,
        },
      },
    },
  });

  return (
    <Box maxWidth={1000}>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={350}
      />
    </Box>
  );
};
