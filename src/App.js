import './App.css';
import Header from './Components/sections/Header';
import SubHeader from './Components/sections/SubHeader';
import CountryList from './Components/sections/CountryList';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <SubHeader></SubHeader>
      <CountryList />
    </div>
  );
}

export default App;
