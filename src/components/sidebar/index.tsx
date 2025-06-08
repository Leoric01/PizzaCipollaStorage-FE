import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { FC, useState } from 'react';
import { ChevronLeft, ChevronRight, Inbox } from '@mui/icons-material';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import { useNavigate } from 'react-router';

interface MenuProps {
  open?: boolean;
}

const openedMixin = (theme: Theme): CSSObject => ({
  width: 240,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Menu = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open',
})<MenuProps>(({ theme, open }) => ({
  width: 240,
  borderRight: `1px solid ${theme.palette.divider}`,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  overflow: 'visible',
  ...(open
    ? {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }
    : {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
}));

export const OpenCloseIcon = styled(IconButton)`
  background: ${({ theme }) => theme.palette.background.paper};
  position: absolute;
  border-radius: 10;
  top: 8px;
  right: -18px;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  transition:
    background 0.2s,
    box-shadow 0.2s;

  &:hover {
    background: #f6f6f6;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  }
`;

export const Sidebar: FC = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const BUTTONS = [
    {
      title: 'Dashboard',
      action: () => navigate('/state'),
      icon: <Inbox />,
    },
    {
      title: 'Prodejní položky',
      action: () => navigate('/items'),
      icon: <Inbox />,
    },
    {
      title: 'Stav zásob',
      action: () => navigate('/state'),
      icon: <Inbox />,
    },
    {
      title: 'Spotřeba',
      action: () => navigate('/usage'),
      icon: <Inbox />,
    },

    {
      title: 'Inventura',
      action: () => navigate('/state'),
      icon: <Inbox />,
    },
    {
      title: 'Ingredience',
      action: () => navigate('/state'),
      icon: <Inbox />,
    },
  ];

  return (
    <Menu open={open}>
      <Box position="relative" height={40} overflow="visible">
        <OpenCloseIcon
          onClick={() => {
            setOpen(!open);
          }}
          size="small"
        >
          {!open ? <ChevronRight /> : <ChevronLeft />}
        </OpenCloseIcon>
      </Box>
      <List>
        {BUTTONS.map(({ title, action, icon }, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={action}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: 'initial',
                    }
                  : {
                      justifyContent: 'center',
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: 'center',
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: 'auto',
                      },
                ]}
              >
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={title}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Menu>
  );
};
