// import logo from './logo.svg';
import './App.css';
const currdate=new Date().toLocaleDateString()
const currtime=new Date().toLocaleTimeString()
function App() {
  
  return (
    <>
    <h1>hello my name is Neeraj</h1>
  <p>Current date is={currdate}</p>
  <p>Current date is={currtime}</p>
 
    </>
  );
}

export default App;
