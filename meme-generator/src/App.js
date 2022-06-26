import './App.css';
import Navbar from './Navbar'
import Meme from './Meme'

function App() {

  const handleMouseIn=()=> {
    console.log("I was clicked!")
  }

    const handleMouseOut=()=> {
    console.log("I was clicked!")
  }


  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Meme/>
      </div>
    </div>
  );
}

export default App;
