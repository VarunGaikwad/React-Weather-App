import './App.css';
import CurrentWeather from './Component/CurrentWeather/CurrentWeather';
import Search from './Component/Search/Search';

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }
  return (
    <div className="Container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
