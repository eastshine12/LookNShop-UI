import './App.css';
import Grid from '@mui/material/Unstable_Grid2';
import CustomCarousel from './components/Carousel';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation /> 
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomCarousel />
        </Grid>
        <Grid item xs={12}>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </Grid>
      </Grid >
    </div>
  );
}

export default App;
