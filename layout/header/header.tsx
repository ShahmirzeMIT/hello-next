import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { headerStyle } from '../../components/header/style/homeStyle';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { name: 'Home', url: '/' },
  {
    name: 'About',
    subItems: [
      { name: 'Our Mission', url: '/about/mission' },
      { name: 'Team', url: '/about/team' },
    ],
  },
  {
    name: 'Rent',
    subItems: [
      { name: 'Car Rental', url: '/rent/car' },
      { name: 'Bike Rental', url: '/rent/bike' },
    ],
  },
  { name: 'Contact', url: '/contact' },
];

export default function HeaderComp(props: Props) {
  const { window } = props;
  const elementRef = React.useRef(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openNestedMenu, setOpenNestedMenu] = React.useState<string | null>(null);
  const [position, setPosition] = React.useState({x:0, y:0});
  
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNestedMenuClick = (event: React.MouseEvent<HTMLElement>, name: string) => {
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    const position = { x: rect.x, y: rect.bottom };
  
    setOpenNestedMenu((prev) => (prev === name ? null : name));
    setPosition(position);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  const nestedListItem = (subItem: { name: string; url: string }, parentName: string) => (
    <ListItem key={subItem.name} disablePadding>
      <ListItemButton onClick={(event) => handleNestedMenuClick(event,parentName)}>
        <ListItemText primary={subItem.name} />
      </ListItemButton>
    </ListItem>
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Safely
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <React.Fragment key={item.name}>
            <ListItem disablePadding>
              <ListItemButton onClick={(event) => handleNestedMenuClick(event,item.name)}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
            {item.subItems && openNestedMenu === item.name && (
              <List sx={{ position: 'absolute', left: 60, top: 40 }}>
                {item.subItems.map((subItem) => nestedListItem(subItem, item.name))}
              </List>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  console.log(position,'position');
  
  return (
    <Box sx={{ ...headerStyle.marginBottom, display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ ...headerStyle.appBar }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ ...headerStyle.logoTypgraphy }}>
            Safely
          </Typography>
          <Box sx={{ ...headerStyle.navigateBox }}>
            <List sx={{ display: 'flex' }}>
              {navItems.map((item) => (
                <React.Fragment key={item.name}>
                  <ListItem disablePadding>
                    <ListItemButton onClick={(event) => handleNestedMenuClick(event,item.name)}>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                  {item.subItems && openNestedMenu === item.name && (
                    <List
                        sx={{
                          position: 'absolute',
                          left: position.x/12,
                          top: position.y,
                          color: 'red',
                          zIndex: 99,
                          mt: 1,
                          py: 0,
                          '& .MuiListItemButton-root': {
                            pl: 2,
                          },
                        }}
                      >
                        {item.subItems.map((subItem) => nestedListItem(subItem, item.name))}
                      </List>
                    )}
                </React.Fragment>
              ))}
            </List>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{ ...headerStyle.drawer(drawerWidth) }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
