import './App.css';
// import CustomCarousel from './components/Carousel';
import Navigation from './components/Navigation_tw';

function App() {
  return (
    <div className="App">
      <div className="flex flex-col">
        <div>
          <Navigation />
        </div>
        <div>{/* <CustomCarousel /> */}</div>
        <div>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
