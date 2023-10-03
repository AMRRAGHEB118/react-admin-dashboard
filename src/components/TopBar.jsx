import { Box, Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar } from '../styledComponent/AppBar';
import Search from './Search';
import NavigationIcons from './NavigationIcons';

// eslint-disable-next-line react/prop-types
export default function TopBar({ open, handleDrawerOpen }) {
  return (
    <AppBar position="fixed"
      // @ts-ignore
      open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Search />
        <Box flexGrow={1}/>
        <NavigationIcons />
      </Toolbar>
    </AppBar>
  )
}

