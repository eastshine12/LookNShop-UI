import { Route, Routes } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CustomCarousel from './components/Carousel';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';
import Login from './components/Login';
import SignUp from './components/Signup';
import AuthRedirectPage from './components/AuthRedirectPage';

const theme = createTheme({
  typography: {
    fontFamily: ['Noto Sans KR', 'Montserrat', 'sans-serif'].join(','),
  },
});

function MainPage() {
  return (
    <Grid container>
      <Grid item xs={12} style={{ marginBottom: '10em' }}>
        <CustomCarousel />
      </Grid>
      <Grid item xs={12}>
        <ProductList />
      </Grid>
    </Grid>
  );
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route exact path="/oauth2/redirect" element={<AuthRedirectPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
