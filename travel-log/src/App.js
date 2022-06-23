import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import Data from './data.js'

const dataElements = Data.map((element) => {
  return (
    <Card
      element={element}
    />
    )
})


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        {dataElements}
      </div>

    </div>
  );
}

export default App;
