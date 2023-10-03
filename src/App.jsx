import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { DrawerHeader } from './styledComponent/DrawerHeader'
import Drawer from './components/Drawer';
import TopBar from './components/TopBar';
import { useState, useMemo } from 'react';
import { ModeContext } from './context/ModeContext';
import { getDesignTokens } from './theme'

export const drawerWidth = 240;

export default function App() {
  const [mode, setMode] = useState(localStorage.getItem("currentMode") || 'light')
  useMemo(() => { localStorage.setItem("currentMode", mode )}, [mode])
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ModeContext.Provider value={{mode, setMode}}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <TopBar open={open} handleDrawerOpen={handleDrawerOpen} />
          <Drawer open={open} handleDrawerClose={handleDrawerClose} />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
          </Box>
        </Box>
      </ThemeProvider>
    </ModeContext.Provider>
  );
}
