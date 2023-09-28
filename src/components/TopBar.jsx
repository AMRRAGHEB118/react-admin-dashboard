import { Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar } from '../styledComponent/AppBar';
import { Search, SearchIconWrapper, StyledInputBase } from '../styledComponent/Search';
import SearchIcon from '@mui/icons-material/Search';

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
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  )
}

