import { IconButton, Stack, useTheme } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { ModeContext } from "../context/ModeContext";
import { useContext } from "react";

export default function NavigationIcons() {
    // @ts-ignore
    const { setMode } = useContext(ModeContext)
    const theme = useTheme()

    const handleChangeMode = () => {
        setMode((prev) => prev === 'dark' ? 'light' : 'dark' )
    }
    return (
        <Stack direction="row" spacing={1}>
            <IconButton color="inherit" aria-label="mode" onClick={handleChangeMode}>
                {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
            <IconButton color="inherit" aria-label="notifications">
                <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="settings">
                <SettingsIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="profile">
                <PersonIcon />
            </IconButton>
        </Stack>
    )
}
