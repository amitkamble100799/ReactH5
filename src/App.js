import './App.css';
import Clkcmp from './Clkcmp';
import Overcmp from './Overcmp';
import Purecmp from './Purecmp';
function App() {
  return (
    <div className="App">
       <h1 className='H1'>Handson 5</h1>
      <div className='MyShow'>
        <Clkcmp />
        <Overcmp />
      </div>
      <div className='single'>
        <Purecmp />
      </div>
    </div>
  );
}

export default App;
