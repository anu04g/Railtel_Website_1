import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useNavigate } from 'react-router-dom';

export default function TemporaryDrawer({ open, toggleDrawer }) {
  const navigate = useNavigate();

  const handleListItemClick = (page) => {
    navigate(page);
    toggleDrawer();
  };

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer}>
        <Box
          sx={{ 
            width: 250 ,
           }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
          >
          <List>
            <ListItem key="List1" disablePadding>
              <ListItemButton onClick={() => handleListItemClick('/page1')}>
                <ListItemIcon>
                  <InboxIcon
                  sx={{color: '#C9DAE6'}}
                  />
                  {/* <Box
                    sx={{
                      width: 24,
                      height: 24,
                      backgroundColor: 'primary.main',
                    }}
                  /> */}
                </ListItemIcon>
                <ListItemText primary="List 1" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem key="List2" disablePadding>
              <ListItemButton onClick={() => handleListItemClick('/page2')}>
                <ListItemIcon>
                <InboxIcon
                  sx={{color: '#C9DAE6'}}
                  />
                </ListItemIcon>
                <ListItemText primary="List 2" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem key="List3" disablePadding>
              <ListItemButton onClick={() => handleListItemClick('/page3')}>
                <ListItemIcon>
                <InboxIcon
                  sx={{color: '#C9DAE6'}}
                  />
                </ListItemIcon>
                <ListItemText primary="List 3" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          
        </Box>
      </Drawer>
    </div>
  );
}
