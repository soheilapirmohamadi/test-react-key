import './App.css';
import MyComponent from './Components/MyComponent';

function App() {
  return (
    [1,2,3,4,5,6,8,9,10].map(a=><MyComponent key={a} id={a} />)
  );
}

export default App;
