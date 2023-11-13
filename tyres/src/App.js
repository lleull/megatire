import './App.css';
import Header from './Components/header/header';

import Homepage from './Components/Homepage/Homepage';
import TireCollection from './Components/Tyres/tirescollection/TireCollection';
function App() {
  return (
    <div className="App">
    <Header/>
    <Homepage/>
    <TireCollection/>
    </div>
  );
}

export default App;
