import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import Data from './data';

const dataElements = Data.map((element)=>{
  return (<Card
            key={element.id}
            element={element}
          />)
})

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <section className="cards-list">
        {dataElements}
      </section>
    </div>
  );
}

export default App;
