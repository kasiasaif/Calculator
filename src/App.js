import "./App.css";
import Counter from "./components/Counter";


const  App = () => {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="wrapper">
      <Counter />
      </div>
    </div>
  );
}

export default App;