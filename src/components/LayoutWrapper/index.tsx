import { Header, Root, Sidebar } from '@components';
import { Box } from '@mui/material';
import { FC } from 'react';
import { Outlet } from 'react-router';

export const LayoutWrapper: FC = () => {
  return (
    <Root>
      <Sidebar />
      <Box width="100%">
        <Header />
        <Box padding={6}>
          <Outlet />
        </Box>
      </Box>
    </Root>
  );
};
