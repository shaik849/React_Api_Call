import ApiController from './Controller/ApiController';
import './App.css';
import Counter from './Controller/Counter';
import { CounterContext } from './Controller/ContextApiProvider';
import { useContext } from 'react';

function App() {
  const counterState = useContext(CounterContext);
  return (
    <div className="App">
     <ApiController></ApiController>
     <h1>Count {counterState.count}</h1>
     <Counter></Counter>
     <Counter></Counter>
     <Counter></Counter>
     <Counter></Counter>
    </div>
  );
}

export default App;
