import { Header, Root, Sidebar } from '@components';
import { Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export const LayoutWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Root>
      <Sidebar />
      <Box width="100%">
        <Header />
        <Box padding={6}>{children}</Box>
      </Box>
    </Root>
  );
};
