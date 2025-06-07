import { Box, Button } from '@mui/material';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <Box
      sx={{ flexGrow: 1, display: 'flex', justifySelf: 'right', padding: 2 }}
    >
      <Button>Login</Button>
    </Box>
  );
};
