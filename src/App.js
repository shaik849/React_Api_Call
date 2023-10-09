import ApiController from './Controller/ApiController';
import './App.css';
import Counter from './Controller/Counter';
import { CounterContext } from './Controller/ContextApiProvider';
import { useContext } from 'react';
import Cart from './Controller/Cart';
import CartCount from './Controller/CartCount';
import { CartProvide } from './Controller/CartProvide';

function App() {
  const counterState = useContext(CounterContext);
  return (
    <div className="App">
      <CartProvide>
      <div className="cart">
    <CartCount name="Mac book pro" price={1000}></CartCount>
    <CartCount name="Lenovo Thinkpad" price={800}></CartCount>
    <CartCount name="HP Pevileon" price={6000}></CartCount>
    <Cart></Cart>
    </div>
    </CartProvide>
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
