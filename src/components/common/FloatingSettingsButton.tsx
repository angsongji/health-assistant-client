import { Button, Paper, MenuList, MenuItem, ListItemText, ListItemIcon } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckIcon from '@mui/icons-material/Check';
import { useThemeStore } from "../../stores/useThemeStore";
import { useState } from "react";
import { themeModeListName } from "../../types/themeType";
import Backdrop from '@mui/material/Backdrop';

export default function FloatingSettingsButton() {
    const mode = useThemeStore((state) => state.mode);
    const setThemeMode = useThemeStore((state) => state.setThemeMode);
    const [openOptions, setOpenOptions] = useState(false);

    const handleClose = () => {
        setOpenOptions(false);
    };

    const handleThemeSelect = (modeKey: string) => {
        setThemeMode(modeKey);
        setOpenOptions(false);
    };

    return (
        <>
            {/* Backdrop chỉ hiện khi mở menu */}
            <Backdrop 
                open={openOptions} 
                onClick={handleClose}
                sx={{ zIndex: 1300 }} // Thấp hơn menu
            />
            
            {/* Button luôn hiện */}
            <Button
                variant="text"
                onClick={() => setOpenOptions(!openOptions)}
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    left: 16,
                    minWidth: 'auto',
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    zIndex: 1400, // Cao hơn backdrop
                    backgroundColor: 'background.paper',
                    boxShadow: 3,
                    '&:hover': {
                        backgroundColor: 'action.hover',
                    },
                }}
            >
                <SettingsIcon />
            </Button>

            {/* Menu options */}
            {openOptions && (
                <Paper
                    sx={{
                        position: 'fixed',
                        bottom: 72, // Phía trên button
                        left: 16,
                        zIndex: 1401, // Cao nhất
                        minWidth: 150,
                        boxShadow: 6,
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <MenuList>
                        {Object.keys(themeModeListName).map((modeKey) => (
                            <MenuItem
                                key={modeKey}
                                onClick={() => handleThemeSelect(modeKey)}
                                selected={modeKey === mode}
                            >
                                <ListItemText>{themeModeListName[modeKey]}</ListItemText>
                                {modeKey === mode && (
                                    <ListItemIcon sx={{ minWidth: 'auto', ml: 1 }}>
                                        <CheckIcon fontSize="small" />
                                    </ListItemIcon>
                                )}
                            </MenuItem>
                        ))}
                    </MenuList>
                </Paper>
            )}
        </>
    );
}