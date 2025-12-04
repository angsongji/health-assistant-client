import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Box, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

// Demo layout đơn giản
const UserLayout = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        height: '100vh',
        bgcolor: 'background.default' // Tự động: gray-100 (light) hoặc white (dark)
      }}
    >
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': { 
            width: 240, 
            boxSizing: 'border-box',
            bgcolor: 'custom.background.sidebar', // Tự động: white (light) hoặc blue-600 (dark)
            color: 'text.primary', // Tự động điều chỉnh theo theme
          },
        }}
      >
        <Toolbar>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 'bold',
              color: 'primary.main' // Tự động: blue-600 (light) hoặc white (dark)
            }}
          >
            Dashboard
          </Typography>
        </Toolbar>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Menu Item 1" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Menu Item 2" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: 3, 
          display: 'flex', 
          flexDirection: 'column',
          bgcolor: 'background.default' // Tự động: gray-100 (light) hoặc white (dark)
        }}
      >
        <AppBar 
          position="static" 
          sx={{ 
            bgcolor: 'background.paper',
            color: 'text.primary',
            boxShadow: 1,
            mb: 2
          }} 
          color="transparent"
        >
          <Toolbar>
            <Typography variant="h6">Header</Typography>
          </Toolbar>
        </AppBar>
        
        {/* Render Page Content */}
        <Box 
          sx={{ 
            flexGrow: 1, 
            bgcolor: 'background.paper', // Tự động: white (light) hoặc blue-600 (dark)
            color: 'text.primary', // Tự động điều chỉnh
            borderRadius: 2,
            boxShadow: 1,
            p: 3,
            overflow: 'auto'
          }}
        >
           <Suspense fallback={<div>Loading Page...</div>}>
             <Outlet />
           </Suspense>
        </Box>
      </Box>
    </Box>
  );
};

export default UserLayout;