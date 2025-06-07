import { Box, styled } from '@mui/material';

export const Root = styled(Box)`
  display: flex;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.palette.background.paper};
  ${({ theme }) => theme.breakpoints.down('md')} {
  }
  ${({ theme }) => theme.breakpoints.down('sm')} {
  }
`;
