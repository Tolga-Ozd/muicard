import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Angular from "./images/angular.jpg";
import Course from './Course';
import Bootstrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import Kompleweb from "./images/kompleweb.jpg";

function App() {
  return (
    <div>

        <AppBar>
          <Toolbar sx= {{fontSize:30}}>Kart Projesi</Toolbar>
        </AppBar>

        <Container>
            <Grid container spacing={2} sx={{marginTop : 10}}>
                  <Grid item xs={12} md={6} lg={3}>
                    <Course 
                     image={Angular}
                     title= "Angular"
                     description= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vel alias sint doloremque ducimus nisi voluptatem tempore repellendus numquam odit ad repellat aperiam maxime dignissimos non ipsa nesciunt, voluptates officiis!"
                    />
                  </Grid>

                  <Grid item xs={12} md={6} lg={3}>
                  <Course 
                     image={Bootstrap}
                     title= "Bootstrap"
                     description= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vel alias sint doloremque ducimus nisi voluptatem tempore repellendus numquam odit ad repellat aperiam maxime dignissimos non ipsa nesciunt, voluptates officiis!"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                  <Course 
                     image={Csharp}
                     title= "Csharp"
                     description= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vel alias sint doloremque ducimus nisi voluptatem tempore repellendus numquam odit ad repellat aperiam maxime dignissimos non ipsa nesciunt, voluptates officiis!"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                  <Course 
                     image={Kompleweb}
                     title= "Kompleweb"
                     description= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vel alias sint doloremque ducimus nisi voluptatem tempore repellendus numquam odit ad repellat aperiam maxime dignissimos non ipsa nesciunt, voluptates officiis!"
                    />
                  </Grid>
            </Grid>
        </Container>
        
    </div>
  );
}

export default App;
