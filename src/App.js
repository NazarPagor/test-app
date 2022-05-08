import './App.css';
import Region from "./components/region/Region";
import {AppBar, Container, Drawer, IconButton, Toolbar, Typography} from "@mui/material";
import {useState} from "react";
import SideList from "./components/sidebar/SideList";


function App() {
    const [open, setOpen] = useState(false);

    const toggleSlider = () => {
        setOpen(!open);
    };


    return (
        < div className="App" >
            <div >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={toggleSlider}>
                            <Typography sx={{color: "#fff"}}>Click for open sidebar</Typography>
                        </IconButton>
                        <Drawer open={open} anchor="left" onClose={toggleSlider}>
                            <SideList/>
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </div>
            <Container sx={{textAlign:"center"}}> <Region/>  </Container>
        </div>
    );
}

export default App;
