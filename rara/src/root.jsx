import NavBar from "./shared_components/navbar/navbar";
import Container from "@mui/material/Container";
import Footer from "./shared_components/footer/footer";
import SideBar from "./shared_components/sidebar/sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import RARALogo from "./shared_components/logo/logo";
import IconButton from '@mui/material/IconButton';
import Minimize from '@mui/icons-material/Minimize'

export default function Root() {
  let location = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <main>
      <NavBar />
      <Container maxWidth={"lg"} sx={{margin: "20px auto"}}>
        <div className="root">
          <div>
            <SideBar />
          </div>
          <div className= {location != "/" ? `content` : undefined}>
            <Outlet />
            
            {location != "/" && 
            <>
              <IconButton className="close" onClick={() => navigate('/')}>
                <Minimize />
              </IconButton>
              <div className="logo">
                <RARALogo />
              </div>
            </>
            }
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  );
}