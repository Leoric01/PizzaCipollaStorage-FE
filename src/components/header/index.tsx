import { Avatar, Box, Button, IconButton } from '@mui/material';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'space-between',
        padding: '16px 48px',
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        background: 'rgb(18, 21, 23);',
        alignItems: 'center',
      }}
    >
      <Box component="img" src="/images/logo.png" width={200}></Box>
      <IconButton>
        <Avatar>MJ</Avatar>
      </IconButton>
    </Box>
  );
};
