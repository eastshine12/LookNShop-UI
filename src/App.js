import Grid from '@mui/material/Unstable_Grid2';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CustomCarousel from './components/Carousel';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';

const theme = createTheme({
  typography: {
    fontFamily: ['Noto Sans KR', 'Montserrat', 'sans-serif'].join(','),
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navigation />
        <Grid container>
          <Grid item xs={12} style={{ marginBottom: '10em' }}>
            <CustomCarousel />
          </Grid>
          <Grid item xs={12}>
            <ProductList />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
