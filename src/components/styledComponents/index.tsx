import { Box, styled } from '@mui/material';

export const Root = styled(Box)`
  width: 100%;
  background: ${({ theme }) => theme.palette.background.paper};
  ${({ theme }) => theme.breakpoints.down('md')} {
  }
  ${({ theme }) => theme.breakpoints.down('sm')} {
  }
`;
