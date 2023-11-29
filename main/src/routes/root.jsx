import { Outlet, useNavigate } from "react-router-dom"
import React, { useState } from "react"
import { Container, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemText, IconButton, AppBar, Box, Divider, Toolbar, Typography, ThemeProvider, createTheme } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

const navItems = { "Home": "/", "Projects": "projects" }

const theme = createTheme({
    components: {
        MuiCssBaseline: {
        
        }
    }
})

const Root = (props) => {
    const [open, setOpen] = useState(false)

    const nav = useNavigate()

    const toggleDrawer = () => setOpen(!open)

    const sxSI = {

            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            colors: 'inherit',
            textDecoration: 'none'
        }
    

    const drawer = (
        <Box sx={{ width: 250, textAlign: "center" }} role="presentation" onKeyDown={toggleDrawer}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, ...sxSI }}>
            SI
          </Typography>

            <Divider />
            <List>
                {Object.keys(navItems).map((label) => (
                    <ListItem key={label} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }} onClick={() => {
                            nav(navItems[label])
                            toggleDrawer()
                        }}>
                            <ListItemText primary={label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )


    return (
        <ThemeProvider>
            {/* sidebar, navigation, etc. */}

            {/* <Box sx={{display: "flex", flexGrow: 1}}> */}
            <CssBaseline enableColorScheme theme={theme} />
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <IconButton
                            size="large"
                            aria-label="open drawer"
                            edge="start"
                            color="inherit"
                            onClick={toggleDrawer}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, ...sxSI }}>
                            SI
                        </Typography>

                    </Toolbar>
                </Container>
            </AppBar>

            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Outlet />
            </Box>

            <Drawer
                open={open}
                anchor="left"
                onClose={toggleDrawer}
                sx={{
                    width: "25%"
                }}
            >
                {drawer}
            </Drawer>

            {/* </Box> */}

            {/* footer or whatnot */}
        </ThemeProvider>
    )
}

export default Root;